import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';
import Table from 'react-bootstrap/Table';

const GetAllStudents = () => {

  const [data,setData] = useState([]);
  const [tempdata,setTempdata] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
       async function getResults(){
    if(data.length === 0 || (data.length !== tempdata.length)){
        await axios.get('http://localhost:8082/student/getAllStudents')
        .then((response)=>{
                // console.log(response.data);
                setTempdata(response.data);
                // console.log(tempdata)
                setData(tempdata);
            })
            .catch((error)=>{
                console.log(error.response);
            })
        }else{
            return(
                null
            )     
        }
        }
        getResults();
        // eslint-disable-next-line
  },[tempdata]);

  const deleteStudent = (Id) =>{
     console.log(Id);
        axios.delete(`http://localhost:8082/student/deleteStudentById/${Id}`)
        .then((response) => {
            console.log(`Student deleted successfully.`)
            console.log(response.data);
        }).catch((error)=>{
            return(
                "student data not found"
            )
        })
     
  }

  const editStudent = (student) =>{
    navigate(`/editstudent?id=${student.id}&&name=${student.name}&&address=${student.address}&&subject=${student.subject}`);
  }

  return (
    <div>
    <HeaderBar/>
    <div id="containerpad">
    <div className='card card-header text-center text-primary p-3 mt-4'>
            <h1>STUDENT DETAILS</h1>
        </div>
        <div className='container'>
        <Link to="/addstudent"><button className='btn btn-primary mt-5 mb-3 px-5 py-3 font-weight-bold'>Add student</button></Link>

        <Table striped bordered hover id="tablealign">
            <thead >
                <tr id="textsizeheader">
                    <th className='pt-3 pb-3'>#</th>
                    <th className='pt-3 pb-3'>Student name</th>
                    <th className='pt-3 pb-3'>Student address</th>
                    <th className='pt-3 pb-3'>Subject</th>
                    <th className='pt-3 pb-3'>Action</th>
                </tr>
            </thead>

                <tbody>
                {
                    data.map((student,index)=>
                    <tr key={index} id="textsize">
                        <td >{++index}</td>
                        <td className="text-capitalize">{student.name}</td>
                        <td className="text-capitalize">{student.address}</td>
                        <td className="text-capitalize">{student.subject}</td>
                        <td>
                            <button id="button" className='btn btn-primary ' onClick={()=>deleteStudent(student.id)}>Remove</button>&nbsp;&nbsp;&nbsp;
                            <button id="button" className='btn btn-primary ' onClick={()=>editStudent(student)}>Update</button>&nbsp;&nbsp;&nbsp;
                        </td>
                    </tr>
                    )
                }
                </tbody>
            </Table>
        </div>
    </div>

    </div>
  )
}

export default GetAllStudents;
