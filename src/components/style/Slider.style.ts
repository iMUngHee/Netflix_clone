import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: -150px;
  padding: 0 2%;
`;

export const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  margin-bottom: 5px;
  position: absolute;
  width: 96%;
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
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h4 {
    text-align: center;
    font-size: 35px;
    font-weight: bold;
  }
  span {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
    color: #f1c40f;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 40px;
  position: absolute;
  top: 100px;
  z-index: 1000;
`;

export const ButtonL = styled(Button)`
  left: 0.6%;
`;
export const ButtonR = styled(Button)`
  right: 0.2%;
`;
