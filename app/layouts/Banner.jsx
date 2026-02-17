import React from "react";
import Container from "../components/Container";
import Link from "next/link";
import Flex from "../components/Flex";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(/banner.png)] bg-cover bg-center pt-30">
        <Container>
          <Flex className={"justify-between"}>
            <div className="">
              <h1 className="uppercase font-Oswald font-semibold text-[100px] w-150 text-white leading-26.5">
                Innovative <span className="text-[#C3DF94]">business</span>{" "}
                solutions for everyone
              </h1>
              <p className="text-white text-xl w-125 pt-2 pb-8">
                Our team prioritizes usability and accessibility to ensure that
                every visitor enjoys a seamless intuitive.
              </p>
              <Link href={"/"}>
                <div className="text-white py-5 px-7.5 uppercase bg-[#F75709] rounded-xl font-semibold text-base w-46.25 font-Oswald">
                  lets get in touch
                </div>
              </Link>
            </div>
            <div className="relative ">
              <Image src={"/hero.png"} height={904} width={688} />
              <Image
                src={"/bannerShap.png"}
                height={178}
                width={130}
                className="absolute top-20 left-0"
              />
              <div className="backdrop-blur-lg px-7 py-5 rounded-[20px] text-white bg-white/9 w-54 absolute bottom-25 -left-10">
                <h4 className="font-Oswald text-[60px] font-semibold">92%</h4>
                <p className="text-base">Return on investment</p>
              </div>
              <div className="backdrop-blur-lg bg-white/9 px-7 py-5 rounded-[20px] text-white w-60.5 absolute bottom-60 right-0">
                <h4 className="font-Oswald text-[60px] font-semibold">21.1K</h4>
                <p className="text-base">Happy clients worldwide</p>
              </div>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Banner;
