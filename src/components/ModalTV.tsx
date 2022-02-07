import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useQuery } from "react-query";
import { MdLocalMovies } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { FaGrinBeamSweat } from "react-icons/fa";
import { useMatch, useNavigate } from "react-router-dom";
import {
  getShowCredit,
  getShowDetail,
  getShowSimilar,
  ICredit,
  IGetShowDetail,
  IGetShowsResult,
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
import NotFound from "../lib/NotFound";

interface IModal {
  data: IGetShowsResult | undefined;
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
  const { data: detail } = useQuery<IGetShowDetail>(
    ["tv", `Detail_${bigMovieMatch?.params.movieId}`],
    () => getShowDetail(bigMovieMatch?.params.movieId)
  );
  const { data: similar } = useQuery<IGetShowsResult>(
    ["tv", `Similar_${bigMovieMatch?.params.movieId}`],
    () => getShowSimilar(bigMovieMatch?.params.movieId)
  );
  const { data: cast } = useQuery<ICredit>(
    ["tv", `Credit_${bigMovieMatch?.params.movieId}`],
    () => getShowCredit(bigMovieMatch?.params.movieId)
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
  console.log(detail);
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
            { detail?.first_air_date === null ? (
              <NotFound />
            ) : (
              clickedMovie && (
                <>
                  <DetailImg
                    bgphoto={makeImagePath(clickedMovie.backdrop_path)}
                  />
                  <DetailTitle>{clickedMovie.name}</DetailTitle>
                  <DetailInfo>
                    <DetailInfoRelease>
                      {detail?.first_air_date.match(/^\d{4}/)}
                    </DetailInfoRelease>
                    <DetailInfoIsAdult isAdult={false}>
                      <MdLocalMovies />
                    </DetailInfoIsAdult>
                    <DetailInfoRuntime>
                      에피소드 런타임: {minuteToHour(detail?.episode_run_time)}
                    </DetailInfoRuntime>
                  </DetailInfo>
                  <DetailRated>
                    <BsStarFill />
                    {Number(detail?.vote_average).toFixed(1)}
                  </DetailRated>
                  <DetailSubInfo>
                    <span>
                      출연:{" "}
                      {cast?.cast.slice(0, 3).map((idx) => `${idx.name}. `)}
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
                                {movie.name} (
                                {movie.first_air_date?.match(/^\d{4}/)})
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
              )
            )}
          </Detail>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
