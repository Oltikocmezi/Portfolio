import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "./images";

function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(images);

  return (
    <div className="">
      <motion.div
        ref={carousel}
        className="mx-64 carousel cursor-grab overflow-hidden bg-orange-300"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel flex bg-blue-200"
        >
          {images.map((image) => {
            return (
              <motion.div key={image} className="item w-full min-w-[90%] p-10">
                <img
                  className="w-full h-full rounded-xl pointer-events-none"
                  src={image}
                  alt="img"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
