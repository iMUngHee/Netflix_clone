import { useQuery } from "react-query";
import styled from "styled-components";
import { getMoviesLatest, getMoviesTopRated, getMoviesUpcoming, IGetMoviesResult } from "../api/api";
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
  const { data: topRated, isLoading } = useQuery<IGetMoviesResult>(
    ["movies", "TopRated"],
    getMoviesTopRated
  );
  const { data: Latest, isLoading: isLoading2} = useQuery<IGetMoviesResult>(
    ["movies", "Latest"],
    getMoviesLatest
  )
  const { data: Upcoming, isLoading: isLoading3} = useQuery<IGetMoviesResult>(
    ["movies", "Upcoming"],
    getMoviesUpcoming
  )
  return (
    <Wrapper>
      {isLoading && isLoading2 && isLoading3? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner data={Latest} />
          <Slider data={topRated} />
          <Modal data={topRated} />
          {/* <Slider data={Latest} /> */}
          {/* <Modal data={Latest} /> */}
          {/* <Slider data={Upcoming} /> */}
          {/* <Modal data={Upcoming} /> */}
        </>
      )}
    </Wrapper>
  );
};

export default Home;
