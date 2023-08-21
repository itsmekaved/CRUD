import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { addStudent } from '../services/studentservice';


const AddStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent(e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Add Student");
        })
    }

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Fill In Customer Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="loan_id">
                                    <Form.Label>Loan ID</Form.Label>
                                    <Form.Control type="text" name="loan_id" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="loan_amount">
                                    <Form.Label>Loan Amount</Form.Label>
                                    <Form.Control type="text" name="loan_amount" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="employee_table">
                                    <Form.Label>Customer PAN</Form.Label>
                                    <Form.Control type="text" name="employee_table" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="customer_name">
                                    <Form.Label>Customer Name</Form.Label>
                                    <Form.Control type="text" name="customer_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="relationship_manager">
                                    <Form.Label>RM</Form.Label>
                                    <Form.Control type="text" name="relationship_manager" required placeholder="" />
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

export default AddStudentModal;