import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  font-size: 50px;
  cursor: pointer;
`

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate("/movie")}>
      검색된 정보가 없습니다...😱
    </Container>
  );
};

export default NotFound;