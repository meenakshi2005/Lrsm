import React from "react";
import "../css/report.css";

function Finaltest() {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{
          backgroundColor: "ButtonFace",
          width: "90%",
          margin: "0 auto",
          //   padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "600",
            padding: "10px",
          }}
        >
        Final Practice Test Report
        </h1>

        <table>
        <tr>
                <th className="tabheChp">Appeared On</th>
                <th className="tabheChp">Total</th>
                <th className="tabheChp">Attempts</th>
                <th className="tabheChp">Correct</th>
                <th className="tabheChp">Percentage</th>
                <th className="tabheChp">&nbsp;</th>
                <th className="tabheChp">Time</th>
              </tr>
        </table>
        <div style={{ textAlign: "center", padding: "10px" }}>Zero records</div>

<p style={{ textAlign: "right", marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
</p>
      </div>
    </div>
    

  );
}

export default Finaltest;
