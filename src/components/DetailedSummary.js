import React from 'react';
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

function DetailedSummary() {
  const location = useLocation();
  const navigate = useNavigate();
  const detailedSummary = location.state?.detailedSummary || [];

  const handleBack = () => {
    navigate(-1); // Navigates back to the previous page
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-full bg-white p-6 rounded-lg shadow-md"> 
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h2 className="text-2xl font-bold mb-4">Detailed Summary</h2>
        <Button
          variant="contained"
          color="primary"
          onClick={handleBack}
          className="py-2 px-6 rounded-full font-semibold"
          style={{backgroundColor:'#680431'}}
        >
          Back
        </Button>
        </div>
        <TableContainer component={Paper} className="mb-4">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ color: 'white' }}><strong>Question</strong></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><strong>Correct Answer</strong></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><strong>Your Answer</strong></TableCell>
                <TableCell align="center" sx={{ color: 'white' }}><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {detailedSummary.map((item, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{item.QUESTIONTEXT}</TableCell>
                  <TableCell align="center">{item.CORRECTANSWER}</TableCell>
                  <TableCell align="center">{item.STUDENTANSWER || "Not Answered"}</TableCell>
                  <TableCell align="center">{item.ANSWERSTATUS}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
       
      </div>
    </div>
  );
}

export default DetailedSummary;
