import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import * as containerStyles from "./postColumn.module.css"

const PostColumnConstruct = ({ data }) => {
    return (
        <div className={containerStyles.left}>
            <div>
                <div className={containerStyles.title}>
                    <h3>Recomended</h3>
                </div>
                <div>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                        <div className={containerStyles.articleBox} key={edge.node.id}>
                            <div className={containerStyles.articleImage}>
                                <GatsbyImage image={getImage(edge.node.frontmatter.featuredImage)} alt="Placeholder" />
                            </div>
                            <div>
                                <div className={containerStyles.articleTitle}>
                                    <p><Link to={edge.node.frontmatter.slug}>{edge.node.frontmatter.title}</Link></p>
                                </div>
                                <div className={containerStyles.date}>
                                    <span>{edge.node.frontmatter.date}</span>
                                </div>
                            </div>
                        </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default function PostColumn(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark(limit: 3) {
                        edges {
                            node {
                                frontmatter {
                                    title
                                    slug
                                    date(formatString: "MMMM DD, YYY")
                                    featuredImage {
                                        childImageSharp {
                                            gatsbyImageData (width: 1200, formats: WEBP, placeholder: BLURRED)
                                        }
                                    }
                                }
                                id
                            }
                        }
                    }
                }
            `}

            render = {data => <PostColumnConstruct data={data} {...props} />}
        />
    )
}