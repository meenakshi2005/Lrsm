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

export const login_api = async (data) => {
  console.log(data);
  const ip = ip_api();
  const result = await axios.post("http://103.171.45.231:3000/signin", {
    userid: data.email,
    password: data.password,
    loginfrom: `${ip}`,
  });
  console.log("e");
  console.log(result.data);
  return result.data;
};
export const ip_api = async () => {
  const result = await axios.get("https://api.ipify.org?format=json");
  console.log(result.data);
  return result.data;
};

export const student_api = async () => {
  const val = await getlocaldata();
  console.log("valuee local ", val);
  try {
    const result = await axios.post(
      "http://103.171.45.231:3000/user/studentsummary",
      { studentid: val.savedStudentId },

      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log("dakm", result?.data[0], "da");

    localStorage.setItem("COURSEID", result?.data[0]?.COURSEID);

    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const course_api = async () => {
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/coursesummary",
      { cid: val.COURSEID, studentid: val.savedcid },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const chatpter_api = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/chapertsummary",
      {
        studentid: val.savedStudentId,
        chapterid: item,
        chaptertype:"CHAPTER"
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const apiAddChapterTime = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/addchaperttime",
      {
        studentid: val.savedStudentId,
        chapterid: item,
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const testapi = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/testsummary",
      {
        studentid: val.savedStudentId,
        chapterid: item,
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const updateanswers = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/updatetestanswer",
      {
        studentid: val.savedStudentId,
        qid: item.questionIndex,
        examid: item.examid,
        answer: item.option,
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
export const submitexam = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/",
      {
        studentid: val.savedStudentId,
        qid: item.questionIndex,
        examid: item.examid,
        answer: item.option,
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export const detailedExamSummary = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/examresultdetail",
      {
        studentid: val.savedStudentId,
        chapterid: item,
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};




export const getDailyLimit = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/getdailytimelimit",
      {
        studentid: val.savedStudentId,
        
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};



export const getChapterTime = async (item) => {
  console.log(item, "userid");
  try {
    const val = await getlocaldata();
    const result = await axios.post(
      "http://103.171.45.231:3000/user/getdailytimelimit",
      {
        studentid: val.savedStudentId,
        chapterid: item,
        
      },
      {
        headers: {
          Authorization: val.token,
          Data: val.savedLoginId,
        },
      }
    );
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
