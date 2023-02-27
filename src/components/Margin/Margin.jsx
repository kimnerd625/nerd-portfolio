import React from "react";
import { MarginContainer } from './Margin.styles';

const Margin = (e) => {

  console.log(e);
  return (
    <MarginContainer size={e.size}/>
  );
};

export default Margin;