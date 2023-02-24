import React, { useState, useEffect } from "react";
import { MarkdownContainer } from './MarkdownRenderer.styles';
import ReactMarkdown from "react-markdown";
import introduction from './../../assets/markdown/introduction.md';

const MarkdownRenderer = () => {
  const [ markdown, setMarkdown ] = useState("");

  useEffect(()=> {
    fetch(introduction)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, []);

  console.log(markdown)

  return (
    <MarkdownContainer>
      <ReactMarkdown children={markdown}/>
        {markdown}
      <ReactMarkdown>
        # Hello, *World*!
      </ReactMarkdown>
    </MarkdownContainer>
  )
};

export default MarkdownRenderer;