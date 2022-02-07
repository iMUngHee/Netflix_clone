import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useQuery } from "react-query";
import { MdLocalMovies } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { FaGrinBeamSweat } from "react-icons/fa";
import { useMatch, useNavigate } from "react-router-dom";
import {
  getMovieCredit,
  getMovieDetail,
  getMoviesSimilar,
  ICredit,
  IGetMovieDetail,
  IGetMoviesResult,
} from "../api/api";
import { deleteNullBackdropPath, makeImagePath } from "../lib/utilities";
import {
  Detail,
  DetailImg,
  DetailInfo,
  DetailInfoIsAdult,
  DetailInfoRelease,
  DetailInfoRuntime,
  DetailOverview,
  DetailRated,
  DetailSimilar,
  DetailSimilarItem,
  DetailSimilarItemInfo,
  DetailSimilarSorry,
  DetailSimilarTitle,
  DetailSubInfo,
  DetailTitle,
  Overlay,
} from "./style/Modal.style";

interface IModal {
  data: IGetMoviesResult | undefined;
  type: string;
  category: string;
}

const infoVariants = {
  normal: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
      type: "tween",
    },
  },
};

const Modal = ({ data, type, category }: IModal) => {
  const bigMovieMatch = useMatch(`/${category}/${type}/:movieId`);
  const { scrollY } = useViewportScroll();
  const { data: detail } = useQuery<IGetMovieDetail>(
    ["movie", `Detail_${bigMovieMatch?.params.movieId}`],
    () => getMovieDetail(bigMovieMatch?.params.movieId)
  );
  const { data: similar } = useQuery<IGetMoviesResult>(
    ["movie", `Similar_${bigMovieMatch?.params.movieId}`],
    () => getMoviesSimilar(bigMovieMatch?.params.movieId)
  );
  const { data: cast } = useQuery<ICredit>(
    ["movie", `Credit_${bigMovieMatch?.params.movieId}`],
    () => getMovieCredit(bigMovieMatch?.params.movieId)
  );
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + "" === bigMovieMatch.params.movieId
    );
  const minuteToHour = (runtime: any) => {
    if (runtime > 60) {
      return `${Math.floor(runtime / 60)}시간 ${runtime % 60}분`;
    } else {
      return `${runtime}분`;
    }
  };
  return (
    <AnimatePresence>
      {bigMovieMatch ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Detail
            layoutId={`${bigMovieMatch.params.movieId}${type}`}
            scrolly={scrollY}
          >
            {clickedMovie && (
              <>
                <DetailImg
                  bgphoto={makeImagePath(clickedMovie.backdrop_path)}
                />
                <DetailTitle>{clickedMovie.title}</DetailTitle>
                <DetailInfo>
                  <DetailInfoRelease>
                    {detail?.release_date.match(/^\d{4}/)}
                  </DetailInfoRelease>
                  <DetailInfoIsAdult isAdult={detail?.adult}>
                    <MdLocalMovies />
                  </DetailInfoIsAdult>
                  <DetailInfoRuntime>
                    {minuteToHour(detail?.runtime)}
                  </DetailInfoRuntime>
                </DetailInfo>
                <DetailRated>
                  <BsStarFill />
                  {Number(detail?.vote_average).toFixed(1)}
                </DetailRated>
                <DetailSubInfo>
                  <span>
                    출연: {cast?.cast.slice(0, 3).map((idx) => `${idx.name}. `)}
                  </span>
                  <span>
                    장르: {detail?.genres.map((genre) => `${genre.name}. `)}
                  </span>
                </DetailSubInfo>
                <DetailOverview>{clickedMovie.overview}</DetailOverview>
                <DetailSimilarTitle>비슷한 콘텐츠</DetailSimilarTitle>
                <DetailSimilar>
                  {similar?.total_pages !== 0 ? (
                    similar &&
                    { ...deleteNullBackdropPath(similar) }.results
                      .slice(0, 8)
                      .map((movie) => (
                        <DetailSimilarItem
                          key={movie.id}
                          photo={makeImagePath(movie.backdrop_path)}
                        >
                          <DetailSimilarItemInfo
                            variants={infoVariants}
                            initial="normal"
                            whileHover="hover"
                          >
                            <h4>
                              {movie.title} (
                              {movie.release_date?.match(/^\d{4}/)})
                            </h4>
                            <span>
                              <BsStarFill />
                              {Number(movie.vote_average).toFixed(1)}
                            </span>
                          </DetailSimilarItemInfo>
                        </DetailSimilarItem>
                      ))
                  ) : (
                    <DetailSimilarSorry>
                      <FaGrinBeamSweat />
                      아직 시간이 더 필요해요...
                    </DetailSimilarSorry>
                  )}
                </DetailSimilar>
              </>
            )}
          </Detail>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
