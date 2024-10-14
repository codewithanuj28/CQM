import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
        const [firstname, setFirstname]=useState("");
        const [lastname, setLastname]=useState("")
        const [email,setEmail]=useState("");
        const [Password,setPassword]=useState("");
        const [username,setUsername]=useState("");
        console.log(firstname,lastname,username,email,Password);
        const navigate = useNavigate();
    
        const regcode = async(e)=>{
            e.preventDefault();
            const user={firstname,lastname,username,email,Password};
            const response = await fetch('http://localhost:8000/',{
            method: 'POST',
            body  : JSON.stringify(user),
            headers:{
                'Content-type':'application/json'
            },
        })
            const data = await response.json();
            if(!response.ok){
                console.log(data.error)
            }
            if(response.ok){
                alert("Form Successfully Submitted");
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                setUsername("");
                navigate('/Login');
            }
        }
        return (
        <>
          <div className='row regcss'>
        <div className='col-md-6 mx-auto my-4'>
            <form onSubmit={regcode} className='p-5 shadow-lg rounded-5  regcss2'>
          <Link to={'/'}> <i className='fa fa-circle-arrow-left text-primary fs-1'></i></Link>
                <div className="row">
                    <div className="col-md-6">
                    <h2 className='my-3 text-danger text-center'>Registration Form</h2>
                    </div>  
                </div>
                <br/>
                Enter First Name :
                <input className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)} type='text' name="fname" />
                <br/>
               
                Enter Last Name :
                <input className='form-control' type='text' name="lname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                <br/>
               
                Username :
                <input className='form-control' type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} />
                <br/>
               
                Enter Email :
                <input className='form-control' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br/>
               
                Enter Password:
                <input className='form-control' type="number" name="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}/>
            <br/>
            <br/>
                <button className='form-control btn btn-primary' type="submit">Submit</button>
                <br/>
                <p className='text-end py-3'>Already have an Account ? <a href="/">Login here</a></p>
            </form>
        </div>
    </div>
        </>
    )
}

export default Registration
