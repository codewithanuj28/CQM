import React from 'react'
import myimg1 from './img/4.webp';
import myimg2 from './img/5.png';
import myimg3 from './img/6.webp';
import myimg5 from './img/8.png';
import myimg6 from './img/9.jpg';
import myimg7 from './img/10.jpg';
import myimg9 from './img/12.jpg';
import myimg11 from './img/14.png';
import myimg12 from './img/15.avif';
import myimg13 from './img/16.avif';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FaFeatherPointed } from "react-icons/fa6";

const Homepage = () => {
  return (
    <>
   
    {/* Navbar Start  */}
    <div className="row bg-info py-2">
      <div className="col-sm-12">
      <nav className="navbar bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="/Login"> Login</a>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
      </div>
    </div>
    {/* Navbar Start  */}

 {/* Row 1 start  */}
    <div className="row py-2">
    <h2 className='text-center py-2'>Revolutionize Customer Support with Our Advanced Query Management System</h2>
    <div className="col-md-12 py-2 r1">
        <h5 className='text-light py-3'>
        <marquee behavior="" direction="left">
          Welcome to the future of customer support with our cutting-edge Customer Query Management System (CQMS).
             Designed to transform the way you handle customer interactions, our system delivers efficiency,
             clarity, and exceptional service.
          </marquee>  </h5>
    </div>
   </div>
 {/* Row 1 end  */}  

    {/* About Start  */}
    <div className="row py-5">
        <div className="col-md-1"></div>
        <div className="col-md-6">
        <h4>About the Customer Query Management Project</h4>
            <p>The Customer Query Management Project is a focused initiative aimed at revolutionizing how
                organizations handle and respond to customer inquiries. By implementing robust systems and processes,
                 this project ensures that every customer query is addressed efficiently, effectively, and with a high
                  level of satisfaction.</p>
            <h5>Key Objectives:</h5>
            <br/>
            <p><b> <AiOutlineDoubleRight /> Streamline Query Handling: </b>  Develop and deploy streamlined processes for capturing, tracking, and resolving customer queries.</p>
            <p><b> <AiOutlineDoubleRight />Improve Response Time:</b> Reduce the time it takes to address and resolve customer issues, enhancing overall customer experience.</p>
            <p><b> <AiOutlineDoubleRight />Boost Customer Satisfaction:</b> Achieve higher levels of customer satisfaction by delivering timely and effective solutions to their concerns.</p>
        </div>
        <div className="col-md-3 pt-5">
            <img src={myimg1} className="rounded-5 shadow-lg" style={{ width: '100%', height:'250px' }} alt="" />
        </div>
        <div className="col-md-2"></div >
    </div>
    {/* About End  */}

    {/* Cards start  */}
    <div className="row py-3">
      <div className="col-md-12">
      <div class="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={myimg3} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg5} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg6} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg7} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    {/* Cards end */}



    {/* Row 2 Start  */}
    <div className="row py-3">
        <div className="col-md-1"></div>
        <div className="col-md-7">
        <h4 className='py-3'>Customer Query Management System Process Flow Diagram : </h4>
        <img src={myimg2} className="rounded-5 shadow-lg" style={{height:'350px', width: '100%' }} alt="" />
        </div>
        <div className="col-md-3 py-5">
            <p className='py-5'>Customer Query Management System Process Flow Diagram illustrates the steps involved in
                handling and resolving customer queries. Here's a detailed outline for such a diagram,
                capturing the typical process flow. The Customer Query Management Project is a focused initiative aimed at revolutionizing how
                organizations handle and respond to customer inquiries. Facilitate secure, streamlined communication between customers and support agents, with instant notifications and updates.</p>
        </div>
        <div className="col-md-1"></div>
    </div>
    {/* Row 2 End */}

    {/* Row 3 Start  */}
    <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10">
            <h1></h1>
            <p> <FaFeatherPointed /> Elevate your customer support operations and drive satisfaction with our advanced CQMS. Transform your approach to query management and discover the benefits of a system designed to meet the demands of today’s fast-paced business environment.</p>
            <p> <FaFeatherPointed /> Effortless Query Handling: Simplify the process with automated ticket creation and real-time tracking, ensuring every query is managed efficiently from start to finish.</p>
            <p><FaFeatherPointed /> Enhanced Customer Experience: Empower your customers with a user-friendly interface for submitting and tracking their queries, boosting satisfaction and engagement.</p>
            <p><FaFeatherPointed /> Smart Assignment & Prioritization: Automatically categorize and prioritize queries, ensuring urgent issues get the immediate attention they deserve.</p>
            <p><FaFeatherPointed /> Seamless Communication: Facilitate secure, streamlined communication between customers and support agents, with instant notifications and updates.</p>
            <p><FaFeatherPointed /> Powerful Insights: Leverage comprehensive reporting and analytics to gain valuable insights into performance, identify trends, and make data-driven decisions.</p>
            <p><FaFeatherPointed /> Integrated & Secure: Easily integrate with your existing CRM systems and benefit from robust security measures to protect sensitive information.</p>
        </div>
        <div className="col-md-1"></div>
    </div>
    {/* Row 3 End  */}

    {/* Cards start  */}
    <div className="row py-5">
      <div className="col-md-12">
      <div class="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={myimg9} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg11} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg12} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={myimg13} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    {/* Cards end */}

   {/* Footer Start  */}
   <div className="row bg-dark py-2">
    <div className="col-md-1"></div>
    <div className="col-md-3">
    <ul type="none"  className="text-light nav-link">
                            <h5 className="text-light">About  </h5>
                            <li><a href="" className="nav-link"><i className="fas fa-arrow-right"></i> Contact Us</a></li>
                            <li><a href="" className="nav-link"><i className="fas fa-arrow-right"></i> About Us</a></li>
                            <li><a href="" className="nav-link"><i className="fas fa-arrow-right"></i> Process status</a></li>
                            <li><a href="" className="nav-link"><i className="fas fa-arrow-right"></i> Feedback</a></li>
                        </ul>
    </div>
    <div className="col-md-3">
    <h5 className="text-light text-center">contact us </h5>
              <ul type="none" className='text-center'>
                <li className="text-light"> <i className="fa-solid fa-phone"></i> +91 9999999999 <br/></li>
                  <li className="text-light"><i className="fa-regular fa-envelope-open"></i> xyz@gmail.com</li>
                  <li className="text-light"><i className="fab fa-twitter"></i> twitter</li>
                  <li className="text-light"><i className="fab fa-facebook-f"></i> facebook</li>
                  <li className="text-light"><i className="fab fa-linkedin"></i> linkedin </li>
                  <li className="text-light"><i className="fab fa-github"></i> github</li>
              </ul>
    </div>
    <div className="col-md-5">
    <h3 className="text-light text-center">Send Us a Message</h3>
    <form className="text-light text-center">
    <input type="text" placeholder="name" className="w-25 bg-light"/>
    <input type="email" name="" id="" placeholder="email" className="w-25 bg-light"/><br/><br/>
    <textarea name="address" placeholder="message" className="w-50" id=""> </textarea>
    <br/><br/>
    <input type="button" className="bg-light" value="SEND MESSAGE"/>
    <br/>      
    </form>
    </div>
   </div>
   {/* footer End */}

    </>
  )
}

export default Homepage