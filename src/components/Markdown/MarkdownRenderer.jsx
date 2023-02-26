import React, { useState, useEffect, useRef } from "react";
import { MarkdownContainer, MarkdownText } from './MarkdownRenderer.styles';
import introduction from './../../assets/markdown/introduction.md';
import MarkdownReplacer from "./MarkdownReplacer";

const MarkdownRenderer = () => {
  const [ markdown, setMarkdown ] = useState("");

  useEffect(()=> {
    fetch(introduction)
      .then((res) => res.text())
      .then((text) => MarkdownReplacer(text))
      .then((text) => setMarkdown(text));
  }, []);

  return (
    <MarkdownContainer>
      <MarkdownText dangerouslySetInnerHTML={{__html: markdown }}/>
    </MarkdownContainer>
  )
};

export default MarkdownRenderer;