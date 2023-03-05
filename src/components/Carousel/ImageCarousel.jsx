import React, {useState, useEffect, } from "react";

import portfolioData from "../../portfolioData.json";
import { ImageContainer, Image, Button, } from "./ImageCarousel.styles";

const ImageCarousel = () => {
  const projectName = "url1";
  const {projectImages} = portfolioData;
  const imageList = projectImages[projectName];
  const imageLength = imageList.length - 1;

  const [index, setIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(imageList[index]);

  const onClickLeft = () => {
    setIndex(index-1);
  };

  const onClickRight = () => {
    setIndex(index+1);
  };

  useEffect(()=>{
    setImgUrl(imageList[index]);
  }, [index])


  return(
    <ImageContainer>
      <Button
        onClick={onClickLeft}
        disabled={index === 0 ? true: false}
      />
      <Button
        onClick={onClickRight}
        disabled={index === imageLength ? true: false}
      />
      <Image src={imgUrl}/>
    </ImageContainer>
  );
};

export default ImageCarousel;