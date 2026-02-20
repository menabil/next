import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";

const Counter = () => {
  return (
    <div className="my-32.5">
      <Container>
        <Flex className="bg-[#F5F7F7] rounded-[20px] py-7.5 px-3 justify-between">
          <div className="text-center w-1/3">
            <div className="relative after:content-'' after:h-35 after:w-0.5 after:absolute after:right-0 after:top-7 after:bg-[#D7DEDE]"></div>
            <h3 className="text-[#063231] text-[80px] font-Oswald font-semibold">
              8K<span className="text-[#F75709]">+</span>
            </h3>
            <h5 className="font-Oswald font-semibold text-2xl text-[#063231]">
              Years in business
            </h5>
            <p className="text-lg text-[#063231] ">
              Creating the successful path
            </p>
          </div>
          <div className="text-center w-1/3">
            <div className="relative after:content-'' after:h-35 after:w-0.5 after:absolute after:right-0 after:top-7 after:bg-[#D7DEDE]"></div>
            <h3 className="text-[#063231] text-[80px] font-Oswald font-semibold">
              340<span className="text-[#F75709]">+</span>
            </h3>
            <h5 className="font-Oswald font-semibold text-2xl text-[#063231]">
              Projects delivered
            </h5>
            <p className="text-lg text-[#063231] ">
              with client satisfaction in 6 years
            </p>
          </div>
          <div className="text-center w-1/3">
            <h3 className="text-[#063231] text-[80px] font-Oswald font-semibold">
              28<span className="text-[#F75709]">+</span>
            </h3>
            <h5 className="font-Oswald font-semibold text-2xl text-[#063231]">
              Team members
            </h5>
            <p className="text-lg text-[#063231] ">Working for your success</p>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Counter;
