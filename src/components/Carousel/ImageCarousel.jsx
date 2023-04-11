import React, {useState, useEffect, } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

import portfolioData from "../../portfolioData.json";
import { 
  ImageContainer, 
  Image, 
  ButtonContainer, 
  Button, 
  PreviewImage, 
} from "./ImageCarousel.styles";

const ImageCarousel = ({projectName}) => {
  const arrayIndex = projectName;
  const {projectImages} = portfolioData;
  const imageList = projectImages[arrayIndex];
  const imageLength = imageList.length - 1;

  const [index, setIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [imgUrl, setImgUrl] = useState(imageList[index]);
  const [nextImgUrl, setNextImgURl] = useState(imageList[nextIndex]);

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
    if (nextIndex > imageLength) {
      setNextIndex(index);
    }
    setNextIndex(index+1);
    setNextImgURl(imageList[nextIndex]);
  }, [index, nextIndex])


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
      <Image src={imgUrl} key={`${imgUrl}`}/>
      <PreviewImage src={nextImgUrl} key={`${nextImgUrl}`}/>
    </ImageContainer>
  );
};

export default ImageCarousel;