import React from 'react'
import Layout from '../components/layout'
import { graphql} from 'gatsby'
import Head from '../components/head'



export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                title
                date
            }
            html
        }       
    }
`
const Blog = (props) => {
    return (
        <Layout>
            <Head title = "blog"/>
            <h1> { props.data.markdownRemark.frontmatter.title}</h1>
            <p1> { props.data.markdownRemark.frontmatter.date}</p1>
            <div dangerouslySetInnerHTML = {{ __html: props.data.markdownRemark.html}}></div>

        </Layout>

    )
}
export default Blog