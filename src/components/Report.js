import { useEffect, useState } from "react";
import "../css/report.css";
import { Link } from "react-router-dom";

import { course_api } from "../api/api";

function Report() {

  const [reports,setReports]=useState([])


  useEffect(()=>{
    reportapifun();
  },[]);

  const reportapifun=async()=>{

    const res =await course_api();
    console.log(res,"check data");
    setReports(res)

  }
  
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
          
            <th>Chapter Title</th>
            <th>Minimum</th>
            <th>Completed</th>
         
            <th>%</th>
          </tr>
          {
            reports.map((e,i)=>(
              <tr>
             
              <td><Link
              to="/heltin" state={{e}}
              // to="../heltin"
              
              >{e.ORGSTRUCTURENAME}</Link></td>
              <td>{e.mintime}</td>
              <td>{e?.usagetime?e?.usagetime:"00:00:00"}</td>
             
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