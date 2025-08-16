import {useState} from "react";
import LaneRender from "./LaneRender";
type LaneState=string[]

const LaneManager=()=>{
   // the lane managers job is to maintain an array of values to render
   //need to think about adding the lane
    const [laneArr,setLaneArr]=useState<LaneState>([])
    
    const removeLane=(subName:string)=>{
        return laneArr.filter((name)=> name != subName)
    }

   return (<>
    {laneArr.map((srName:string)=>{
          return (<LaneRender name={srName}/>)
    })}
   </>) 
}

export default LaneManager


