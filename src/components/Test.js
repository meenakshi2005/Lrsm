import React from "react";
import "../css/report.css";

function Test() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-6">
      <div
        className="flex flex-1 flex-col items-center justify-center"
        style={{
          backgroundColor: "ButtonFace",
          width: "90%",
          margin: "0 auto",
        }}
      > 
        {/* <div id="mb"> */}
          <p style={{fontSize:"18px"}}>
            Click a Chapter Title for giving Revision Test.
            <br />
            <i>
              (Please note: Revision tests will be available for those chapters
              only where you have completed minimum study time.)
            </i>
          </p>
          <table
            width="100%"
            border="0"
            cellPadding="5"
            cellSpacing="0"
            bgcolor="#FFFFFF"
          >
            <thead>
              <tr>
                <th className="tabheChp" colSpan="2">Chapters</th>
                <th width="25" className="tabheChp">Complete</th>
              </tr>
            </thead>
            <tbody>
              {/* Add table rows here */}
            </tbody>
          </table>
          <p
            align="right"
            style={{ marginTop: "10px", marginBottom: "0px", padding: "0px" }}
          >
            <a href="#top" className="lnkth11">
              Back to Top^
            </a>
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Test;
