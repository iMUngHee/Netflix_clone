import { useEffect } from "react";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import {
  getSearchMovie,
  getSearchShow,
  IGetMoviesResult,
  IGetShowsResult,
} from "../api/api";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
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

const Search = () => {
  const [search] = useSearchParams();
  const keyword = search.get("keyword");
  const { data: movies, isLoading: loadMovies , refetch: refetchMovie} = useQuery<IGetMoviesResult>(
    ["search", "movie"],
    () => getSearchMovie(keyword)
  );
  const { data: tv, isLoading: loadShows, refetch: refetchTV } = useQuery<IGetShowsResult>(
    ["search", "tv"],
    () => getSearchShow(keyword)
  );
  useEffect(() => {
    if(keyword === null) return;
    refetchMovie();
    refetchTV();
  }, [keyword, refetchMovie, refetchTV])
  return (
    <Wrapper>
      {loadMovies && loadShows ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={movies} />
          <Contents>
            <ContentBox>
              <Title>'{keyword}' 관련된 모든 영화</Title>
              <Slider data={movies} type="movie" category="movie" />
            </ContentBox>
            <ContentBox>
              <Title>'{keyword}' 관련된 모든 시리즈</Title>
              <Slider data={tv} type="tv" category="tv" />
            </ContentBox>
          </Contents>
          <Modal data={movies} type="movie" category="search" />
          <ModalTV data={tv} type="tv" category="search" />
        </>
      )}
    </Wrapper>
  );
};

export default Search;
