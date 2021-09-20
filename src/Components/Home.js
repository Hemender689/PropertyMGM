import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import base from "../Api/base";

const Home = () => {
  const [List, setList] = useState([]);
  let Length = List.length; 
  const DeleteFun = (id) => {
    base("Property").destroy(id, function (err, deletedRecord) {
      if (err) {
        console.error(err);
        return;
      }
      alert("Deleted record", deletedRecord.id);
    });
  };

  useEffect(() => {
    base("Property")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setList(records);
        fetchNextPage();
      });
   
  }, []);

  return (
    <div>
   { Length  ? (
        <table border="1px" className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>Description</th>
              <th>Size</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {List.map((e, i) => (
              <tr key={Math.random()}>
                <td>{i + 1}</td>
                <td>{e.fields.Name}</td>
                <td>{e.fields.Description}</td>
                <td>{e.fields.Number}</td>
                <td>
                  <div className="btn">
                    <button
                      onClick={() => {
                        DeleteFun(e.getId());
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        " DATABASE IS EMPTY . ENTER RECORDS WITH THE HELP OF THE BUTTON GIVEN BELOW "
      )}
      <div className="btn">
        <Link to="/PropertyForm">
          <button>Add Property</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
