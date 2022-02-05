import { motion, MotionValue } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
`;

export const Detail = styled(motion.div)<{ scrolly: MotionValue<number> }>`
  position: absolute;
  width: 40vw;
  height: 80vh;
  top: ${(props) => props.scrolly.get() + 200}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(prop) => prop.theme.black.lighter};
  border-radius: 15px;
  overflow: hidden;
`;

export const DetailImg = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(to top, black, transparent),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;
export const DetailTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 46px;
  padding: 20px;
  position: relative;
  top: -60px;
`;

export const DetailOverview = styled.div`
  color: ${(props) => props.theme.white.lighter};
  padding: 20px;
  position: relative;
  top: -60px;
`;
