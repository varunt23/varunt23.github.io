import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'
import resumeStyles from "./resume.module.scss"
import pic from './download.png';
import resume from './secondresume.pdf';



const AboutPage = () => {
    return (
        <Layout>
            <Head title="Resume"></Head>
            <div className={resumeStyles.cont} ><h2 className={resumeStyles.mainheader} >View Resume Here or Download Now - </h2><a href={resume} download><img className={resumeStyles.image} alt="LinkedIn" src={pic} width="30" height="30"></img></a></div>
            <ul className={resumeStyles.posts}>
                <li className={resumeStyles.post}>
                    <div>
                        <h3>Education</h3>
                        <br />
                        <h5>University of North Carolina at Chapel Hill - May 2021</h5>
                        <p><b><i>Bachelors of Science in Computer Science and Statistics</i></b></p>
                        <p><b>Courses: </b> Data Structures, Algorithms, Computer Organization, Files and Databases, Web Development, Data Science, Machine Learning, Distributed Systems</p>
                        <p><b>Clubs: </b> UNC Dev-App, Carolina Analytics and Data Science,  CS +Social Good, Product Management Club</p>
                        <br />
                        <h5>South Iredell High School - May 2017</h5>
                        <p><b><i>I.B Diploma Awarded</i></b></p>
                    </div>
                </li>
                <li className={resumeStyles.post}>
                    <div>
                        <h3>Work Experience</h3>
                        <br />
                        <h5>Sofware Toolsmith Developer at UNC Department of Computer Science: (Mar 2020 - Present)</h5>
                        <p>Worked on a seat assignment application for college classes using Python, JS and Flask.Fully tested application using Cypress and completed CI integration with GitLab.</p>
                        <br />
                        <h5>Software Engineering Intern at Fidelity Investments: (May 2019 - Aug 2019)</h5>
                        <p>Produced a fully secure XML/JSON parser using Spring MVC and implemented it in a QA tool used by Fidelity Brokerage Technology, which tracked and fabricated messages on an IBM messaging queue(MQ).
                        Sped up client interaction during monetary transactions by completing migration of a message processor using multiple IBM MQ’s, and SOAP requests to streamline processing of incoming messages.
                        Tested and ensured accurate message handling using Splunk to track message flow.
                        </p>
                        <br />
                        <h5>Teaching Assistant at UNC Department of Computer Science: (Aug 2018 - May 2019)</h5>
                        <p>Create lesson plans and taught recitation classes of 20+ students with emphasis on OOP in JAVA
                        Lead interactive tutoring sessions, proctored exams, and provided valuable assignment feedback.
                        Host office hours for 400+ students to explain JAVA programming concepts and assignments.
                        </p>
                    </div>
                </li>
                <li className={resumeStyles.post}>
                    <div>
                        <h3>Skills</h3>
                        <br/>
                        <p><b>Languages: </b> Java, Python, Javascript, HTML/CSS, R, SQL, Dart</p>
                        <p><b>Technologies: </b> Git, Firebase, Splunk, Tableau, IBM WebSphere, Earth Engine, Flask, GraphQL, Cypress, Docker</p>


                    </div>
                </li>
            </ul>
        </Layout>


    )
}


export default AboutPage