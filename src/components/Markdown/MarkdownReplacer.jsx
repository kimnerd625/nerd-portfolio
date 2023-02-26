import React from "react";

const MarkdownReplacer = (text) => { 
  const newText = text.replace(/(\*\*)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>')
  console.log(newText)
  return newText;
}

export default MarkdownReplacer;