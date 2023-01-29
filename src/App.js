import React, { useEffect, useState } from "react";
import "./styles.css";
import a from "./images/1.jpg";
import b from "./images/2.jpg";
import c from "./images/3.jpg";
import d from "./images/4.jpg";

const images = [a, b, c, d];
export default function App() {
  const [currentImage, setCurrentImage] = useState(null);
  const [count, setCount] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === images.length - 1) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);
  // useEffect(() => {
  //     const intervalId = setInterval(() => {
  //       // for(let i = 0; i < images.length; i++) {
  //       //   console.log(i)
  //         setCurrentImage(images[Math.floor(Math.random() * count)]);
  //         setCount((prev) => prev + 1)
  //         console.log(count)
  //       // }
  //     }, 5000)

  //     return () => clearInterval(intervalId);
  // }, [])
  console.log(currentImage);
  console.log(currentIndex);
  return (
    <div className="App">
      <div className="first">
        <img src={images[currentIndex]} width="230px" />
      </div>
      <div className="second" style={{ width: "100%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            position: "relative",
            height: "3px",
            background: "rgba(222, 225, 227)"
          }}
        >
          <div
            class="progress"
            style={{
              display: "block",
              height: "3px",
              position: "absolute",
              top: "0px"
            }}
          ></div>
        </div>
      </div>
      {/* <img src={currentImage} /> */}
    </div>
  );
}

//every 5 sec change image with prgressbar in react
