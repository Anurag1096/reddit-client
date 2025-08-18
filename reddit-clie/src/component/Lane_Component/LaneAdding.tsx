import { useContext,useState, type SetStateAction } from "react"
import { SubNameContext } from "../../App"
import './LaneAdding.css'
export const LaneAdding=()=>{
    const [name,setName]=useState<string>("")
    const ctx=useContext(SubNameContext)
    if (!ctx) throw new Error("SubNameContext must be used within App");
    const { subRedName ,setSubName}=ctx



    const handleChange=(e: { target: { value: SetStateAction<string> } })=>{
        setName(e.target.value)
    }
    const handleAdd=(e)=>{
        e.preventDefault()
        // need work
        setSubName(name)
        setName("")
    }
    
    return (<>
    <div >
    <form className="lane-wrapper" onSubmit={handleAdd}>
        <label className="lane-item" htmlFor="subName">Enter The name of subreddit</label>
        <input  id="subName" type="text" value={name} onChange={handleChange} />
        <button type="submit">Add subreddit</button> 
    </form>
    </div>
    </>)
}

