import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const [firstname,setFirstname]=useState({ customer:[]});
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const getemp = async ()=>{
        var response = await fetch(`http://localhost:8000/${id}`);
        var result = await response.json();    
   
        if(response.ok){
        console.log(result);
        setFirstname(result.firstname);
        setLastname(result.lastname);
        setEmail(result.email);
        setPassword(result.Password);
        setUsername(result.username);
        }
    }
    // console.log(firstname);
    const navigate = useNavigate();
    const editemp= async (e)=>{
        e.preventDefault();
        const updatedata = {firstname,lastname,email,password,username};
        const response = await fetch(`http://localhost:8000/${id}`,{
            method :'PATCH',
            headers :{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(updatedata),
        });
        const result = await response.json();
        if(response.ok){
            console.log(result);
            alert(" updated successfully");
            navigate(`/Customer/${id}`);
        }
    }

    useEffect(()=>{
        getemp();
    },[])
  return (
    <>
                     <div className="row">
                <div className="col-sm-12">
                    <div className="row dash_nav">
                        <div className="col-sm-12">
                       
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="row dash_main">
                        <div className="col-2 h-100">
                            <Link  to={`/Addquery/${id}`} className='a' ><i class="fa-regular fa-square-plus"></i> Add Query</Link><br /><br />
                            <Link  to={`/Viewpquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Pending Query</Link><br /><br />
                            <Link  to={`/Viewproquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Processing Query</Link><br /><br />
                            <Link  to={`/Viewcompquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Completed Query</Link><br /><br />
                        </div>
                        <div className='col-10 h-100'>
                        <div className='row'>
        <div className='col-sm-6 mx-auto my-5'>
            <h3 className='my-4 text-light'><u>Upd</u>ation Form</h3>
            <form onSubmit={editemp} className='p-5 shadow-lg rounded-5'>
                Enter First Name :
                <input className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)} type='text' name="fname" />
                <br/>
                <br/>
                Enter Last Name :
                <input className='form-control' type='text' name="lname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                <br/>
                <br/>
                Enter Email :
                <input className='form-control' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <br/>
                Enter password :
                <input className='form-control' type="number" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                Enter Username :
                <input className='form-control' type="string" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <br/>
                <button className='form-control btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    </div>
                    </div>
                    </div>

                    </>
                
  )
}

export default Edit