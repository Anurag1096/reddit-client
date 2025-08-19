import React from "react";
import './render.css'
interface RendererProps {
  title: string;
  author: string;
  voteCount: number;
}

const Renderer = ({ title, author, voteCount }:RendererProps) => {
  return (
    <>
      <div className="render-wrapper">
        <div className="render-count">{voteCount}</div>
        <div>
          <div className="render-item">{title}</div>
          <div className="render-item"> {author}</div>
        </div>
      </div>
    </>
  );
};

export default Renderer;
