import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Banner = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/eb482c64-e879-4e88-9ddc-d839cb7d1232/df2916c4-fbc7-4814-8dc9-bf307b678808/KR-ko-20220131-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 150px;
  h1 {
    font-size: 66px;
    font-weight: bold;
  }
  h3 {
    margin-top: 20px;
    font-size: 20px;
  }
  h4 {
    margin-top: 10px;
    font-size: 15px;
  }
  span {
    cursor: pointer;
    margin-top: 30px;
    background-color: ${(props) => props.theme.red.lighter};
    padding: 10px 20px;
    font-size: 30px;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
      background-color: ${(props) => props.theme.red.darker};
    }
  }
`;

const Home = () => {
  const navigate = useNavigate();
  const onClick = () => navigate("/movie");
  return (
    <Banner>
      <h1>영화와 시리즈를 무제한으로.</h1>
      <h3>이 사이트는 넷플릭스 클론 사이트 입니다.</h3>
      <h4> 넷플릭스 화이팅!</h4>
      <span onClick={onClick}>시작하기 {">"}</span>
    </Banner>
  );
};

export default Home;
