import React, { useState } from "react";
import Image from "next/image";
import Tilt from "react-tilt";

const card_work = ({ name, date, image, src }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Tilt
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
    >
      <a
        className="card_work"
        href={src}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <Image className="img_netflix" src={image} width={500} height={500} />
        {isHovering && (
          <div className="hover">
            <div className="see_img"></div>
            <div className="text_hover">
              <div></div>
              <div className="text">
                <p className="title_hover">{name}</p>
                <p className="date">{date}</p>
              </div>
            </div>
          </div>
        )}
      </a>
    </Tilt>
  );
};

export default card_work;
