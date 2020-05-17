import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'
import Layout from "../components/layout"
import logo from './headshot.jpg';
import git from './github.png';
import linkedin from './linkedin.svg';

import homeStyles from "./index.module.scss"

const IndexPage = () => {
    return (

        <Layout>
            <Head title="Home"></Head>

            <div>
                <p className={homeStyles.profile}><img src={logo} className={homeStyles.image} alt="Logo" /></p>
                <div>
                    <h2 className = {homeStyles.header}>Welcome!</h2>
                    <p className={homeStyles.about}>I am a senior at the <b>University of North Carolina at Chapel Hill</b> studying <b>Computer science</b> and <b>Statistics</b>. <br/> <br/>My areas of interest include  data science, distributed systems, cloud technologies and machine learning. In my free time I like playing basketball and tennis, coding and traveling.</p>
                    <div>
                        <a href = "https://github.com/varunt23/" className = {homeStyles.github} target="_blank"><img  className = {homeStyles.logos} img border="1" alt="Github" src= {git} width="75" height="75"></img></a>
                        
                        <a href = "https://www.linkedin.com/in/varun-tanna/" target="_blank"><img className = {homeStyles.logos} img border="0" alt="LinkedIn" src= {linkedin} width="75" height="75"></img></a>

                    </div>
                </div>
                
            </div>
        </Layout>
    )
}


export default IndexPage