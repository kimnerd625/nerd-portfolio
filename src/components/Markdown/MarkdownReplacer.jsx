import React from "react";

const MarkdownReplacer = (text) => { 
  const newText = text
    .replace(/(\+R\+)(?=\S)([^\r]*?\S[*_]*)\1/g, '<boldred>$2</boldred>')
    .replace(/(\+B\+)(?=\S)([^\r]*?\S[*_]*)\1/g, '<boldblue>$2</boldblue>')
    .replace(/(\+G\+)(?=\S)([^\r]*?\S[*_]*)\1/g, '<boldgreen>$2</boldgreen>')
    .replace(/(\*\*)(?=\S)([^\r]*?\S[*_]*)\1/g, '<strong>$2</strong>');
  console.log(newText)
  return newText;
}

export default MarkdownReplacer;