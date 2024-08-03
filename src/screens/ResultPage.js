import React,{useState,useEffect} from "react";
import {Row, Col, Form} from 'react-bootstrap';
import TableData from "./TableData";
import axios from "axios";
import { useParams } from "react-router-dom";


const ResultPage = () =>{

    const[studentDetails,setStudentDetails] = useState([])

    const {id} = useParams()

    useEffect(() =>{ 
        axios.get('http://localhost:3001/studentInfo')
        .then((response) => {
            response.data.map((data) => {
                if(data.RegisterId === id){
                    setStudentDetails(data)

                }

            })
        })
        .catch((error) => console.log("error", error))

    },[])
    console.log(studentDetails)


    return(
        <>
        <Row className="justify-content-center my-5">
            <Col sm={12} md={6}>Visvesvaraya Technological University,Belgaum
            <h6 style={{marginLeft:"2.5rem",fontSize:"12px"}}>VII Semester Examination Result - Nov/Dec 2024</h6>
            </Col>
        </Row>
        <Row>
            <Col sm={12} md={6}>
            <Form.Group>
                <Form.Label>Student Name:</Form.Label>
                <Form.Label>{studentDetails.StudentName}</Form.Label><br/>
                <Form.Label>Father's Name:</Form.Label>
                <Form.Label>{studentDetails.FatherName}</Form.Label><br/>
                <Form.Label>College Name:</Form.Label>
                <Form.Label>{studentDetails.CollegeName}</Form.Label>
            </Form.Group>
            
            </Col>
            <Col sm={12} md={6}>
            <Form.Group>
            <Form.Label style={{float:"right"}}>Register No.:{studentDetails.RegisterId}</Form.Label>
            
            </Form.Group>
            
            
            </Col>
        </Row>
        <Row>
            <TableData studentId = {studentDetails.RegisterId}/>
        </Row>
        </>
    )
}

export default ResultPage;