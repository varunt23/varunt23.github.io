import React from "react"
import { Link } from "gatsby"
import Head from '../components/head'
import Layout from "../components/layout"
import logo from './headshot.jpg';
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
                </div>
            </div>
        </Layout>
    )
}


export default IndexPage