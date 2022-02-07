import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IGetMoviesResult, IGetShowsResult } from "../api/api";
import { deleteNullBackdropPath, makeImagePath } from "../lib/utilities";
import {
  ButtonL,
  ButtonR,
  Container,
  Info,
  Movie,
  Row,
} from "./style/Slider.style";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";

const rowVariants = {
  hidden: (isBack: boolean) => ({
    x: isBack ? -window.innerWidth - 5 : window.innerWidth + 5,
  }),
  visible: {
    x: 0,
  },
  exit: (isBack: boolean) => ({
    x: isBack ? window.innerWidth + 5 : -window.innerWidth - 5,
  }),
};

const movieVariants = {
  normal: {
    scale: 1,
  },
  hover: {
    zIndex: 99,
    scale: 1.3,
    y: -50,
    transition: {
      duration: 0.3,
      delay: 0.4,
      type: "tween",
    },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
      type: "tween",
    },
  },
};

const offset = 6;

interface ISlider {
  data: IGetMoviesResult | IGetShowsResult | undefined;
  type: string;
  category: string;
}

const Slider = ({ data, type, category }: ISlider) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [isBack, setIsBack] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setIsBack(false);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      setIsBack(true);
      const totalMovies = data.results.length - 1;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
    }
  };
  const onBoxClicked = (movieID: number) => {
    navigate(`${type}/${movieID}`);
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  return (
    <Container>
      <ButtonL onClick={decreaseIndex}>
        <MdArrowBackIos />
      </ButtonL>
      <AnimatePresence
        custom={isBack}
        initial={false}
        onExitComplete={toggleLeaving}
      >
        <Row
          custom={isBack}
          variants={rowVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition={{ type: "tween", duration: 0.6 }}
          key={index}
        >
          {data &&
            { ...deleteNullBackdropPath(data) }.results
              .slice(0)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Movie
                  key={movie.id}
                  layoutId={`${movie.id}${type}`}
                  variants={movieVariants}
                  initial="normal"
                  whileHover="hover"
                  transition={{ type: "tween" }}
                  photo={makeImagePath(movie.backdrop_path)}
                  onClick={() => onBoxClicked(movie.id)}
                >
                  <Info variants={infoVariants}>
                    <h4>
                      {movie.title || movie.name} (
                      {movie.release_date === undefined
                        ? movie.first_air_date?.match(/^\d{4}/)
                        : movie.release_date.match(/^\d{4}/)}
                      )
                    </h4>
                    <span>
                      <BsStarFill />
                      {Number(movie.vote_average).toFixed(1)}
                    </span>
                  </Info>
                </Movie>
              ))}
        </Row>
      </AnimatePresence>
      <ButtonR onClick={increaseIndex}>
        <MdArrowForwardIos />
      </ButtonR>
    </Container>
  );
};

export default Slider;
