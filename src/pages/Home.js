import React from 'react';
import SocialLinks from '../components/SocialLinks';
import { Button, Image, Row, Col } from 'react-bootstrap';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import Projects from '../components/Projects';
import { Link } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion";


const Home = () => {
  return (
    <section>
       <AnimatePresence>
          <motion.div
            initial={{ opacity:0, y:15}}
            animate={{ opacity:1, y:0}}
            transition={{ ease: "easeOut", duration: 2}}>
            <Row className='py-5 my-2' >
              <Col className='w-100 d-flex justify-content-center items-center'>
                <Image src='/ite.jpg' className='' width={350} roundedCircle/>
              </Col>
              <Col className='d-flex flex-column'>
                <h1 className='display-1 fw-bold'>
                  Emy Gaudia
                </h1>
                <h3 className='display-6 fw-semibold'>Aspiring Web Developer</h3>
                <p>
                  A 19 year's old BSIT Student studying in PHINMA University of Pangasinan
                </p>
                <div className='d-flex align-items-center gap-2'>
                  <Link to='/work'>
                    <Button className='btn-lg' variant='dark'>View Work</Button>
                  </Link>
                  <SocialLinks />
                </div>
              </Col>
            </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
      <Row className='mt-5 bg-dark rounded text-light p-5'>
        <Row>
          <Col>
            <h1 className='display-1 fw-bold'>About Me</h1>
            <hr />
            <p>Hello I'm Emy Gauida, Hardworking, reliable and able to learn fast, with strong communication and 
organizational skills.
            </p>
            </Col>
            <Col>
              <h3 className='display-1 fw-bold'>Tech Stack</h3>
              <div className='display-1'>
                <FaHtml5 />
                <FaCss3Alt />
                <FaJs />
                <FaReact />
              </div>
            </Col>
          </Row>
          <h3 className='display-1 fw-bold'>Recent Projects</h3>
          <Projects />
         </Row>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y:15}}
          whileInView={{ opacity: 1, y:0}}
          transition={{delay:0.25}}>
          <div className='d-flex flex-column justify-content-center text-center'>
            <h1 className='display-1 fw-bold'>Contact Me</h1>
            <p>These are my socials where you can ask me if you have any question 
              Feel free to contact me!.
            </p>
            <div className='d-flex justify-content-center'>
            <SocialLinks/>
           </div>
          </div>
      </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Home;
