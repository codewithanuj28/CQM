/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [que, setQue] = useState([]);
  const [type, setType] = useState("");
  const [isfetching, setIsfetching] = useState(false);

  const showPendingQuery = async () => {
    const status = "pen";
    console.log(status);
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data);
    setQue(data);
    setType("p");
    setIsfetching(true);
  };

  const showProcessingQuery = async () => {
    const status = "pro";
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data);
    setQue(data);
    setType("pro");
    setIsfetching(true);
  };

  const showCompletedQuery = async () => {
    const status = "com";
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data);
    setQue(data);
    setType("c");
    setIsfetching(true);
  };

  return (
    <>
      <div className="row ">
        <div className="col-sm-12 adminback">
          <div className="row dash_nav">
            <div className="col-sm-12">
              <h1 className="text-center my-auto">
                Welcome to Admin Dashboard
              </h1>
            </div>
          </div>
          <div className="row dash_main ">
            <div className="col-2 sidenav pt-4 h-100">
              <button
                className="btn btn-primary w-100 my-3"
                onClick={showPendingQuery}
              >
                Pending Queries
              </button>
              <button
                className="btn btn-primary w-100 my-3"
                onClick={showProcessingQuery}
              >
                Processing Queries
              </button>
              <button
                className="btn btn-primary w-100 my-3"
                onClick={showCompletedQuery}
              >
                Completed Queries
              </button>
            </div>
            <div className="col-10  h-100">
              {isfetching &&
                (type == "pen" ? (
                  <h1 className="text-center mt-5">Pending Queries</h1>
                ) : type == "pro" ? (
                  <h1 className="text-center mt-5">Processing Queries</h1>
                ) : (
                  <h1 className="text-center mt-5">Completed Queries</h1>
                ))}
              {isfetching && (
                <table className="w-100 mt-5 rounded-5">
                  <thead>
                    <tr className="py-4">
                      <td className="tblhead py-4">Department</td>
                      <td className="tblhead">Subject</td>
                      <td className="tblhead">Username</td>
                      <td className="tblhead">Status</td>
                      <td className="tblhead">Solution</td>
                    </tr>
                  </thead>
                  <tbody>
                    {que.map((element) => (
                      <tr className="my-4">
                        <td className="tbldata">{element.department}</td>
                        <td className="tbldata">{element.subject}</td>
                        <td className="tbldata">{element.query}</td>
                        <td className="tbldata">{element.status}</td>
                        <td className="tbldata">
                          <button
                            className="btn btn-primary px-5"
                            onClick={() => {
                              navigate(`/resolvequery/${element._id}`);
                            }}
                          >
                            Resolve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
