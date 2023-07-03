import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getStudents } from '../services/studentservice';
import "../App.css";

const Students = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
   let mounted = true;
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data)
       }
     })
   return () => mounted = false;
 }, [])

  return(
   <div className="container-fluid side-container">
   <div className="row side-row" >
    <p id="before-table"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Branch</th>
            <th>Course</th>
            <th>Study Hours</th>
            <th>Marks</th>
            </tr>
        </thead>
        <tbody>
            {students.map((stu) =>
            <tr key={stu.id}>
                <td>{stu.std_rollno}</td>
                <td>{stu.std_name}</td>
                <td>{stu.std_branch}</td>
                <td>{stu.std_course}</td>
                <td>{stu.std_studyhours}</td>
                <td>{stu.std_marks}</td>
            </tr>)}
        </tbody>
    </Table>
    </div>
  </div>
  );
};

export default Students;