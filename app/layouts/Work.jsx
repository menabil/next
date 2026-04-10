import React from "react";
import Container from "../components/Container";
import { FaAngleLeft } from "react-icons/fa6";

const Work = () => {
  return (
    <div className="my-32.5">
      <Container>
        <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
          Selected Works
        </p>
        <h3 className="uppercase font-Oswald text-[#063231] font-semibold text-[60px] leading-16.5 w-112.5 pt-2.5 pb-14">
          Our complete project list
        </h3>
        <div className="w-16 h-16 rounded-full border-[#D7DEDE] border-2 relative text-[#063231] text-2xl hover:bg-[#F75709] hover:text-white cursor-pointer duration-300">
          <FaAngleLeft className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 " />
        </div>
      </Container>
    </div>
  );
};

export default Work;
