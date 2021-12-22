/**
 * @file 简介索引
 * @author caifeng
 */
import { memo, useRef, useState } from "react";
import { CarouselRef } from "antd/lib/carousel";
import { Carousel } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Shadow, BorderImage, Transform, Word, Feature } from "./teach";
// import TeachDemos from "./teachdemos";
// import { useCounter } from "../hooks";

const config = {
  Feature: <Feature />,
  Word: <Word />,
  Transform: <Transform />,
  BorderImage: <BorderImage />,
  Shadow: <Shadow />
  // TEACHDEMOS: <TeachDemos />
};

const configArr = Object.keys(config);

const Temp = memo(
  ({
    carouselRef
  }: {
    carouselRef: React.MutableRefObject<CarouselRef | null | undefined>;
  }) => (
    <Carousel arrows ref={(ref) => (carouselRef.current = ref)}>
      {Object.values(config).map((item) => item)}
    </Carousel>
  )
);
const max = configArr.length - 1;

export default () => {
  const carouselRef = useRef<CarouselRef | null>();
  const [number, setNumber] = useState(0);
  const dec = (num: number) =>
    setNumber((temp) => (temp - num > 0 ? temp - num : 0));
  const inc = (num: number) =>
    setNumber((temp) => (temp + num <= max ? temp + num : max));
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 80px",
          fontSize: 20,
          color: "#108cee",
          fontWeight: 500
        }}
      >
        <CaretLeftOutlined
          style={{ fontSize: 30, color: !number ? "#ccc" : "" }}
          onClick={() => {
            if (!number) {
              return;
            }
            carouselRef.current?.prev();

            dec(1);
          }}
        />
        <div>{configArr[number]}</div>
        <CaretRightOutlined
          style={{ fontSize: 30, color: number >= max ? "#ccc" : "" }}
          onClick={() => {
            if (number >= max) {
              return;
            }
            carouselRef.current?.next();
            inc(1);
          }}
        />
      </div>
      <Temp carouselRef={carouselRef} />
    </>
  );
};
