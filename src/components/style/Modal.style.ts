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
  top: ${(props) => props.scrolly.get() + 100}px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(prop) => prop.theme.black.veryDark};
  border-radius: 15px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 10000;
`;

export const DetailImg = styled.div<{ bgphoto: string }>`
  width: 100%;
  height: 500px;
  background-image: linear-gradient(
      to top,
      ${(prop) => prop.theme.black.veryDark},
      transparent
    ),
    url(${(props) => props.bgphoto});
  background-size: cover;
  background-position: center center;
`;

export const DetailTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  font-size: 66px;
  font-weight: bold;
  padding: 40px;
  position: relative;
  top: -150px;
`;
export const DetailInfo = styled.div`
  color: ${(props) => props.theme.white.lighter};
  padding-left: 40px;
  position: relative;
  top: -140px;
  display: flex;
  align-items: center;
  font-weight: lighter;
  font-size: 15px;
`;

export const DetailInfoRelease = styled.span`
  padding-left: 5px;
`;

interface IIsAdult {
  isAdult?: boolean;
}
export const DetailInfoIsAdult = styled.span<IIsAdult>`
  color: ${(props) => (props.isAdult ? "#c0392b" : "#27ae60")};
  padding-left: 10px;
  font-size: 30px;
`;
export const DetailInfoRuntime = styled.span`
  padding-left: 10px;
`;

export const DetailRated = styled.span`
  position: relative;
  top: -135px;
  padding-left: 45px;
  color: #f1c40f;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const DetailSubInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  top: -180px;
  width: 40vw;
  justify-content: center;
  align-items: flex-end;
  padding: 10px;

`;

export const DetailOverview = styled.div`
  color: ${(props) => props.theme.white.lighter};
  padding-left: 40px;
  width: 70%;
  position: relative;
  top: -150px;
  font-size: 15px;
`;

export const DetailSimilar = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 96%;
  gap: 10px;
  position: relative;
  top: -50px;
  right: 0;
  left: 0;
  margin: 0 auto;
`;
export const DetailSimilarTitle = styled.div`
  position: relative;
  padding-left: 30px;
  top: -60px;
  font-size: 30px;
  font-weight: bold;
`;
interface IItem {
  photo: string;
}
export const DetailSimilarItem = styled.div<IItem>`
  background-image: url(${(props) => props.photo});
  position: relative;
  background-size: cover;
  background-position: center;
  height: 300px;
  border-radius: 10px;
  cursor: pointer;
`;
export const DetailSimilarItemInfo = styled(motion.div)`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
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

export const DetailSimilarSorry = styled.div`
  font-size: 50px;
  width: 40vw;
  color: #3498db;
  padding: 50px;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;