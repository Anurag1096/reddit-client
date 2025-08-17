import { useContext } from "react"
import { SubNameContext } from "../../App"
export const LaneAdding=()=>{
    const ctx=useContext(SubNameContext)
    if (!ctx) throw new Error("SubNameContext must be used within App");
    const {setSubName}=ctx
    const handleAdd=()=>{
        // need work
        setSubName(prev=>prev)
    }
    
    return (<></>)
}

