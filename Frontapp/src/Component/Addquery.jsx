import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Addquery = () => {

    const {id}=useParams();
    const [department, setDepartment] = useState("");
    const [subject, setSubject] = useState("")
    const [query, setQuery] = useState("");
    console.log(department, subject, query);
    
    const navigate = useNavigate();
    const regcode = async (e) => {
        e.preventDefault();
        const user = { department, subject, query,id};
        const response = await fetch(`http://localhost:8000/addquery`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            },
        })
        const data = await response.json();
        if (!response.ok) {
            // console.log(data.error);
        }
        if (response.ok) {
            alert("Form Successfully Submitted");
            setDepartment("");
            setSubject("");
            setQuery("");
            navigate(`/Addquery/${id}`);
        }
    }




  return (
    <>
        
            <div className="row">
                <div className="col-sm-12">
                    <div className='row dash_nav'>
                        <div className='col-sm-12'>

                        </div>
                    </div>
                    <div className='row dash_main'>
                        <div className='col-2 bg-danger h-100'>
                        <div>Sidenav</div>
                         <Link to={`/Customer/${id}`}>View Profile</Link>
                         <br/>
                         <br/>
                         <Link to={`/Addquery/${id}`}>Add Query</Link>
                         <br/>
                         <br/>
                         <Link  to={`/Viewpquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Pending Query</Link><br /><br />
                            <Link  to={`/Viewproquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Processing Query</Link><br /><br />
                            <Link  to={`/Viewcompquery/${id}`} className='a' ><i class="fa-regular fa-eye"></i> View Completed Query</Link><br /><br />
                        </div>
                        <div className="col-10 bg-primary h-100">
                            <form onSubmit={regcode} className='p-5 shadow-lg rounded-5'>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <a href="/"><div className='back fs-1'><i class="fa-solid fa-circle-left"></i></div></a>
                                    <br />
                                    <br />
                                    department :
                                    <input className='form-control' value={department} onChange={(e) => setDepartment(e.target.value)} type='text' name="deparment" />
                                    <input className='form-control' value={id}  type='hidden' name="deparment" />
                                    <br />
                                    <br />
                                    subject :
                                    <input className='form-control' type='text' name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                    <br />
                                    <br />
                                   
                                   
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write Your Query Here' value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
                                    </div>
                                    <button className='form-control btn btn-primary' type="submit">Submit</button>
                                </div>
                                </div>
                            </form>
                        </div>


                    </div>
                </div>
            </div>
        </>
  )
}

export default Addquery