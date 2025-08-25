import { useState, useEffect } from "react";
import LaneRender from "./LaneRender";
import { useContext } from "react";
import { SubNameContext } from "../../App";
type LaneState = string[];

const LaneManager = () => {
  // the lane managers job is to maintain an array of values to render
  //need to think about adding the lane
  const ctx = useContext(SubNameContext);
  if (!ctx) throw new Error("SubNameContext must be used within App");
  const { subRedName } = ctx;
  const [laneArr, setLaneArr] = useState<LaneState>([]);
  const removeLane = (subName: string) => {
    setLaneArr((prev) => prev.filter((val) => val !== subName));
  };

  //useEffect
  useEffect(() => {
    //when the global context value will change this use effect will track
    if (subRedName) {
      setLaneArr((prev) => [...prev, subRedName]);
    }
  }, [subRedName]);
  return (
    <div style={{display:'flex'}}>
      {laneArr.map((srName: string) => {
        return (<div style={{resize:"horizontal",overflow:"scroll" ,width:"100%",height:"94vh",padding:"0.5rem"}}><LaneRender key={srName} name={srName} /></div>)
      })}
  </div>
  );
};

export default LaneManager;
