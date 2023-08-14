import React from 'react';
import { Accordion, Container} from 'react-bootstrap';
import { motion, AnimatePresence } from "framer-motion";


const Education = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity:0, y:15}}
        animate={{ opacity:1, y:0}}
        transition={{ ease: "easeOut", duration: 2}}>
        <Container>
          <h2 className='display-6 fw-bold'>My Education</h2>
          <p>These are my academic qualifications:</p>
          <Container>
          <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header><span className='fw-bold m-2'>Catablan Integrated School</span>| Year 2015</Accordion.Header>
            <Accordion.Body>
              Zone 4, Catablan Urdaneta City Pangasinan
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header><span className='fw-bold m-2'>PHINMA UPang College Urdenata</span>| Year 2019</Accordion.Header>
            <Accordion.Body>
              Mc Arthur Highway, Nancayasan, Urdaneta,Pangasinan
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='fw-bold m-2'>PHINMA University of Pangasinan</span> | Current</Accordion.Header>
            <Accordion.Body>
              28WV+R2R, Arellano St, Downtown District, Dagupan, 2400 Pangasinan
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
          </Container>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Education;
