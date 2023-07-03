import React,{ useEffect, useState } from 'react';
import {Table} from 'react-bootstrap';
import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../services/studentservice';
import AddStudentModal from "./AddStudentModal";
import UpdateStudentModal from "./UpdateStudentModal";
import "../App.css";


const Manage = () => {
    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);



useEffect(() => {
   let mounted = true;
   if(students.length && !isUpdated) {
    return;
    }
   getStudents()
     .then(data => {
       if(mounted) {
         setStudents(data);
       }
     })
   return () => {
      mounted = false;
      setIsUpdated(false);
   }
 }, [isUpdated, students])

const handleUpdate = (e, stu) => {
    e.preventDefault();
    setEditModalShow(true);
    setEditStudent(stu);
};

const handleAdd = (e) => {
    e.preventDefault();
    setAddModalShow(true);
};

const handleDelete = (e,    id) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent(id)
        .then((result)=>{
            alert(result);
            setIsUpdated(true);
        },
        (error)=>{
            alert("Failed to Delete Student");
        })
    }
};


let AddModelClose=()=>setAddModalShow(false);
let EditModelClose=()=>setEditModalShow(false);
return(
    <div className="container-fluid side-container">
    <div className="row side-row" >
    <p id="manage"></p>
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
              <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.id)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateStudentModal show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateStudentModal>
            </td>
            </tr>)}
          </tbody>
        </Table>
        <ButtonToolbar>
            <Button variant="primary" onClick={handleAdd}>
            Add Student
            </Button>
            <AddStudentModal show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModal>
        </ButtonToolbar>
    </div>
    </div>
);
};
export default Manage;

