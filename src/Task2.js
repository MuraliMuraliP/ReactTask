import { useState } from "react"
const Task2 =()=>{
    const[name,setName]=useState({
        name:"murali",
        age:18,
        city:"chennai",
        year:2023
       });
       const updateName = () => {
        setName(previousState => {
          return { ...previousState, name: "Nithish" }
        });
      }
    return(
        <>
        <h1>Hello {name.city}!</h1>
        <p>
         I'm a {name.name} {name.city} from {name.year}.
        </p>
        <button
          type="button"
          onClick={updateName}
        >Nithish</button>
      </>
    )
}
export default Task2