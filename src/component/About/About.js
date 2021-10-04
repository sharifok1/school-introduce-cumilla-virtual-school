import React from 'react';
import { Accordion } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div className="mb-4">
            <div className="about-point">
                {/* about page description------------
                ----------------------------------------- */}
        <h2>Our Vision</h2>
        <li> {'>'} To enable the students to learn and lead in academic frontier.</li>
        <li> {'>'} To inculcate the seedlings of humanitarian values and ideal citizens.</li>
        <li> {'>'} To be a distinctive and successful college in terms of success in pubic examinations.</li>
        <li> {'>'} To enhance the potential of the students to the fullest by systematically exploring their latent talents.</li>
        <li> {'>'} To transform the art of teaching to a level where acquiring knowledge, both academic and practical, becomes a habit for the students.</li>
        <li> {'>'} To develop students to be independent learners.</li>
        <li> {'>'} To develop committed, high performing teaching faculties.</li>
        </div>
        <div className="space">
            <h2 className="about-school">Cumilla Virtual  School</h2>
            <h4>ADVISER'S MESSAGE</h4>
            <Accordion>
  <Accordion.Item eventKey="1"className="accordion">
    <Accordion.Header className="accordion">Welcome to Cumilla Ideal School. We, being backed...</Accordion.Header>
    <Accordion.Body className="accordion">
     up by a number of specialist teaching staff and excellent facilities and resources, offer a wide range of courses in the school. Ours is a non-profitable organization established by the MNRS TRUST. Now, it is run by a Board of Governors approved by the Board of primary Education, Dhaka under the Ministry of Education, Government of the People’s Republic of Bangladesh. The institution, growing from a Kindergarten to a Junior School now emerged as a leading Secondary School of Bangladesh. Since inception, the institute has been enjoying a proud record of academic excellence and innovations. Over the years, it has generated a significant number of employments of qualified academicians, administrators and a set of dynamic staff.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
        <div className="important-link">
           <h3>Important Link</h3>
           <a href="http://www.educationboard.gov.bd/">Education Board Bangladesh</a> 
           <a href="http://dhakaeducationboard.portal.gov.bd/">Dhaka Education Borad</a> 
           <a href="http://www.nctb.gov.bd/">National Curriculum & Textbook Board</a> 
           <a href="http://www.dpe.gov.bd/">Directorate of primary education</a> 
           <a href="https://www.du.ac.bd/">University of Dhaka</a> 
           <a href="http://www.naem.gov.bd/">National Academy for Educational Management</a> 
        </div>
        </div>
    );
};

export default About;