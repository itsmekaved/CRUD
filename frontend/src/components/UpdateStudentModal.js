import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/studentservice';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.id, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Student");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="std_rollno">
                                    <Form.Label>Roll Number</Form.Label>
                                    <Form.Control type="text" name="std_rollno" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="std_name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="std_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="std_branch">
                                    <Form.Label>Branch</Form.Label>
                                    <Form.Control type="text" name="std_branch" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="std_course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="std_course" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="std_studyhours">
                                    <Form.Label>Study_Hours</Form.Label>
                                    <Form.Control type="text" name="std_studyhours" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="std_marks">
                                    <Form.Label>Marks</Form.Label>
                                    <Form.Control type="text" name="std_marks" required placeholder="" />
                            </Form.Group>
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateStudentModal;