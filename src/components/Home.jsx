import React from 'react';
import { Operation } from './home/Operation';
import { Testimonial } from './home/testimonial';
import { Services } from './home/section4_services';
import { Section_1 } from './home/section_1';
import { Section_2 } from './home/section_2';
import { Section_3 } from './home/section_3';

const Home = () => {
  return (
  <div className='home-main'>
    <Section_1 />
    <Section_2 />
    <Section_3 />
    <Services />
    <Operation />
    <Testimonial />
    

  </div>
  )
}

export default Home