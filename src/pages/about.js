import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Head from '../components/head'



const AboutPage = () => {
    return (
        <Layout>
            <Head title = "About"></Head> 
            <h1>About Me</h1>
            <h2>Varun Tanna</h2>
            <p> Contact me at <Link to = "/contact">  Contact here</Link></p>
        </Layout>
           
       
    )
}


export default AboutPage