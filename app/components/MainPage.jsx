import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaLocationDot } from "react-icons/fa6";

const MainPage = () => {
  return (
    <div>
      <Container>
        <Flex className={"gap-x-2"}>
          <FaLocationDot />
          <p> 2774 Oak Drive, Plattsburgh, New York</p>
        </Flex>
      </Container>
    </div>
  );
};

export default MainPage;
