import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getTvShowsAiringToday,
  getTvShowsOnTheAir,
  getTvShowsPopular,
  getTvShowsTopRated,
  IGetShowsResult,
} from "../api/api";
import Banner from "../components/Banner";
import ModalTV from "../components/ModalTV";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
  padding-bottom: 200px;
`;
const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 300px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  padding-left: 2%;
  padding-bottom: 15px;
  font-size: 35px;
  font-weight: bold;
  position: relative;
  top: -150px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Tv = () => {
  const { data: popular, isLoading: loadPopular } = useQuery<IGetShowsResult>(
    ["tv", "Popular"],
    getTvShowsPopular
  );
  const { data: topRated, isLoading: loadTopRated } = useQuery<IGetShowsResult>(
    ["tv", "TopRated"],
    getTvShowsTopRated
  );
  const { data: onTheAir, isLoading: loadOnTheAir } = useQuery<IGetShowsResult>(
    ["tv", "OnTheAir"],
    getTvShowsOnTheAir
  );
  const { data: airingToday, isLoading: loadAiringToday } =
    useQuery<IGetShowsResult>(["tv", "AiringToday"], getTvShowsAiringToday);

  return (
    <Wrapper>
      {loadPopular && loadTopRated && loadOnTheAir && loadAiringToday ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={popular} />
          <Contents>
            <ContentBox>
              <Title>평단의 찬사를 받은 시리즈</Title>
              <Slider data={topRated} type="topRated" category="tv"/>
            </ContentBox>
            <ContentBox>
              <Title>취향 저격 인기 콘텐츠</Title>
              <Slider data={popular} type="Popular" category="tv"/>
            </ContentBox>
            <ContentBox>
              <Title>오늘 바로 방영! 콘텐츠</Title>
              <Slider data={airingToday} type="AiringToday" category="tv"/>
            </ContentBox>
            <ContentBox>
              <Title>NEW! 요즘 대세 콘텐츠</Title>
              <Slider data={onTheAir} type="onTheAir" category="tv"/>
            </ContentBox>
          </Contents>
          <ModalTV data={topRated} type="topRated" category="tv"/>
          <ModalTV data={popular} type="Popular" category="tv"/>
          <ModalTV data={airingToday} type="AiringToday" category="tv"/>
          <ModalTV data={onTheAir} type="OnTheAir" category="tv"/>
        </>
      )}
    </Wrapper>
  );
};

export default Tv;
