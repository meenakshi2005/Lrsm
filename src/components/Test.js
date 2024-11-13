// import React, { useEffect, useState } from "react";
// import "../css/report.css";
// import { useLocation } from "react-router-dom";
// import { testapi, updateanswers } from "../api/api";
// // import { testapi, updateanswers } from "../api/api";


// function Test() {
//   const location = useLocation();
  
//   const [alltest, setAlltest] = useState([]);
//   // const [data, setData] = useState(state?.e);

 
//   const data = location.state?.e;
//   const [selectedOptions, setSelectedOptions] = useState({});

//   const handleOptionSelect = async(questionIndex, option) => {
//     console.log( questionIndex, option);
//     const obj={
//       questionIndex,
//       option,
//       examid:data?.ORGSTRUCTUREID
//     };
//     const datas =await updateanswers(obj);
//     console.log("update answer",datas);
//     setSelectedOptions((prev) => ({ ...prev, [questionIndex]: option }));
//   };

//   const isSelected = (questionIndex, option) => {
//     return selectedOptions[questionIndex] === option;
//   };

  
//   useEffect(() => {
//     if (data?.e?.ORGSTRUCTUREID) {
//       testapifun();
//     } else {
//       console.log("ORGSTRUCTUREID is missing in state");
//     }
//   }, [data]);



//   const testapifun = async () => {
//     const res = await testapi(data?.ORGSTRUCTUREID);
//     console.log(res, "check chapter data");
//     setAlltest(res);
//     // setChapters(res[pageitem]);
//   };
//   const handlesubmit = async () => {
//     const res = await testapi(data?.ORGSTRUCTUREID);
//     console.log(res, "check chapter data");
//     setAlltest(res);
//     // setChapters(res[pageitem]);
//   };
//   return (
//     <div className="flex flex-1 px-6 flex-col items-center justify-center py-6">
//       <div className="flex bg-gray-100 flex-1 w-full flex-col items-center justify-center" >
//         {/* <div id="mb"> */}
//         <p style={{ fontSize: "12px", padding: "10px" }}>
//           <i>
//             (Please note: Revision tests will be available for those chapters
//             only where you have completed minimum study time.)
//           </i>
//         </p>


//         <div className="flex flex-1 w-4/5 px-5 pt-4 bg-white rounded-md flex-col  justify-start">


//           <div className="flex my-4 flex-row">
//             <h4 className="font-bold uppercase border-b-2 w-full " style={{ color: "#680431", borderColor: "#680431" }} >{data?.ORGSTRUCTURENAME}</h4>
//           </div>
//           {alltest.length > 0 &&
//         alltest.map((e, i) => (
//           <div className="py-4" key={i}>
//             <p className="text-lg font-semibold mb-4">{i + 1 + ". " + e.QUESTIONTEXT}</p>

//             <div className="flex w-full mb-2">
//               <input
//                 type="radio"
//                 id={e.ANSWERTEXT}
//                 name={e.ANSWERTEXT}
//                 value={e.ANSWERTEXT}
//                 className="hidden"
//                 onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT)}
//                 checked={isSelected(e.QID, e.ANSWERTEXT)}
//               />
//               <label
//                 htmlFor={e.ANSWERTEXT}
//                 className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                 style={
//                   isSelected(e.QID, e.ANSWERTEXT)
//                     ? { backgroundColor: 'gray', color: '#ffffff' }
//                     : {}
//                 }
//               >
//                 {e.ANSWERTEXT}
//               </label>
//             </div>

//             <div className="flex w-full mb-2">
//               <input
//                 type="radio"
//                 id={e.ANSWERTEXT1}
//                 name={e.ANSWERTEXT1}
//                 value={e.ANSWERTEXT1}
//                 className="hidden"
//                 onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT1)}
//                 checked={isSelected(e.QID, e.ANSWERTEXT1)}
//               />
//               <label
//                 htmlFor={e.ANSWERTEXT1}
//                 className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                 style={
//                   isSelected(e.QID, e.ANSWERTEXT1)
//                     ? { backgroundColor: 'gray', color: '#ffffff' }
//                     : {}
//                 }
//               >
//                 {e.ANSWERTEXT1}
//               </label>
//             </div>

//             <div className="flex w-full mb-2">
//               <input
//                 type="radio"
//                 id={e.ANSWERTEXT2}
//                 name={e.ANSWERTEXT2}
//                 value={e.ANSWERTEXT2}
//                 className="hidden"
//                 onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT2)}
//                 checked={isSelected(e.QID, e.ANSWERTEXT2)}
//               />
//               <label
//                 htmlFor={e.ANSWERTEXT2}
//                 className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                 style={
//                   isSelected( e.QID, e.ANSWERTEXT2)
//                     ? { backgroundColor: 'gray', color: '#ffffff' }
//                     : {}
//                 }
//               >
//                 {e.ANSWERTEXT2}
//               </label>
//             </div>

//             <div className="flex w-full mb-2">
//               <input
//                 type="radio"
//                 id={e.ANSWERTEXT3}
//                 name={e.ANSWERTEXT3}
//                 value={e.ANSWERTEXT3}
//                 className="hidden"
//                 onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT3)}
//                 checked={isSelected(e.QID, e.ANSWERTEXT3)}
//               />
//               <label
//                 htmlFor={e.ANSWERTEXT3}
//                 className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                 style={
//                   isSelected(e.QID, e.ANSWERTEXT3)
//                    ? { backgroundColor: 'gray', color: '#ffffff' }
//                     : {}
//                 }
//               >
//                 {e.ANSWERTEXT3}
//               </label>
//             </div>
//           </div>
//         ))}
//         </div>
//         <button onClick={handlesubmit} style={{backgroundColor: "#680431",color:"white"}} className="py-2 my-8 px-8 uppercase  rounded-full  font-semibold">
//            Submit
//           </button>
//         <p
         
//           style={{  marginTop: "10px", marginBottom: "0px", padding: "0px" }}
//         >
          
//           <a href="#top" className="  py-2 px-6 rounded-full  font-semibold">
//             Back to Top
//           </a>
//         </p>
//         {/* </div> */}
//       </div>
//     </div>
//   );
// }

// export default Test;


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { testapi } from "../api/api";

// function Test() {
//   const location = useLocation();
//   const data = location.state?.e;  // Accessing the state

//   const [alltest, setAlltest] = useState([]);
//   const [selectedOptions, setSelectedOptions] = useState({});

//   // Ensure we have the necessary data
//   useEffect(() => {
//     if (!data || !data.ORGSTRUCTUREID) {
//       console.error("ORGSTRUCTUREID is missing in state", data);
//       return;
//     }
//     testapifun();
//   }, [data]);

//   const testapifun = async () => {
//     try {
//       const res = await testapi(data.ORGSTRUCTUREID);
//       console.log(res, "check chapter data");
//       setAlltest(res);
//     } catch (error) {
//       console.error("Failed to fetch test data", error);
//     }
//   };

//   // Function to handle the selection of an option for a question
//   const handleOptionSelect = (questionId, answerText) => {
//     setSelectedOptions((prevSelectedOptions) => ({
//       ...prevSelectedOptions,
//       [questionId]: answerText,
//     }));
//   };

//   // Function to check if an option is selected for a question
//   const isSelected = (questionId, answerText) => {
//     return selectedOptions[questionId] === answerText;
//   };

//   // Function to handle the form submission
//   const handlesubmit = () => {
//     // You can process the selected options here
//     console.log("Submitted answers:", selectedOptions);
//     // Add further processing logic as needed
//   };

//   // Render the component
//   return (
//     <div>
//       {data && data.ORGSTRUCTUREID ? (
//         <div className="flex flex-1 px-6 flex-col items-center justify-center py-6">
//           <div className="flex bg-gray-100 flex-1 w-full flex-col items-center justify-center">
//             <p style={{ fontSize: "12px", padding: "10px" }}>
//               <i>
//                 (Please note: Revision tests will be available for those chapters
//                 only where you have completed minimum study time.)
//               </i>
//             </p>
//             <div className="flex flex-1 w-4/5 px-5 pt-4 bg-white rounded-md flex-col justify-start">
//               <div className="flex my-4 flex-row">
//                 <h4 className="font-bold uppercase border-b-2 w-full" style={{ color: "#680431", borderColor: "#680431" }}>
//                   {data.ORGSTRUCTURENAME}
//                 </h4>
//               </div>
//               {alltest.length > 0 &&
//                 alltest.map((e, i) => (
//                   <div className="py-4" key={i}>
//                     <p className="text-lg font-semibold mb-4">{i + 1 + ". " + e.QUESTIONTEXT}</p>
//                     <div className="flex w-full mb-2">
//                       <input
//                         type="radio"
//                         id={`${e.QID}-${e.ANSWERTEXT}`}
//                         name={e.QID}
//                         value={e.ANSWERTEXT}
//                         className="hidden"
//                         onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT)}
//                         checked={isSelected(e.QID, e.ANSWERTEXT)}
//                       />
//                       <label
//                         htmlFor={`${e.QID}-${e.ANSWERTEXT}`}
//                         className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                         style={
//                           isSelected(e.QID, e.ANSWERTEXT)
//                             ? { backgroundColor: 'gray', color: '#ffffff' }
//                             : {}
//                         }
//                       >
//                         {e.ANSWERTEXT}
//                       </label>
//                     </div>
//                     <div className="flex w-full mb-2">
//                       <input
//                         type="radio"
//                         id={`${e.QID}-${e.ANSWERTEXT1}`}
//                         name={e.QID}
//                         value={e.ANSWERTEXT1}
//                         className="hidden"
//                         onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT1)}
//                         checked={isSelected(e.QID, e.ANSWERTEXT1)}
//                       />
//                       <label
//                         htmlFor={`${e.QID}-${e.ANSWERTEXT1}`}
//                         className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                         style={
//                           isSelected(e.QID, e.ANSWERTEXT1)
//                             ? { backgroundColor: 'gray', color: '#ffffff' }
//                             : {}
//                         }
//                       >
//                         {e.ANSWERTEXT1}
//                       </label>
//                     </div>
//                     <div className="flex w-full mb-2">
//                       <input
//                         type="radio"
//                         id={`${e.QID}-${e.ANSWERTEXT2}`}
//                         name={e.QID}
//                         value={e.ANSWERTEXT2}
//                         className="hidden"
//                         onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT2)}
//                         checked={isSelected(e.QID, e.ANSWERTEXT2)}
//                       />
//                       <label
//                         htmlFor={`${e.QID}-${e.ANSWERTEXT2}`}
//                         className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                         style={
//                           isSelected(e.QID, e.ANSWERTEXT2)
//                             ? { backgroundColor: 'gray', color: '#ffffff' }
//                             : {}
//                         }
//                       >
//                         {e.ANSWERTEXT2}
//                       </label>
//                     </div>
//                     <div className="flex w-full mb-2">
//                       <input
//                         type="radio"
//                         id={`${e.QID}-${e.ANSWERTEXT3}`}
//                         name={e.QID}
//                         value={e.ANSWERTEXT3}
//                         className="hidden"
//                         onChange={() => handleOptionSelect(e.QID, e.ANSWERTEXT3)}
//                         checked={isSelected(e.QID, e.ANSWERTEXT3)}
//                       />
//                       <label
//                         htmlFor={`${e.QID}-${e.ANSWERTEXT3}`}
//                         className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                         style={
//                           isSelected(e.QID, e.ANSWERTEXT3)
//                             ? { backgroundColor: 'gray', color: '#ffffff' }
//                             : {}
//                         }
//                       >
//                         {e.ANSWERTEXT3}
//                       </label>
//                     </div>
//                   </div>
//                 ))}
//             </div>
//             <button onClick={handlesubmit} style={{ backgroundColor: "#680431", color: "white" }} className="py-2 my-8 px-8 uppercase rounded-full font-semibold">
//               Submit
//             </button>
//             <p style={{ marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
//               <a href="#top" className="py-2 px-6 rounded-full font-semibold">
//                 Back to Top
//               </a>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <p>ORGSTRUCTUREID is missing in state</p>
//       )}
//     </div>
//   );
// }

// export default Test;


// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { testapi } from "../api/api";

// function Test() {
//   const location = useLocation();
//   const data = location.state?.e; // Accessing the state

//   const [alltest, setAlltest] = useState([]);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

//   // Ensure we have the necessary data
//   useEffect(() => {
//     if (!data || !data.ORGSTRUCTUREID) {
//       console.error("ORGSTRUCTUREID is missing in state", data);
//       return;
//     }
//     testapifun();
//   }, [data]);
//   console.log("userid:",data.ORGSTRUCTUREID)
//   const testapifun = async () => {
//     try {
//       const res = await testapi(data.ORGSTRUCTUREID);
//       console.log(res, "check chapter data");
//       if (res && res.length > 0) {
//         setAlltest(res);
//         // Initialize selected option for each question
//         let initialSelectedOption = null;
//         res.forEach((question) => {
//           initialSelectedOption[question.QID] = null; // or set default if needed
//         });
//         setSelectedOption(initialSelectedOption);
//       } else {
//         console.error("Empty response or invalid format", res);
//       }
//     } catch (error) {
//       console.error("Failed to fetch test data", error);
//     }
//   };

//   // Function to handle the selection of an option for a question
//   const handleOptionSelect = (answerText) => {
//     setSelectedOption(answerText);
//   };

//   // Function to check if an option is selected for a question
//   const isSelected = (answerText) => {
//     return selectedOption === answerText;
//   };

//   // Function to handle moving to the next question
//   const handleNextQuestion = () => {
//     if (currentQuestionIndex < alltest.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       console.log("No more questions to show."); // Optionally handle end of questions
//     }
//   };

//   // Function to handle moving to the previous question
//   const handlePreviousQuestion = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     } else {
//       console.log("Already at the first question."); // Optionally handle start of questions
//     }
//   };

//   // Function to handle the form submission for a single question
//   const handleSubmitQuestion = async () => {
//     const currentQuestion = alltest[currentQuestionIndex];
//     const selectedAnswer = selectedOption;

//     // Call your backend API here to check the answer
//     try {
//       // Example: Assuming testapi checks the answer, modify as per your backend API
//       const res = await testapi(currentQuestion.QID, selectedAnswer);
//       console.log(res); // Handle response from backend
//     } catch (error) {
//       console.error("Failed to submit answer:", error);
//     }

//     // Optionally, you can clear selected options or update UI after submission
//   };

//   // Render the component
//   return (
//     <div>
//       {data && data.ORGSTRUCTUREID ? (
//         <div className="flex flex-1 px-6 flex-col items-center justify-center py-6">
//           <div className="flex bg-gray-100 flex-1 w-full flex-col items-center justify-center">
//             <p style={{ fontSize: "12px", padding: "10px" }}>
//               <i>
//                 (Please note: Revision tests will be available for those chapters
//                 only where you have completed minimum study time.)
//               </i>
//             </p>
//             <div className="flex flex-1 w-4/5 px-5 pt-4 bg-white rounded-md flex-col justify-start">
//               {alltest.length > 0 && currentQuestionIndex < alltest.length ? (
//                 <div className="py-4">
//                   <p className="text-lg font-semibold mb-4">
//                     {currentQuestionIndex + 1 + ". " + alltest[currentQuestionIndex].QUESTIONTEXT}
//                   </p>
//                   <div>
//                     {Object.keys(alltest[currentQuestionIndex]).filter(key => key.includes("ANSWERTEXT")).map((key, index) => (
//                       <div className="flex w-full mb-2" key={index}>
//                         <input
//                           type="radio"
//                           id={`${alltest[currentQuestionIndex].QID}-${index}`}
//                           name={alltest[currentQuestionIndex].QID}
//                           value={alltest[currentQuestionIndex][key]}
//                           className="hidden"
//                           onChange={() => handleOptionSelect(alltest[currentQuestionIndex][key])}
//                           checked={isSelected(alltest[currentQuestionIndex][key])}
//                         />
//                         <label
//                           htmlFor={`${alltest[currentQuestionIndex].QID}-${index}`}
//                           className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
//                           style={
//                             isSelected(alltest[currentQuestionIndex][key])
//                               ? { backgroundColor: "gray", color: "#ffffff" }
//                               : {}
//                           }
//                         >
//                           {alltest[currentQuestionIndex][key]}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                   {/* <button
//                     onClick={handleSubmitQuestion}
//                     style={{ backgroundColor: "#680431", color: "white" }}
//                     className="py-2 my-8 px-8 uppercase rounded-full font-semibold mr-4"
//                   >
//                     Submit
//                   </button> */}
//                   <button
//                     onClick={handlePreviousQuestion}
//                     style={{ backgroundColor: "#680431", color: "white" }}
//                     className="py-2 my-8 px-8 uppercase rounded-full font-semibold"
//                   >
//                     Previous
//                   </button>
//                   <button
//               onClick={handleNextQuestion}
//               style={{ marginTop: "10px", backgroundColor: "#680431", color: "white",marginLeft:'10px' }}
//               className="py-2 px-8 rounded-full font-semibold"
//             >
//               Next Question
//             </button>
//                 </div>
//               ) : (
//                 <p>No more questions to display.</p>
//               )}
//             </div>
       
//             <p style={{ marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
//               <a href="#top" className="py-2 px-6 rounded-full font-semibold">
//                 Back to Top
//               </a>
//             </p>
//           </div>
//         </div>
//       ) : (
//         <p>ORGSTRUCTUREID is missing in state</p>
//       )}
//     </div>
//   );
// }

// export default Test;





import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { testapi, updateTestAnswer, updateanswers } from "../api/api"; // Import your API functions
import axios from "axios";

const getlocaldata = async () => {
  const token = localStorage.getItem("token");
  const savedStudentId = localStorage.getItem("sid");
  const savedLoginId = localStorage.getItem("uid");
  const COURSEID = localStorage.getItem("COURSEID");

  const localdata = {
    token,
    savedStudentId,
    savedLoginId,
    COURSEID,
  };
  return localdata;
};

function Test() {
  const location = useLocation();
  const data = location.state?.e; 
  const navigate = useNavigate();
  const [alltest, setAlltest] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (!data || !data.ORGSTRUCTUREID) {
      console.error("ORGSTRUCTUREID is missing in state", data);
      return;
    }
    testapifun();
    logLocalData(); 
  }, [data]);
  const logLocalData = async () => {
    const val = await getlocaldata();
    console.log("student id:", val.savedStudentId);
  };
  const chapterID=data.ORGSTRUCTUREID
  const testapifun = async () => {
    try {
      const res = await testapi(data.ORGSTRUCTUREID);
      console.log(res, "check chapter data");
      if (res && res.length > 0) {
        setAlltest(res);
        let initialSelectedOption = {};
        res.forEach((question) => {
          initialSelectedOption[question.QID] = ""; 
        });
        setSelectedOption(initialSelectedOption);
      } else {
        console.error("Empty response or invalid format", res);
      }
    } catch (error) {
      console.error("Failed to fetch test data", error);
    }
  };

  
  const handleOptionSelect = (answerText) => {
    setSelectedOption((prevSelectedOptions) => ({
      ...prevSelectedOptions,
      [alltest[currentQuestionIndex].QID]: answerText,
    }));
  };

 
  const isSelected = (answerText) => {
    return selectedOption[alltest[currentQuestionIndex].QID] === answerText;
  };


  
  const handleNextQuestion = async () => {
    if (currentQuestionIndex < alltest.length - 1) {
    
      try {
        const val = await getlocaldata();
        console.log("student id:",val.savedStudentId)
        const currentQuestion = alltest[currentQuestionIndex];
        const selectedAnswer = selectedOption[currentQuestion.QID];
        const response = await axios.post("http://103.171.45.231:3000/user/updatetestanswer",{
          studentid: val.savedStudentId,
          qid: currentQuestion.QID,
          examid:currentQuestion.EID,
          answer: selectedAnswer,
        }, {
          headers: {
            Authorization: val.token,
            Data: val.savedLoginId,
          },
        });
        console.log("Answer submitted:", response);

        
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } catch (error) {
        console.error("Failed to update answer:", error);
      }
    } else {
      console.log("No more questions to show."); 
    }
  };



  const updateCurrentAnswer = async () => {
    try {
      const val = await getlocaldata();
      const currentQuestion = alltest[currentQuestionIndex];
      const selectedAnswer = selectedOption[currentQuestion.QID];
      await axios.post("http://103.171.45.231:3000/user/updatetestanswer", {
        studentid: val.savedStudentId,
        qid: currentQuestion.QID,
        examid: currentQuestion.EID,
        answer: selectedAnswer,
      }, {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      });
    } catch (error) {
      console.error("Failed to update answer:", error);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else {
      console.log("Already at the first question."); 
    }
  };


  const handleSubmit = async () => {
    try {
      await updateCurrentAnswer();
      const val = await getlocaldata();
      const response = await axios.post(
        'http://103.171.45.231:3000/user/examresultsummary',
        {
          studentid: val.savedStudentId,
          chapterid: chapterID,
        },
        {
          headers: {
            Authorization: val.token,
            Data: val.savedLoginId,
          },
        }
      );
      console.log('Test submitted:', response);

      
      navigate('/resultsummary', {
        state: {
          summary: response.data[0],chapterID
        },
      });
    } catch (error) {
      console.error('Failed to submit test:', error);
    }
  };

  return (
    <div>
      {data && data.ORGSTRUCTUREID ? (
        <div className="flex flex-1 px-6 flex-col items-center justify-center py-6">
          <div className="flex bg-gray-100 flex-1 w-full flex-col items-center justify-center">
            <p style={{ fontSize: "12px", padding: "10px" }}>
              <i>
                (Please note: Revision tests will be available for those chapters
                only where you have completed minimum study time.)
              </i>
            </p>
            <div className="flex flex-1 w-4/5 px-5 pt-4 bg-white rounded-md flex-col justify-start">
              {alltest.length > 0 && currentQuestionIndex < alltest.length ? (
                <div className="py-4">
                  <p className="text-lg font-semibold mb-4">
                    {currentQuestionIndex + 1 + ". " + alltest[currentQuestionIndex].QUESTIONTEXT}
                  </p>
                  <div>
                    {Object.keys(alltest[currentQuestionIndex]).filter(key => key.includes("ANSWERTEXT")).map((key, index) => (
                      <div className="flex w-full mb-2" key={index}>
                        <input
                          type="radio"
                          id={`${alltest[currentQuestionIndex].QID}-${index}`}
                          name={alltest[currentQuestionIndex].QID}
                          value={alltest[currentQuestionIndex][key]}
                          className="hidden"
                          onChange={() => handleOptionSelect(alltest[currentQuestionIndex][key])}
                          checked={isSelected(alltest[currentQuestionIndex][key])}
                        />
                        <label
                          htmlFor={`${alltest[currentQuestionIndex].QID}-${index}`}
                          className="cursor-pointer flex items-center w-full py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100"
                          style={
                            isSelected(alltest[currentQuestionIndex][key])
                              ? { backgroundColor: "gray", color: "#ffffff" }
                              : {}
                          }
                        >
                          {alltest[currentQuestionIndex][key]}
                        </label>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handlePreviousQuestion}
                    style={{ backgroundColor: "#680431", color: "white",borderRadius:'5px' }}
                    className="py-2 my-8 px-8  rounded-full font-semibold"
                  >
                    Previous
                  </button>
                  {currentQuestionIndex < alltest.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      style={{ marginTop: "10px", backgroundColor: "#680431", color: "white", marginLeft: '10px',borderRadius:'5px' }}
                      className="py-2 px-8 rounded-full font-semibold"
                    >
                      Next Question
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmit}
                      style={{ marginTop: "10px", backgroundColor: "#680431", color: "white", marginLeft: '10px',borderRadius:'5px' }}
                      className="py-2 px-8 rounded-full font-semibold"
                    >
                      Submit
                    </button>
                  )}
                </div>
              ) : (
                <p>No more questions to display.</p>
              )}
            </div>
            <p style={{ marginTop: "10px", marginBottom: "0px", padding: "0px" }}>
              <a href="#top" className="py-2 px-6 rounded-full font-semibold">
                Back to Top
              </a>
            </p>
          </div>
        </div>
      ) : (
        <p>ORGSTRUCTUREID is missing in state</p>
      )}
    </div>
  );
}

export default Test;
