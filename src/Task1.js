import { useState } from "react"
const Task1 = ()=>{
    const [name,setName]=useState("Murali");
    const [age,setAge]=useState(22);
    const[city,setCity]=useState("chennai");
    const[phoneNumber,setPhoneNumber]=useState(8270916470);
    const[first,setFirst]=useState({
        name:"murali",
        age:18,
        city:"chennai",
        year:2023
       });
    return (
        <>
        <h1> Hello! I'm {name} </h1>
        <h2>My is age {age}</h2>
        <h3>Welcome to {city} !</h3>
        <h4>Contact me: {phoneNumber}</h4>
        <h5>Hi {first.name} age {first.age} city {first.city} year: {first.year}</h5>
        </>
        
        
    ) 
}


export default Task1
