import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import MyCourses from '../MyCourses/MyCourses';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    return (
       <Container>
            <Row className="g-3">
                <Col lg='3' sm='12'>
                    <Sidebar></Sidebar>
                </Col>
                <Col lg='9' sm='12'>
                    <MyCourses></MyCourses>
                </Col>
            </Row>
       </Container>
    );
};

export default Courses;