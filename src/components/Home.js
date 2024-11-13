import { useEffect, useState } from "react";
import { student_api } from "../api/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import "../css/home.css";

function Home() {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [dailyHoursData, setDailyHoursData] = useState([]);
  const [status, setStatus] = useState("");
  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    
    setChartData([
      { name: 'Completed Hours', value: 30 },
      { name: 'Remaining Hours', value: 70 },
    ]);
  
    setDailyHoursData([
      { date: '2024-06-01', hours: 2 },
      { date: '2024-06-02', hours: 3 },
      { date: '2024-06-03', hours: 1 },
      { date: '2024-06-04', hours: 4 },
      { date: '2024-06-05', hours: 2 },
      { date: '2024-06-06', hours: 3 },
      { date: '2024-06-07', hours: 5 },
    ]);
  
    
    fetchStudentData();
  }, []);
  
  async function fetchStudentData() {
    try {
      const res = await student_api();
      console.log(res);
      console.log("time", res[0].TOTALTIME);
      console.log("time", res[0].REMANING_TIME);

      const studentData = res[0];
      setData(studentData);

      const { TRAININGSTARTDATE, TRAININGENDDATE } = studentData;
      if (!TRAININGSTARTDATE && !TRAININGENDDATE) {
        setStatus("Not Started");
      } else if (TRAININGSTARTDATE && !TRAININGENDDATE) {
        setStatus("On Going");
      } else if (TRAININGSTARTDATE && TRAININGENDDATE) {
        setStatus("Completed");
      }

      // Calculate days remaining
      const currentDate = new Date();
      const expiryDate = new Date(studentData.EXPIRYDATE);
      const timeDiff = expiryDate - currentDate;
      const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days
      setDaysRemaining(daysRemaining);

    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  }
  const getStatusColor = (status) => {
    switch (status) {
      case "Not Started":
        return "red";
      case "On Going":
        return "orange";
      case "Completed":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <div
      className="fixed-width clearfix"
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        padding: "0px 200px 0px 200px",
        marginTop: "50px",
      }}
    >
      <p style={{ fontSize: "18px", color: "#595959" }}>
        Welcome{" "}
        <span style={{ color: "maroon", fontWeight: "700" }}>{data?.NAME}</span>{" "}
        to course{" "}
        <span style={{ color: "maroon", fontWeight: "700" }}>
          {data?.COURSENAME}
        </span>{" "}
        sponsored by{" "}
        <span style={{ color: "maroon", fontWeight: "700" }}>
          {data?.SPONSOR}
        </span>
      </p>
      <div className="flex justify-between p-2">
        <h5 style={{ fontWeight: "600", fontSize: "18px" }}>Course Summary</h5>
      </div>

      <TableContainer
        component={Paper}
        style={{ marginTop: "10px", width: "100%" }}
      >
        <Table sx={{ border: "2px solid maroon" }}>
          <TableBody>
            <TableRow sx={{ border: "2px solid white" }}>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Login ID:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.URNNO}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Course Name:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.COURSENAME}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Creation Date:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.ENTRYDATE}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                End Date:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.EXPIRYDATE}
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow sx={{ border: "2px solid white" }}>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Training Start Date:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.TRAININGSTARTDATE}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Training End Date:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.TRAININGENDDATE}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Allotted Hours:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.TOTALTIME}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Completed Hours:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.USEDTIME}
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow sx={{ border: "2px solid white" }}>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Remaining Hours:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
                {data?.REMANING_TIME}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Days Remaining:
              </TableCell>
              <TableCell sx={{ border: "2px solid white" }}>
              {daysRemaining}
              </TableCell>
              <TableCell
                sx={{
                  border: "2px solid white",
                  color: "darkblue",
                  fontWeight: "600",
                }}
              >
                Status:
              </TableCell>
              <TableCell
                sx={{ 
                  border: "2px solid white",
                  color: getStatusColor(status),
                  fontWeight: "600",
                }}
              >
                {status}
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      {/* Container for Charts */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
          width: "100%",
        }}
      >
        {/* Bar Chart for Daily Logged Hours */}
        <div style={{ flex: 1, marginRight: "20px" }}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyHoursData}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart for Completed and Remaining Hours */}
        <div style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#82ca9d"
                label={({ name, value }) => `${name}: ${value} s`}
              >
                <Cell key="completed" fill="#8884d8" />
                <Cell key="remaining" fill="#82ca9d" />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* <div
        style={{
          width: "100%",
          marginTop: '30px',
          backgroundColor: "white",
        }}
      >
        <br />
        <p style={{ fontSize: "14px", color: "#595959" }}>
          Note:
        </p>
        <p style={{ fontSize: "14px", color: "#595959" }}>
          You must study <strong>00:00:00</strong> hrs before{" "}
          <strong>
            {data.ENTRYDATE} {data.TOTALTIME}
          </strong>{" "}
          to complete your training.
        </p>
        
        <p style={{ fontSize: "14px", color: "#595959" }}>
          Please read the Help » <a href="#">Instructions</a> carefully before
          starting your course.
        </p>
       
        <p style={{ fontSize: "14px", color: "#595959" }}>
          Should you have any problem or need advice, post your query in the{" "}
          <a href="#">Discussion Board's</a> appropriate category.
        </p>
       
        <p style={{ fontSize: "14px", color: "#595959" }}>
          You can also contact us by email at{" "}
          <a href="mailto:help@dreamweaversindia.com">
            help@dreamweaversindia.com
          </a>{" "}
          or by phone at 91-181-7102501.
        </p>
      </div> */}
    </div>
  );
}

export default Home;
