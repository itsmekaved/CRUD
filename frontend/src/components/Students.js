import React,{ useEffect, useState } from 'react';
import {InputGroup, Table, Form} from 'react-bootstrap';
import {Button,ButtonToolbar } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { getStudents2, deleteStudent2 } from '../services/studentservice';
import AddStudentModal2 from "./AddStudentModal2";
import UpdateStudentModal from "./UpdateStudentModal";
import "../App.css";


const Manage2 = () => {
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
   getStudents2()
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

const handleDelete = (e,    customer_id) => {
    if(window.confirm('Are you sure ?')){
        e.preventDefault();
        deleteStudent2(customer_id)
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
            <th>Customer ID</th>
            <th>Customer PAN</th>
            <th>Customer Name</th>
            <th>Customer Phone</th>
            </tr>
        </thead>
        <tbody>
            {students.filter((stu) => {
                return search === ''
                ? stu
                : stu.customer_pan.includes(search);
            })
                .map((stu) => (
            <tr key={stu.customer_id}>
                <td>{stu.customer_id}</td>
                <td>{stu.customer_pan}</td>
                <td>{stu.customer_name}</td>
                <td>{stu.customer_phone}</td>
              <td>

              <Button className="mr-2" variant="danger"
                onClick={event => handleDelete(event,stu.customer_id)}>
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
            </tr>))}
          </tbody>
        </Table>
        <ButtonToolbar>
            <Button variant="primary" onClick={handleAdd}>
            Add Customer
            </Button>
            <AddStudentModal2 show={addModalShow} setUpdated={setIsUpdated}
            onHide={AddModelClose}></AddStudentModal2>
        </ButtonToolbar>
    </div>
    </div>
);
};
export default Manage2;