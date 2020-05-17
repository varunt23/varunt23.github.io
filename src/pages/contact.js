import React from "react"
import {Link} from "gatsby"
import Head from '../components/head'


import Layout from "../components/layout"

const ContactPage = () => {
    return (
        <Layout>
            <Head title = "Contact"></Head>
            <h1>Contact</h1>
            <h2>Varun Tanna</h2>
            <p> <a href="https://github.com/varunt23/"> Github </a></p>
        </Layout>
    )
}


export default ContactPage