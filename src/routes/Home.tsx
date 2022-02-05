import { useQuery } from "react-query";
import styled from "styled-components";
import { getMoviesPopular, IGetMoviesResult } from "../api/api";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import Slider from "../components/Slider";

const Wrapper = styled.div`
  background-color: black;
  overflow-x: hidden;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { data, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMoviesPopular
  );
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={data} />
          <Slider data={data} />
          <Modal data={data} />
        </>
      )}
    </Wrapper>
  );
};

export default Home;
