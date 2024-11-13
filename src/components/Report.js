// import { useEffect, useState } from "react";
// import "../css/report.css";
// import { Link } from "react-router-dom";

// import { course_api } from "../api/api";

// function Report() {

//   const [reports,setReports]=useState([])
//   const [heading,setHeading]=useState("")

//   useEffect(()=>{
//     reportapifun();
//   },[]);

//   const reportapifun=async()=>{

//     const res =await course_api();

//     console.log(res,"check data");
//     console.log(res[0],"heading")
//     console.log(res[0].ORGSTRUCTURENAME,"heading")
//     setHeading(res[0].ORGSTRUCTURENAME)

//     setReports(res)

//   }

//   return (
//     <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
//       <div
//         className="flex flex-1 flex-col items-center justify-center"
//         style={{
//           backgroundColor: "ButtonFace",
//           width: "90%",
//           margin: "0 auto",
//         }}
//       >
//         <h1
//           style={{
//             fontSize: "28px",
//             fontWeight: "600",
//             padding: "10px",
//           }}
//         >
//        {heading}
//         </h1>

//         <table style={{marginBottom:'30px'}}>
//           <tr>

//             <th>Chapter Title</th>
//             <th>Minimum</th>
//             <th>Completed</th>

//             <th>%</th>
//           </tr>
//           {
//             reports.map((e,i)=>(
//               <tr>

//               <td><Link
//               to="/heltin" state={{e}}
//               // to="../heltin"

//               >{e.ORGSTRUCTURENAME}</Link></td>
//               <td>{e.mintime}</td>
//               <td>{e?.usagetime?e?.usagetime:"00:00:00"}</td>

//               <td>{e.percentage}</td>
//             </tr>
//             ))
//           }

//         </table>
//       </div>

//       <h1
//         style={{
//           fontSize: "22px",
//           fontWeight: "700",
//           padding: "10px",
//           alignItems: "center",
//           justifyContent: "center",
//           display: "flex",
//         }}
//       >

//       </h1>
//           <p style={{ textAlign: "right", marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
//             <a href="#top" className="lnkth11">Back to Top^</a>
//           </p>
//     </div>

//   );
// }

// export default Report;


import { useEffect, useState } from "react";
import "../css/report.css";
import { Link } from "react-router-dom";
import { course_api } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHourglassEnd, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container" style={{ width: '30%', backgroundColor: '#e0e0e0', borderRadius: '5px', overflow: 'hidden', height: '1rem' }}>
      <div
        className="progress-bar"
        style={{
          width: `${percentage}%`,
          backgroundColor: '#007bff',
          height: '100%',
          textAlign: 'center',
          color: 'white',
          fontSize: '0.75rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {`${percentage.toFixed(2)}%`}
      </div>
    </div>
  );
};

function Report() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    reportapifun();
  }, []);

  const reportapifun = async () => {
    const res = await course_api();
    console.log(res, "check data");
    setReports(res);
  };

  function timeToSeconds(timeString) {
    if (timeString == null) {
      return 0;
    }
    // Split the time string into hours, minutes, and seconds
    let [hours, minutes, seconds] = timeString.split(":").map(Number);

    // Calculate total seconds
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;

    return totalSeconds;
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{
          backgroundColor: "white",
          width: "90%",
          margin: "0 auto",
        }}
      >
        {reports.length > 0 &&
          reports
            .map((e, i) => {
              const completionPercentage = (timeToSeconds(e?.usagetime) / timeToSeconds(e?.mintime)) * 100;
              return (
                <div
                  key={i}
                  className="font-bold bg-gray-300 px-6 py-2 my-2 rounded-full"
                  style={{ marginTop: '20px', width: '50%',textAlign:'center',fontSize:'20px' }}
                >
                  {e.ORGSTRUCTURENAME}
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <ProgressBar
                    percentage={completionPercentage}
                    style={{ marginTop: '10px', }}
                  />
                  </div>
                </div>
              );
            })
            .slice(0, 1)}
        <table style={{ marginBottom: "40px", marginTop: "20px" }}>
          <thead>
            <tr>
              <th style={{fontSize:'1rem'}}><FontAwesomeIcon icon={faBook} /> Chapter Title</th>
              <th style={{fontSize:'1rem'}}><FontAwesomeIcon icon={faClock} /> Minimum</th>
              <th style={{fontSize:'1rem'}}><FontAwesomeIcon icon={faHourglassEnd} /> Completed</th>
              <th style={{fontSize:'1rem'}}><FontAwesomeIcon icon={faListCheck} /> %</th>
            </tr>
          </thead>
          <tbody>
            {reports.length > 0 &&
              reports
                .map((e, i) => {
                  const completionPercentage = (timeToSeconds(e?.usagetime) / timeToSeconds(e?.mintime)) * 100;
                  return (
                    <tr key={i}>
                      <td style={{ display: 'flex', alignItems: 'center', justifyContent:'space-between'}}>
                        {e.GROUPTYPE === "CHAPTER" ? (
                          <Link
                            to="/heltin"
                            state={{ e }}
                            style={{ fontSize: '1rem', textDecoration: 'none', marginRight: '10px',color:'maroon' ,fontWeight:'600'}}
                          >
                            {e.ORGSTRUCTURENAME}
                          </Link>
                        ) : (
                          <Link
                            to="/test"
                            className="text-indigo-500 no-underline"
                            state={{ e }}
                            style={{ fontSize: '14px', textDecoration: 'none', marginRight: '10px',color:'#2d4059',fontWeight:'600' }}
                          >
                            {e.ORGSTRUCTURENAME}
                          </Link>
                        )}
                        <ProgressBar
                          percentage={completionPercentage}
                          style={{ width: '50%' }}
                        />
                      </td>
                      <td style={{fontSize:'14px'}}>{e?.usagetime ? e?.usagetime : "00:00:00"}</td>
                      <td style={{fontSize:'14px'}}>{e.mintime}</td>
                      <td style={{fontSize:'14px'}}>
                        {completionPercentage.toFixed(2)}%
                      </td>
                    </tr>
                  );
                })
                .slice(1)}
          </tbody>
        </table>
      </div>
      <p
        style={{
          textAlign: "right",
          marginTop: "10px",
          marginBottom: "0px",
          padding: "0px",
        }}
      >
        <a href="#top" className="lnkth11">
          Back to Top
        </a>
      </p>
    </div>
  );
}

export default Report;
