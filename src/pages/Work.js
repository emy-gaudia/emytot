import React from 'react';
import { Container,  Row, Col } from 'react-bootstrap';
import { GrWorkshop } from "react-icons/gr";
import Projects from '../components/Projects';
import { motion, AnimatePresence } from "framer-motion";


const Work = () => {
  return (
    <>
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <Row className='flex align-items-center justify-content-center'>
          <Col>
            <h2 className='display-1 fw-bold'>
              <GrWorkshop/>
              My Work
            </h2>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
              <li>
                <h4 className='fw-bold'>CITE Events</h4>
                <p>Tech Stack: HTML, CSS, JS</p>
              </li>
              <li>
                <h4 className='fw-bold'>FLAPP</h4>
                <p>Tech Stack: JAVA </p>
              </li>
              <li>
                <h4 className='fw-bold'>BOH (Be you Own Hope)</h4>
                <p>Tech Stack: BOOTSTRAP, JAVASCRIPE,PHP,C#,HTML,CSS</p>
              </li>
            </ul>
          </Col>
          <Col>
            <Projects />
          </Col>
        </Row>
        </Container>
      </motion.div>
    </AnimatePresence>
    </>
  );
};

export default Work;
