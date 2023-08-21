import React,{ useEffect, useState } from 'react';
import {InputGroup, Table, Form} from 'react-bootstrap';
import {Button } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents, deleteStudent } from '../services/studentservice';
import UpdateStudentModal2 from "./UpdateStudentModal2";
import "../App.css";


const Manage = () => {
    const [students, setStudents] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [editStudent, setEditStudent] = useState([]);
    const [isUpdated, setIsUpdated] = useState(false);
    const [search, Setsearch] = useState('');
    console.log(search)




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

const handleDelete = (e,    loan_id) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent(loan_id)
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
        <Form>
           <InputGroup className='my-3'>
               <Form.Control onChange={(e) => Setsearch(e.target.value)} placeholder='Search Pan' />
           </InputGroup>
        </Form>
    <p id="manage"></p>
        <Table striped bordered hover className="react-bootstrap-table" id="dataTable">
        <thead>
            <tr>
            <th>Loan ID</th>
            <th>Loan Amount</th>
            <th>Customer PAN</th>
            <th>Customer Name</th>
            <th>RM</th>
            <th>Creation Date</th>
            <th>Update Date</th>
            </tr>
        </thead>
        <tbody>
            {students.filter((stu) => {
                return search === ''
                ? stu
                : stu.employee_table.includes(search);
            })
                .map((stu) => (
            <tr key={stu.loan_id}>
                <td>{stu.loan_id}</td>
                <td>{stu.loan_amount}</td>
                <td>{stu.employee_table}</td>
                <td>{stu.customer_name}</td>
                <td>{stu.relationship_manager}</td>
                <td>{stu.creation_date}</td>
                <td>{stu.update_date}</td>
              <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.loan_id)}>
                    <RiDeleteBin5Line />
              </Button>
              <span>&nbsp;&nbsp;&nbsp;</span>
              <Button className="mr-2"
                onClick={event => handleUpdate(event,stu)}>
                    <FaEdit />
              </Button>
              <UpdateStudentModal2 show={editModalShow} student={editStudent} setUpdated={setIsUpdated}
                          onHide={EditModelClose}></UpdateStudentModal2>
            </td>
            </tr>))}
          </tbody>
        </Table>
    </div>
    </div>
);
};
export default Manage;