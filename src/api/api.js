import axios from "axios";

export const login_api = async (data) => {
    console.log(data)
    const ip= ip_api()
    const result = await axios.post("http://103.171.45.231:3000/signin", {
      userid: data.email,
      password: data.password,
      loginfrom: `${ip}`
    });
    console.log("e")
    console.log(result.data);
    return result.data;
};
export const ip_api = async () => {
    const result = await axios.get("https://api.ipify.org?format=json");
    console.log(result.data);
    return result.data;
};


export const student_api = async () => {
    const token = localStorage.getItem('token');
    const savedStudentId = localStorage.getItem('sid');
    const savedLoginId = localStorage.getItem('uid');
    try {
        const result = await axios.post('http://103.171.45.231:3000/user/studentsummary', 
            {studentid: savedStudentId},
            {
                headers:{
                    Authorization:token,
                    Data:savedLoginId
                }
            }
        );
        console.log(result.data);
        return result.data;
    } catch (error) {
        console.error(error);
        return error;
    }
};




