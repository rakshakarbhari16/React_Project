import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import axios from 'axios';


const ResultLoginPage = () => {

    const[registerInput, setregisterInput] = useState("")
    const[error,setError] = useState("")
    const navigate = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        if(registerInput === ''){
            setError("Please Enter Valid Register id")
        }
        else{
            axios.get('http://localhost:3001/studentInfo')
            .then((response) => {
                console.log('res',response.data)
                response.data.map((data,index) =>{

                 if(data.RegisterId === registerInput){
                    navigate(`/resultpage/${registerInput}`)

                }
            })
        })
    }}



    return(
        <>
        <Link to='/' className='btn btn-dark' style={{marginTop:"1rem"}}>Go Back</Link>
        <Row className="text-center">
            <Col><h3>Check your Results here..</h3></Col>
        </Row>
        <br/>
        <Row>
            <Col></Col>
            <Col style={{marginLeft:"-21rem"}}>
            
            <Form onSubmit={(e) => submitHandler(e)}>
             <Form.Label>Enter your Register Number:</Form.Label> <br />
            < Form.Control type="text" placeholder="Enter your register number" style={{width:'70%'}} value={registerInput} onChange={(e) => setregisterInput(e.target.value)}/> <br/>
            <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
            </Form>
            
            
            </Col>
            
        </Row>
        <Row  className="justify-content-center my-2">
        {error ? <Alert variant="danger">{error}</Alert>: ''}
        </Row>
        
        
        </>
    )
}

export default ResultLoginPage;