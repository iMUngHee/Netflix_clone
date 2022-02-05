import styled from "styled-components";

export const Container = styled.div<{ bgphoto: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgphoto});
  background-size: cover;
`;

export const Title = styled.h2`
  font-size: 130px;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const Overview = styled.p`
  font-size: 40px;
  width: 40%;
`;