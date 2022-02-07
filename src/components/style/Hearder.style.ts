import { motion } from "framer-motion";
import styled from "styled-components";

export const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  font-size: 14px;
  padding: 20px 60px;
`;

export const Col = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled(motion.svg)`
  margin-right: 50px;
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red.darker};
  path {
    stroke-width: 6px;
    stroke: ${(props) => props.theme.red.lighter};
  }
`;

export const Items = styled.ul`
  display: flex;
  align-items: center;
`;

export const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.white.darker};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.white.lighter};
  }
`;

export const Search = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
    cursor: pointer;
  }
`;

export const Input = styled(motion.input)`
  position: absolute;
  transform-origin: right center;
  right: 0px;
  padding: 8px 10px;
  padding-left: 40px;
  width: 240px;
  z-index: -1;
  color: white;
  font-size: 14px;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid ${(props) => props.theme.white.lighter};
  &::placeholder {
    color: rgba(229 ,229, 229, 0.6);
  }
`;

export const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  bottom: -8px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.white.lighter};
`;
