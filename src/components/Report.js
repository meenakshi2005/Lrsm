import { useState } from "react";
import "../css/report.css";
import { Link } from "react-router-dom";
import Nakli from "./Nakliapi"
function Report() {
  const [naklidata,setNaklidata]=useState(Nakli)
  const dataToPass = { name: 'John Doe', age: 30 };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{
          backgroundColor: "ButtonFace",
          width: "90%",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "600",
            padding: "10px",
          }}
        >
          Chapters/Report
        </h1>

        <table>
          <tr>
            <th>Sr.No</th>
            <th>Chapter Title</th>
            <th>Minimum</th>
            <th>Completed</th>
            <th>Counted</th>
            <th>%</th>
          </tr>
          {
            naklidata.map(e=>(
              <tr>
              <td>{e.id}</td>
              <td><Link
              to="/heltin" state={{e}}
              // to="../heltin"
              
              >{e.title}</Link></td>
              <td>{e.Minimum}</td>
              <td>{e.Completed}</td>
              <td>{e.Counted}</td>
              <td>{e.percentage}</td>
            </tr>
            ))
          }
         
         
        </table>
      </div>

      <h1
        style={{
          fontSize: "22px",
          fontWeight: "700",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        Overall Course Status
      </h1>
          <p style={{ textAlign: "right", marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
            <a href="#top" className="lnkth11">Back to Top^</a>
          </p>
    </div>

  );
}

export default Report;