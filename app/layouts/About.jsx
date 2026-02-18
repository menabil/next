import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Container>
        <Flex className={"mt-12 justify-between"}>
          <Image src={"/about.png"} width={624} height={688} alt="about.png" />
          <div className="w-[530px]">
            <h5 className="text-base text-[#F75709] font-Oswald font-semibold uppercase">
              About company
            </h5>
            <h3 className="py-2.5 text-[60px] text-[#063231] font-Oswald font-semibold leading-16.5 uppercase">
              We committed to helping you achieve your goals
            </h3>
            <p className="text-xl text-[#063231] leading-7.5 mb-7.5">
              At the core of our ethos lies a dedication to our clients. Your
              success is our shared triumph, and we're unwavering in our
              commitment to delivering exceptional,
            </p>
            <Link href={"/"}>
              <div className="text-white py-5 px-7.5 uppercase bg-[#063231] rounded-xl font-semibold text-base w-46.25 font-Oswald">
                lets get in touch
              </div>
            </Link>
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default About;
