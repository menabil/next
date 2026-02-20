import Image from "next/image";
import React from "react";
import Container from "../components/Container";

const Process = () => {
  return (
    <div className="bg-[#063231] relative py-32.5">
      <Image
        src={"/process.png"}
        className="absolute top-0 right-0"
        height={567}
        width={538}
      />
      <Container className={"text-center"}>
        <p className="font-Oswald font-semibold text-base text-[#F75709] uppercase">
          Working process
        </p>
        <h3 className="uppercase font-Oswald text-white mx-auto font-semibold text-[60px] leading-[66px] w-[550px] pt-2.5 pb-7.5">
          We make things easy for you to start
        </h3>
      </Container>
    </div>
  );
};

export default Process;
