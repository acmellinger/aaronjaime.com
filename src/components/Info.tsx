import styled from "styled-components";

const Name = styled.h1`
  font-size: 50px;
  display: block;
  line-height: 1;
  color: #fff;
  margin: 0;
  @media only screen and (min-width: 768px) {
    margin: 0;
    font-size: 76px;
  }
`;
const Title = styled.h1`
  font-size: 20px;
  display: block;
  line-height: 1;
  color: #fff;
  margin-top: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 34px;
  }
`;

const InfoDiv = styled.div``;

const Info = () => {
  return (
    <InfoDiv>
      <Name>{import.meta.env.VITE_NAME}</Name>
      <Title>{import.meta.env.VITE_TITLE}</Title>
    </InfoDiv>
  );
};

export default Info;
