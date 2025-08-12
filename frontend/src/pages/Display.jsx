import { useState, useEffect } from "react"
import BackendUrl from "../utils/BackendUrl"
import axios from "axios"
import Table from 'react-bootstrap/Table';


const Display=()=>{

    const [mydata, setMydata] = useState([]);
    const loadData =async()=>{
    let api = `${BackendUrl}students/display`
    const response = await axios.get(api)
    console.log(response.data)
    setMydata(response.data)
    }

    useEffect(()=>{
        loadData();
    },[])

     const ans=mydata.map((key)=>{
        return(
        <>
        <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
        </tr>
    </>
    )

     }) 
     return(
        <>
        <h1>Display</h1>
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Rollno</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
        </tr>
      </thead>
      <tbody>
        {ans}
      </tbody>
      </Table>
        </>
     )  


    
}

export default Display