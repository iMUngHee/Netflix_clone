import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import { IGetMoviesResult } from "../api/api";
import { makeImagePath } from "../lib/utilities";
import {
  Detail,
  DetailImg,
  DetailOverview,
  DetailTitle,
  Overlay,
} from "./style/Modal.style";

interface IModal {
  data: IGetMoviesResult | undefined;
}

const Modal = ({ data }: IModal) => {
  const bigMovieMatch = useMatch("/movies/:movieId");
  const { scrollY } = useViewportScroll();
  const navigate = useNavigate();
  const onOverlayClick = () => navigate(-1);
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id + "" === bigMovieMatch.params.movieId
    );
  return (
    <AnimatePresence>
      {bigMovieMatch ? (
        <>
          <Overlay
            onClick={onOverlayClick}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Detail layoutId={bigMovieMatch.params.movieId} scrolly={scrollY}>
            {clickedMovie && (
              <>
                <DetailImg
                  bgphoto={makeImagePath(clickedMovie.backdrop_path)}
                />
                <DetailTitle>{clickedMovie.title}</DetailTitle>
                <DetailOverview>{clickedMovie.overview}</DetailOverview>
              </>
            )}
          </Detail>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Modal;
