import React, { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';

const Viewcompquery = () => {
        const [qu, setQu]=useState([]);
        const {id} = useParams();
        const viewcq =async()=>{
            const response=await fetch(`http://localhost:8000/com/${id}`);
            const data =await response.json();
            console.log(id);
            if(response.ok){
                setQu(data);
                console.log(data);
                console.log(qu);
               
               
            }
            if(!response.ok){
                alert("customer not found")
                Navigate('/Customer')
            }
        }
        useEffect(()=>{
            viewcq()
        },[])
        qu.map((p)=>{
            console.log(p.Department)})
       
    return (
        <>
            <div className="row">
                <div className="col-sm-12">
                    <div className="row dash_nav">
                        <div className="col-sm-12">
                       
                        </div>
                    </div>
                    <div className="row dash_main">
                        <div className="col-2 h-100">
                            <Link  to={`/Addquery/${id}`} className='a' ><i class="fa-regular fa-square-plus"></i> Add Query</Link><br /><br />
                            <Link  to={`/Viewpquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Pending Query</Link><br /><br />
                            <Link  to={`/Viewproquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Processing Query</Link><br /><br />
                            <Link  to={`/Viewcompquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Completed Query</Link><br /><br />
                        </div>
                        <div className="col-10 bg-primary h-100 b">
                        <Link to={`/Customer/${id}`} className='a'><div className='back fs-1'><i class="fa-solid fa-circle-left"></i></div></Link>
                            <h1 className='text-center'>Completed Query </h1>
                       
                            <div className="row gap-0 z">
                                <div className="col-3 border border-2px-dark radius-5px text-center p-3 " style={{backgroundColor:'pink'}}><span className=''>Department</span><hr />
                                <span>{qu.map((p)=>(
                                        <p>{p.department}</p>
                                       
                                    ))}</span>
                                </div>
                                <div className="col-3 border border-2px-dark radius-5px text-center p-3" style={{backgroundColor:'pink'}}> <span>Subject</span> <hr /><span>
                                {qu.map((p)=>(
                                        <p>{p.subject}</p>
                                       
                                    ))}</span></div>
                                <div className="col-3 border border-2px-dark radius-5px text-center p-3" style={{backgroundColor:'pink'}}><span>Query</span><hr /><span>
                                {qu.map((p)=>(
                                        <p>{p.query}</p>
                                       
                                    ))}</span></div>
                                <div className="col-3 border border-2px-dark radius-5px text-center p-3" style={{backgroundColor:'pink'}}><span>Status</span><hr /><span>
                                ({qu.map((p)=>(
                                        <span>{p.status}</span>
                                       
                                    ))}) Completed</span></div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Viewcompquery