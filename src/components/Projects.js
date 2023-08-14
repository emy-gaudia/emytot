import React from 'react'
import { Carousel, Image } from 'react-bootstrap';

const Projects = () => {
  return (
    <Carousel className='d-flex w-100'>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/cite.png" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>CUTE Events</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/flapp.png" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>FLAPP</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className='project-image'>
            <Image src="/mentalhealth.png" className='w-100 h-100 object-fit-cover' fluid/>
          </div>
          <Carousel.Caption>
            <h3 className='bg-dark rounded'>Mental Health</h3>
          </Carousel.Caption>
      </Carousel.Item>
  </Carousel>
  )
}

export default Projects
