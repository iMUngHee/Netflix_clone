import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: -100px;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  margin-bottom: 5px;
  position: absolute;
  width: 100%;
`;

export const Movie = styled(motion.div)<{ photo: string }>`
  background-color: white;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  height: 250px;
  font-size: 66px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

export const Info = styled(motion.div)`
  padding: 20px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 10px;
  }
`;
