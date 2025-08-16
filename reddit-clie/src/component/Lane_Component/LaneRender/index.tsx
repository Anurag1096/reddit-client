//This comp will manage the calling of api and pass it to the render component

import Renderer from "./renderer";
import {useState,useEffect} from 'react';

interface SubName{
    name:string
}
const LaneRender=({name}:SubName)=>{

const [laneObj,setLaneObj]=useState({})
const [loading,setLoading] = useState(false)
const [error,setError] = useState<string>()


const fetchApi=async()=>{    
    try {
        setLoading(true)
        // will fix later
        const response= await fetch(name)
        if(!response.ok) throw new Error(`Http Error! status: ${response.status}`)
        const data =await response.json()
        setLaneObj(data)
    }catch(err: any){
        setError( err.message || 'Something went wrong' )
    }finally{
        setLoading(false)
        console.log("done")
    }
}

useEffect(()=>{

    fetchApi()
},[])

if(loading) return (<p>Loading...</p>)
if (error) return <p style={{ color: "red" }}>Error: {error}</p>;   


    return (<Renderer {...laneObj}/>)
}


export default LaneRender