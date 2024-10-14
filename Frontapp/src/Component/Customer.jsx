import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    const {id}=useParams();
    const viewcust= async ()=>{
        console.log(id);
        const response = await fetch(`http://localhost:8000/${id}`);
         const result=await response.json();
        if(response.ok){
            setCustomer(result);
            console.log(customer)
        }
        if(!response.ok){
            alert("Customer not found");
            navigate('/Login')
        }
    }
    useEffect(()=>{
        viewcust(); 
    },[])
    return (
        <>
        
            <div className="row">
                <div className="col-sm-12">
                    <div className='row dash_nav'>
                        <div className='col-sm-12'></div>
                    </div>
                    <div className='row dash_main'>
                        <div className='col-2 bg-danger h-100'>
                        <div>Sidenav</div>
                         <Link to={`/Customer/${id}`}>View Profile</Link>
                         <br/>
                         <br/>
                         <Link to={`/Addquery/${id}`}>Add Query</Link>
                         <br/>
                         <Link  to={`/Viewpquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Pending Query</Link><br /><br />
                            <Link  to={`/Viewproquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Processing Query</Link><br /><br />
                            <Link  to={`/Viewcompquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Completed Query</Link><br /><br />
    
                        </div>
                        <div className='col-10 bg-primary h-100'>
                        {customer.firstname}
                        {customer.lastname}
                        <br/>
                        <br/>
                        {customer.username}
                        <br/>
                        <br/>
                        {customer.email}
                        <br></br>
                        <br></br>
                        <Link to={`/Edit/${id}`} className='btn btn-warning'>Edit Profile</Link>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer
