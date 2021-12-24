import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  // background-color: teal;
  background-color: gray;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Super Deal! Free Shiping and Orders Over Rp. 200.000</Container>;
};

export default Announcement;
