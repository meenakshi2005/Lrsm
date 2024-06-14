import { useContext, useEffect, useState } from "react";
import { student_api } from "../api/api";
import { AuthContext } from "./AuthContext";


function Home() {
  
  const [data,setData]=useState([]);
  useEffect(() => {
    fetchStudentData();
  }, []);

  async function fetchStudentData() {
    
   
    try {
      const res = await student_api();
      console.log(res);
      setData(res[0]);

    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  }

 
  return (
    <div
    className="fixed-width clearfix bg-buttonface flex flex-col lg:flex-row md:flex-row  justify-center items-center m-8"
  >
      <div className="col-6 p-4 w-full m-4 md:w-1/2 ">
      <h5 className="font-bold py-2"> Course Summary</h5>
        {/* <div className="flex justify-between p-2">
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="green"
              class="size-6 pr-1"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                clip-rule="evenodd"
              />
            </svg>
            <snap>Chapters</snap>
          </div>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="orange"
              class="size-6 pr-1"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Revision Tests</span>
          </div>
          <div className="flex flex-row items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="orange"
              className="size-6 pr-1"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clip-rule="evenodd"
              />
            </svg>
            <span>Final Test</span>
          </div>
        </div> */}
        <table
          style={{
            width: "100%",
            border: "0",
            cellSpacing: "0",
            cellPadding: "4",
          }}
        >
          <tbody>
            <tr>
              <td style={{ alignItems: "right", class: "lbbrde" }}>
                <span class="gry">Course Status</span>
              </td>
              <td style={{ class: "lbbrde" }}>
                <strong>On Progress</strong>
              </td>
            </tr>
            <tr>
              <td style={{ alignItems: "right", class: "lbbrde" }}>
                <span class="gry">LoginID</span>
              </td>
              <td style={{ class: "lbbrde" }}>{data?.URNNO}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Name</span>
              </td>
              <td class="lbbrder">{data?.NAME}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Sponsor</span>
              </td>
              <td class="lbbrder">{data?.SPONSOR}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Course</span>
              </td>
              <td class="lbbrder">{data?.COURSENAME}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Start Date</span>
              </td>
              <td class="lbbrder">{data?.ENTRYDATE}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Expiry Date</span>
              </td>
              <td class="lbbrder">
                <strong>{data?.EXPIRYDATE}</strong>
              </td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Used Time Time</span>
              </td>
              <td class="lbbrder">{data?.USEDTIME}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Remaning Time</span>
              </td>
              <td class="lbbrder">{data?.REMANING_TIME}</td>
            </tr>
            <tr>
              <td align="right" class="lbbrder">
                <span class="gry">Total Time</span>
              </td>
              <td class="lbbrder">
                <strong>{data?.TOTALTIME}</strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* width="100%" border="0" cellSpacing="0" cellPadding="4" style={{ backgroundColor: "#F0F0F0" }} */}
      <div
        className="col-6 p-4 w-full md:w-1/2 border-0 bg-gray-200"
      >
        <p style={{ fontSize: "18px", color: "#595959" }}>
          Welcome <strong>{data?.NAME}</strong>  to New-IC38 - Life -25 Hrs course {data?.COURSENAME} by {data?.SPONSOR}.
        </p>
        <br />
        <p style={{ fontSize: "18px", color: "#595959" }}>
          You must study before{" "}
          <strong>{data.EXPIRYDATE}</strong> to complete your training.
        </p>
        <br />
        <p style={{ fontSize: "18px", color: "#595959" }}>
          Please read the Help » <a href="#">Instructions</a> carefully before
          starting your course.
        </p>
        <br />
        <p style={{ fontSize: "18px", color: "#595959" }}>
          Should you have any problem or need advice, post your query in the{" "}
          <a href="#">Discussion Board's</a> appropriate category.
        </p>
        <br />
        <p style={{ fontSize: "18px", color: "#595959" }}>
          You can also contact us by email at{" "}
          <a href="/">
           __________________
          </a>{" "}
          or by phone at _______________
        </p>
      </div>
    </div>
  );
}

export default Home;
