import React, { useState } from "react";
import Image from "next/image";

const card_work = ({ name, date, image, src }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
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
  );
};

export default card_work;
