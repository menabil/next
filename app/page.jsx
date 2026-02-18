import About from "./layouts/About";
import Banner from "./layouts/Banner";
import Counter from "./layouts/Counter";
import Service from "./layouts/Service";

export default function Home() {
  return (
    <>
      <Banner />
      <Service />
      <About />
      <Counter />
    </>
  );
}
