import React from 'react'

interface RendererProps{
    title:string,
    author:string,
    voteCount:number
}

const Renderer = (props:RendererProps) => {
    const {title,author,voteCount}=props
    return (<>
    <div>{title}</div>
    <div>{author}</div>
    <div>{voteCount}</div>
  </>)
}

export default Renderer