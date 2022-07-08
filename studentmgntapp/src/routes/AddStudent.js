import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeaderBar from './HeaderBar';

const MainPage = () => {

    const [student,setStudent] = useState({
        id:0,
        name:'',
        address:'',
        subject:'',
    })

  const onChangeHandler = (event) =>{
      setStudent({...student,[event.target.name]:event.target.value});
  }

  const submitHandler = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:8082/student/saveStudent',student)
      .then(
        (response)=>{
            console.log(response.data);
            setTimeout(function(){
                alert('Added Successful');
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
            <div className='text-primary p-3 mb-2 text-center card'>
            <h1>Add Student Details</h1>
            </div>
                <form onSubmit={submitHandler}>
                  <div className='form-group'>
                    <label htmlFor="name"> Name :</label>
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        name="name"
                        value={student.name}
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
                        value={student.address}
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
                        value={student.subject}
                        autoComplete="off"
                        placeholder="Enter your favourite subject"
                        // required= {true}
                        onChange={onChangeHandler}/>
                  </div>
                  <div>
                    <button className='btn btn-primary col-12 font-weight-bold' id="addsubmit" type="submit" value="Submit">Submit</button>
                  </div>
                  <div>
                    <Link to="/"><button className='btn btn-primary col-12 mt-4 font-weight-bold' 
                            id="addsubmit">All Student Details</button></Link> 
                  </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
