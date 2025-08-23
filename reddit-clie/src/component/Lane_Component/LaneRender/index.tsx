import Renderer from "./renderer";
import { useState, useEffect } from "react";
import { getSubReddit } from "../../../api/subRedditApi";

interface SubName {
  name: string;
}

interface LaneState {
  title: string | null;
  author: string | null;
  voteCount: number;
}

const LaneRender = ({ name }: SubName) => {
  const [laneObj, setLaneObj] = useState<unknown[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();

  const fetchApi = async () => {
    try {
      setLoading(true);
      const response = await getSubReddit(name);
      // 👇 If your API returns an array that matches LaneState[]
      const data = response.data;
      setLaneObj(data.data.children);
      console.log(data.data.children)
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
      console.log("done");
    }
  };

  useEffect(() => {
    fetchApi();
  }, [name]); // ✅ refetch when subreddit name changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <>
      {laneObj.map((lane, idx) => (
        <Renderer
          key={idx}
          title={lane.data.title ?? ""}
          author={lane.data.author ?? ""}
          ups={lane.data.ups}
        />
      ))}
    </>
  );
};

export default LaneRender;
