import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { fadeIn, textVariant } from '../util/motion';
import { services } from '../constants';


const ServiceCard = ({ title, icon, index }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} 
            className='w-16 h-16 object-contain'
          />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a Full-Stack Developer specializing in the MERN stack, I am proficient in ReactJS, NodeJS, Express, and MongoDB. My technical
        skills extend to Java, JavaScript, HTML5, CSS, PostgreSQL, Scored by certifications in Oracle SQL, ReactJS, Redux and Web
        Development. I've developed projects like Yash Blogs and Travellify, showcasing my skills in creating dynamic, user-friendly
        applications. My participation in hackathons, such as Ace Hack 3.0, highlights my teamwork and problem-solving abilities. I actively
        engage in industry seminars and workshops, such as the GDSC WOW event, to stay current with technological trends.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default About