import React from "react"
import {graphql, useStaticQuery} from "gatsby"

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                    author
                }
            }
        }
    `)
    return (
        <footer>
            <p> Creater by {data.site.siteMetadata.author}, 2020 </p>
        </footer>

    )
}

export default Footer