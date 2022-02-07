import { IGetMoviesResult, IGetShowsResult } from "../api/api";
import { makeImagePath } from "../lib/utilities";
import { Container, Overview, Title } from "./style/Banner.style";

interface IBanner {
  data: IGetMoviesResult | IGetShowsResult | undefined;
}

const Banner = ({ data }: IBanner) => {
  return (
    <Container bgphoto={makeImagePath(data?.results[0].backdrop_path || "")}>
      <Title>{data?.results[0].title || data?.results[0].name}</Title>
      <Overview>{data?.results[0].overview}</Overview>
    </Container>
  );
};

export default Banner;
