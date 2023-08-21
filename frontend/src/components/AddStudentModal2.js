import React from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import { addStudent2 } from '../services/studentservice';


const AddStudentModal2 = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        addStudent2(e.target)
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
                        Fill In Student Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="customer_id">
                                    <Form.Label>ID</Form.Label>
                                    <Form.Control type="text" name="customer_id" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="customer_pan">
                                    <Form.Label>PAN</Form.Label>
                                    <Form.Control type="text" name="customer_pan" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="customer_name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="customer_name" required placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="customer_phone">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="text" name="customer_phone" required placeholder="" />
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

export default AddStudentModal2;