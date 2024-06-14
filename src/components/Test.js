import React, { useEffect, useState } from "react";
import "../css/report.css";
import { useLocation } from "react-router-dom";
import { testapi, updateanswers } from "../api/api";
function Test() {
  let { state } = useLocation();
  const [alltest, setAlltest] = useState([]);
  const [data, setData] = useState(state?.e);
 

  const [selectedOptions, setSelectedOptions] = useState({});

  const handleOptionSelect = async(questionIndex, option) => {
    console.log( questionIndex, option);
    const obj={
      questionIndex,
      option,
      examid:data?.ORGSTRUCTUREID
    };
    const datas =await updateanswers(obj);
    console.log("update answer",datas);
    setSelectedOptions((prev) => ({ ...prev, [questionIndex]: option }));
  };

  const isSelected = (questionIndex, option) => {
    return selectedOptions[questionIndex] === option;
  };

  useEffect(() => {
    testapifun();
  }, []);


  const testapifun = async () => {
    const res = await testapi(data?.ORGSTRUCTUREID);
    console.log(res, "check chapter data");
    setAlltest(res);
    // setChapters(res[pageitem]);
  };
  const handlesubmit = async () => {
    const res = await testapi(data?.ORGSTRUCTUREID);
    console.log(res, "check chapter data");
    setAlltest(res);
    // setChapters(res[pageitem]);
  };
  return (
    <div className="flex flex-1 px-6 flex-col items-center justify-center py-6">
      <div className="flex bg-gray-100 flex-1 w-full flex-col items-center justify-center" >
        {/* <div id="mb"> */}
        <p style={{ fontSize: "12px", padding: "10px" }}>
          <i>
            (Please note: Revision tests will be available for those chapters
            only where you have completed minimum study time.)
          </i>
        </p>


        <div className="flex flex-1 w-4/5 px-5 pt-4 bg-white rounded-md flex-col  justify-start">


          <div className="flex my-4 flex-row">
            <h4 className="font-bold uppercase border-b-2 w-full " style={{ color: "#680431", borderColor: "#680431" }} >{data?.ORGSTRUCTURENAME}</h4>
          </div>
          {alltest.length > 0 &&
        alltest.map((e, i) => (
          <div className="py-4" key={i}>
            <p className="text-lg font-semibold mb-4">{i + 1 + ". " + e.QUESTIONTEXT}</p>

            <div className="flex w-full mb-2">
              <input
                type="radio"
                id={e.ANSWERTEXT}
                name={e.ANSWERTEXT}
                value={e.ANSWERTEXT}
                className="hidden"
                onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT)}
                checked={isSelected(e.QID, e.ANSWERTEXT)}
              />
              <label
                htmlFor={e.ANSWERTEXT}
                className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
                style={
                  isSelected(e.QID, e.ANSWERTEXT)
                    ? { backgroundColor: 'gray', color: '#ffffff' }
                    : {}
                }
              >
                {e.ANSWERTEXT}
              </label>
            </div>

            <div className="flex w-full mb-2">
              <input
                type="radio"
                id={e.ANSWERTEXT1}
                name={e.ANSWERTEXT1}
                value={e.ANSWERTEXT1}
                className="hidden"
                onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT1)}
                checked={isSelected(e.QID, e.ANSWERTEXT1)}
              />
              <label
                htmlFor={e.ANSWERTEXT1}
                className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
                style={
                  isSelected(e.QID, e.ANSWERTEXT1)
                    ? { backgroundColor: 'gray', color: '#ffffff' }
                    : {}
                }
              >
                {e.ANSWERTEXT1}
              </label>
            </div>

            <div className="flex w-full mb-2">
              <input
                type="radio"
                id={e.ANSWERTEXT2}
                name={e.ANSWERTEXT2}
                value={e.ANSWERTEXT2}
                className="hidden"
                onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT2)}
                checked={isSelected(e.QID, e.ANSWERTEXT2)}
              />
              <label
                htmlFor={e.ANSWERTEXT2}
                className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
                style={
                  isSelected( e.QID, e.ANSWERTEXT2)
                    ? { backgroundColor: 'gray', color: '#ffffff' }
                    : {}
                }
              >
                {e.ANSWERTEXT2}
              </label>
            </div>

            <div className="flex w-full mb-2">
              <input
                type="radio"
                id={e.ANSWERTEXT3}
                name={e.ANSWERTEXT3}
                value={e.ANSWERTEXT3}
                className="hidden"
                onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT3)}
                checked={isSelected(e.QID, e.ANSWERTEXT3)}
              />
              <label
                htmlFor={e.ANSWERTEXT3}
                className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
                style={
                  isSelected(e.QID, e.ANSWERTEXT3)
                   ? { backgroundColor: 'gray', color: '#ffffff' }
                    : {}
                }
              >
                {e.ANSWERTEXT3}
              </label>
            </div>
          </div>
        ))}
        </div>
        <button onClick={handlesubmit} style={{backgroundColor: "#680431",color:"white"}} className="py-2 my-8 px-8 uppercase  rounded-full  font-semibold">
           Submit
          </button>
        <p
         
          style={{  marginTop: "10px", marginBottom: "0px", padding: "0px" }}
        >
          
          <a href="#top" className="  py-2 px-6 rounded-full  font-semibold">
            Back to Top
          </a>
        </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Test;
