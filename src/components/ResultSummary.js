import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button
} from '@mui/material';
import axios from 'axios';
import { detailedExamSummary } from '../api/api';

function ResultSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const [detailedSummary,setDetailedSummary]=useState("")
  const summary = location.state?.summary || {
    TotalQuestion: "0",
    CurrectAnswer: "0",
    Percentage: "0",
    WorngAnswer: "0",
    NotAttempted: "0"
  };

  const chapterID=location.state?.chapterID
  console.log("chapterid:",chapterID)
  const handleBackToTest = () => {
    navigate(-1); // Navigates back to the previous page (Test component)
  };

 

  const handleDetailedSummary = async () => {
    try {
      const res = await detailedExamSummary(chapterID);
      console.log(res, "check data");
      setDetailedSummary(res);
      navigate('/detailedsummary', { state: { detailedSummary: res } }); // Navigate to the DetailedSummary component
    } catch (error) {
      console.error("Error fetching detailed summary:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Exam Summary</h2>
        <TableContainer component={Paper} className="mb-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center"  sx={{ color: 'white' }}><strong>Statistic</strong></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><strong>Value</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="center">Total Questions</TableCell>
                <TableCell align="center">{summary.TotalQuestion}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Correct Answers</TableCell>
                <TableCell align="center">{summary.CurrectAnswer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Wrong Answers</TableCell>
                <TableCell align="center">{summary.WorngAnswer}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Not Attempted</TableCell>
                <TableCell align="center">{summary.NotAttempted}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">Percentage</TableCell>
                <TableCell align="center">{summary.Percentage}%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{justifyContent:'space-between',display:'flex'}}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBackToTest}
          className="py-2 px-6 rounded-full font-semibold"
          style={{backgroundColor:'#680431'}}
        >
          Back to Test
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleDetailedSummary}
          className="py-2 px-6 rounded-full font-semibold"
          style={{backgroundColor:'#680431'}}
        >
          Detailed Summary
        </Button>
        </div>
      </div>
    </div>
  );
}

export default ResultSummary;
