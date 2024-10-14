import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    
    const logcus= async (e)=>{
        e.preventDefault();
        const user={username,password};
        const response = await fetch('http://localhost:8000/cust',{
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
        if(data.message=="Login Success"){
            console.log(data);
            alert("Form Login success");
            setUsername("");
            setPassword("");
            navigate(`/Customer/${data.res._id}`);
        }
        else{
            alert(data.message);
            setUsername("");
            setPassword("");
        }
    }

    return (
        <>
           <div className="row custcss ">
                    <Link to={'/'}> <i className='fa fa-circle-arrow-left text-light fs-1'></i></Link>
                <div className="col-md-4 mx-auto" >
                    <div className="row p-5 shadow-lg rounded-5 pt-2 custcss2">
                    <div className="col-md-6 "><a href="/Login" className='btn btn-primary'>Customer's Login</a></div>
                    <div className="col-md-6 "><a href="/Loginadmin" className='form-control btn'>Admin's Login</a></div>
                    <form onSubmit={logcus} className=''>
                        <div className="row mb-5">
                        </div>
                            Username : <br />
                            <input className='form-control' type="username" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} /><br /><br />
                            Password : <br />
                            <input className='form-control' type="text" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                            <button className='form-control btn btn-primary' type="submit">Submit</button>
                        </form>
                        <div className="row mx-auto">
                            <div className="col-md-12 d-flex justify-content-end text-center mt-5">
                                <a href="/Registration">Create new account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
