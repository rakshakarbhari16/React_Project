import React from "react";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const HomeScreen = () =>{
    return(
        <>
        <div>
            <marquee>
                VTU Results 2024 out - check Exam Results here!!
            <Link to='/result/loginPage'>Click here...</Link> Best of luck!!!</marquee>
        </div>
        <div>
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/FirstSlide.png"
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/secondSlide.jpg"
                alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/img3.png"
                alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/img4.png"
                alt="Fourth slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/images/img5.jpg"
                alt="Fifth slide"
                />
            </Carousel.Item>
        </Carousel>
        </div>
        <br/>
        <div>
            <Row>
                <Col>
                <Link to='/about'><h4>Vision</h4></Link>
                <p className="p-style">To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.To become an outstanding Technological University at the cutting edge of Science and Technology that produces world class Knowledge-delivery, Research, Extension and Leadership in Technology innovation for Industry and Society.</p>
                <Link to='/about' className='btn btn-warning'>Read More</Link>
                </Col>
                <Col>
                <Link to='/about'><h4>Mission</h4></Link>
                <p className="p-style">To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.To plan the development of technical education, to establish value-based and need-based education and training in engineering and technology, with a view to generate qualified and competent manpower, responsive to technological and societal needs.</p>
                <Link to='/about' className='btn btn-warning'>Read More</Link>
                </Col>
                <Col>
                <Link to='/about'><h4>Mandate</h4></Link>
                <p className="p-style">The Visvesvaraya Technological University has been established by the Government of the Karnataka in order to Promote planned and sustainable development of technical education consistent with state and national policies.
                *Design need based programs that ensure adequate human resource of the right kind.
                *Establish objective evaluation and certification systems for students,programs and institutions.
                *Collaborate with national and international institutions R&D establishments organizations like AICTE, MHRD, UGC, etc.industry and user agencies</p>
                <Link to='/about' className='btn btn-warning'>Read More</Link>
                </Col>
            </Row>
        </div>
        </>
    )
}

export default HomeScreen;