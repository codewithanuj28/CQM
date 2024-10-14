import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Loginadmin = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();
    
    const logad= async (e)=>{
        e.preventDefault();
        const user={username,password};
        const response = await fetch('http://localhost:8000/admin',{
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
        if(data.message="Login Success"){
            alert("Form Login success");
            setUsername("");
            setPassword("");
            navigate('/Admin');
        }
    }

    return (
        <>
            <div className="row admcss" >
                    <Link to={'/'}> <i className='fa fa-circle-arrow-left text-primary fs-1'></i></Link>
                <div className="col-md-4 mx-auto" >
                    <div className="row p-5 shadow-lg rounded-5 pt-2 admcss2">
                    <div className="col-md-6 ab"><a href="/Login" className='form-control btn'>Customer's Login</a></div>
                    <div className="col-md-6 ab"><a href="/Loginadmin" className='form-control btn btn-primary'>Admin's Login</a>
                            </div>
                    <form onSubmit={logad} className=''>
                        <div className="row mb-5">
                        </div>
                            Username : <br />
                            <input className='form-control' type="text" name='username' value={username} onChange={(e)=>setUsername(e.target.value)} /><br /><br />
                            Password : <br />
                            <input className='form-control' type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                            <button className='form-control btn btn-primary' type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Loginadmin
