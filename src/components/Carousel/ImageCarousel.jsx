import React, {useState, useEffect, } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import portfolioData from "../../portfolioData.json";
import { ImageContainer, Image, ButtonContainer, Button, } from "./ImageCarousel.styles";

const ImageCarousel = () => {
  const projectName = "url1";
  const {projectImages} = portfolioData;
  const imageList = projectImages[projectName];
  const imageLength = imageList.length - 1;

  const [index, setIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState(imageList[index]);

  const onClickLeft = () => {
    if (index === 0) {

    } else {
      setIndex(index-1);
    }
  };

  const onClickRight = () => {
    if (index === imageLength) {

    } else {
      setIndex(index+1);
    }
  };

  useEffect(()=>{
    setImgUrl(imageList[index]);
  }, [index])


  return(
    <ImageContainer>
      <ButtonContainer>
        <Button
          type='button'
          onClick={onClickLeft}
        >
          <IoChevronBackOutline className='icon'/>
        </Button>
        <Button
          type='button'
          onClick={onClickRight}
        >
          <IoChevronForwardOutline className='icon'/>
        </Button>
      </ButtonContainer>
      <Image src={imgUrl}/>
    </ImageContainer>
  );
};

export default ImageCarousel;