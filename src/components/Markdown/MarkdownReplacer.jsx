import React from "react";

const MarkdownReplacer = (text) => {

  const newText = text
    .replace(/(?<!\#)(\#{1}?\s)(.*)/g, '<h1>$2</h1>')
    .replace(/(?<!\#)(\#{2}?\s)(.*)/g, '<h2>$2</h2>')
    .replace(/(?<!\#)(\#{3}?\s)(.*)/g, '<h3>$2</h3>')
    .replace(/(\*\*)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>');
  console.log(newText)
  return newText;
}

export default MarkdownReplacer;