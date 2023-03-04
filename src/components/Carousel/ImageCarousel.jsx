import React, {useState, useEffect, } from "react";

import portfolioData from "../../portfolioData.json";
import { ImageContainer, Image, Button, } from "./ImageCarousel.styles";

const ImageCarousel = () => {

  const name = "url1";

  const {projectImages} = portfolioData;

  const projectlist = projectImages[name];

  const [index, setIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(projectlist[index]);

  const onClickLeft = () => {
    setIndex(index-1);
  };

  const onClickRight = () => {
    setIndex(index+1);
  };

  useEffect(()=>{
    setImgUrl(projectlist[index]);
  }, [index])


  return(
    <ImageContainer>
      <Button
        onClick={onClickRight}
      />
      <Image src={imgUrl}/>
    </ImageContainer>
  );
};

export default ImageCarousel;