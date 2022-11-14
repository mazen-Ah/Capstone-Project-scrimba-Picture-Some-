import { React, useContext } from "react";
import Header from "../components/Header";
import { Context } from "../Context";
import Image from "../components/Image";
import { getClass } from "../utils";

const Home = () => {
  const { allPhotos } = useContext(Context);
  const imageElements = allPhotos.map((img, i) => {
    return <Image key={img.id} img={img} className={getClass(i)} />;
  });
  return (
    <>
      <Header />
      <div className="p-2 auto-rows-[100px]	grid gap-1 grid-flow-dense grid-cols-[repeat(auto-fit,minmax(100px,1fr))]">
        {imageElements}
      </div>
    </>
  );
};

export default Home;
