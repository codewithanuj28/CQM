import { useEffect, useState } from "react";

const Admindashboard = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});
  

  const getqueries = async () => {
    const response = await fetch("http://localhost:8000/xxxx");
    const ress = await response.json();
    setQuery(ress);
    console.log(ress);
  };
  useEffect(() => {
    getqueries();
  }, []);
  console.log(data);
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="row dash_nav">
            <div className="col-sm-12"></div>
          </div>
          <div className="row dash_main">
            <div className="col-2  h-100 bg-info">
              {data?.map((element) => (
                <ul className="pt-3">
                  <li>Admin UserName : {element.username} </li>
                  <li>Admin Name : {element.firstname + element.lastname}</li>
                  <li>Admin Email : {element.email}</li>
                  <li className="btn btn-outline-primary">
                    <a
                      href="/Viewall"
                      className="text-decoration-none text-light"
                    >
                      ViewAll
                    </a>
                  </li>
                </ul>
              ))}
            </div>
            <div className="col-10 bg-dark h-100">
              <div className="row p-5">
                <div className="card text-white bg-primary mb-3">
                  <div className="card-header text-center">Total Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {query.totalquery}
                    </h5>
                  </div>
                </div>
                <div className="card text-white bg-secondary mb-3">
                  <div className="card-header text-center">Completed Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {query.totalcomquery}
                    </h5>
                  </div>
                </div>

                <div className="card text-white bg-success mb-3">
                  <div className="card-header text-center">Pending Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {query.totalpenquery}
                    </h5>
                  </div>
                </div>

                <div className="card text-white bg-danger mb-3">
                  <div className="card-header text-center">Feedback</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Danger card title
                    </h5>
                  </div>
                </div>

                <div className="card text-white bg-warning mb-3">
                  <div className="card-header text-center">Header</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      Warning card title
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admindashboard;