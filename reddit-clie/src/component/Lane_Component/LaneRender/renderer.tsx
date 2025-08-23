import React from "react";
import './render.css'
interface RendererProps {
  title: string;
  author: string;
  ups: number;
}

const Renderer = ({ title, author, ups }:RendererProps) => {
  return (
    <>
      <div className="render-wrapper">
        <div className="render-count">{ups}</div>
        <div style={{display:'flex',flexDirection:'column'}}>
          <div className="render-item">{title.slice(0,20)}</div>
          <div className="render-item"> {author}</div>
        </div>
      </div>
    </>
  );
};

export default Renderer;
