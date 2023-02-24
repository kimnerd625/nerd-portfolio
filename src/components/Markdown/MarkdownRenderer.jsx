import React from "react";
import { MarkdownContainer } from './MarkdownRenderer.styles';
import ReactMarkdown from "react-markdown";
import introduction from './../../assets/markdown/introduction.md';

const MarkdownRenderer = () => {
  return (
    <MarkdownContainer>
      <ReactMarkdown>
        {introduction}
      </ReactMarkdown>
    </MarkdownContainer>
  )
};

export default MarkdownRenderer;