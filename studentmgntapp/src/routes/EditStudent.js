import axios from 'axios';
import React, { useState } from 'react';
import { useLocation } from 'react-router';
import HeaderBar from './HeaderBar';

const EditStudent = ({obj}) => {

    let {search} = useLocation();
    let params = new URLSearchParams(search);
    // console.log(search);

    const [mStudent,setMStudent] = useState({
        id : params.get('id'),
        name :params.get('name'),
        address :params.get('address'),
        subject :params.get('subject'),
    });

  const onChangeHandler = (event) =>{
      setMStudent({...mStudent,[event.target.name]:event.target.value});
  }

  const submitHandler = (e) =>{
      e.preventDefault();
      axios.put(`http://localhost:8082/student/updateStudentDetailsById/${params.get('id')}`,mStudent)
      .then(
        (response)=>{
            console.log(response.data);
            setTimeout(function(){
                alert('update Successful');
                window.location.assign("/");
            },1000);
        }
      ).catch(
        (error)=>{
            console.log(error.response);
        }
      )
  }

  return (
    <div>
      <HeaderBar/>
        <div id="containerpad">
            <div className='row ' id="addcard">
            <div className='card col-4 col-md-6 col-lg-4 offset-md-3 offset-lg-4 p-4 offset-4'>
            <div className='text-primary p-3 mt-3 mb-2 text-center card'>
            <h1>Edit Student</h1>
            </div>
                    <form onSubmit={submitHandler}>
                        <div className='form-group'>
                        <label htmlFor="name"> Name :</label>
                        <input type="text" 
                            className=" form-control" 
                            id="name" 
                            name="name"
                            value={mStudent.name}
                            autoComplete="off"
                            placeholder="Enter the name"
                            // required= {true}
                            onChange={onChangeHandler}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="address"> Address :</label>
                        <input type="text" 
                            className=" form-control" 
                            id="address" 
                            name="address"
                            value={mStudent.address}
                            autoComplete="off"
                            placeholder="Enter address"
                            // required= {true}
                            onChange={onChangeHandler}/>
                        </div>
                        <div className='form-group'>
                        <label htmlFor="subject"> Subject :</label>
                        <input type="text" 
                            className=" form-control" 
                            id="subject"
                            name="subject"
                            value={mStudent.subject}
                            autoComplete="off"
                            placeholder="Enter your favourite subject"
                            // required= {true}
                            onChange={onChangeHandler}/>
                        </div>
                        <div>
                            <button className='btn btn-primary col-12 font-weight-bold mb-3' id="addsubmit" type="submit" value="Submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EditStudent
