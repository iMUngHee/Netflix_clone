import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getMoviesLatest,
  getMoviesTopRated,
  getMoviesUpcoming,
  IGetMoviesResult,
} from "../api/api";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
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

const Movie = () => {
  const { data: topRated, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "TopRated"],
    getMoviesTopRated
  );
  const { data: Latest, isLoading: isLoading2 } = useQuery<IGetMoviesResult>(
    ["movies", "Latest"],
    getMoviesLatest
  );
  const { data: Upcoming, isLoading: isLoading3 } = useQuery<IGetMoviesResult>(
    ["movies", "Upcoming"],
    getMoviesUpcoming
  );
  return (
    <Wrapper>
      {isLoading && isLoading2 && isLoading3 ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={Latest} />
          <Contents>
            <ContentBox>
              <Title>평단의 찬사를 받은 영화</Title>
              <Slider data={topRated} type="topRated" category="movie"/>
            </ContentBox>
            <ContentBox>
              <Title>지금 뜨는 콘텐츠</Title>
              <Slider data={Latest} type="Latest" category="movie"/>
            </ContentBox>
            <ContentBox>
              <Title>NEW! 요즘 대세 콘텐츠</Title>
              <Slider data={Upcoming} type="Upcoming" category="movie"/>
            </ContentBox>
          </Contents>
          <Modal data={topRated} type="topRated" category="movie"/>
          <Modal data={Latest} type="Latest" category="movie"/>
          <Modal data={Upcoming} type="Upcoming" category="movie"/>
        </>
      )}
    </Wrapper>
  );
};

export default Movie;
