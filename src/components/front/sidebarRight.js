import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import * as containerStyles from "./sidebarRight.module.css"

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


const SidebarRightConstruct = ({ data }) => {
    const randomPosition  = randomGenerator(0, data.allMarkdownRemark.nodes.length - 1)

    return (
        <div className={containerStyles.right}>
            <div className={containerStyles.adSpace}>
                <h5>This is an Ad on The Side</h5>
                <p>It could be anything really</p>
            </div>
            <div className={containerStyles.sidePost}>
                <div className={containerStyles.sidePostImage}>
                    <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[randomPosition].frontmatter.featuredImage)} alt="Placeholder" />
                </div>
                <div className={containerStyles.content}>
                    <div className={containerStyles.meta}>
                        <div className={containerStyles.category}>
                            <span>{data.allMarkdownRemark.nodes[randomPosition].frontmatter.category}</span>
                        </div>
                        <div className={containerStyles.date}>
                            <span>{data.allMarkdownRemark.nodes[randomPosition].frontmatter.date}</span>
                        </div>
                    </div>
                    <div className={containerStyles.title}>
                        <Link to={data.allMarkdownRemark.nodes[randomPosition].frontmatter.slug} className={containerStyles.titleLink}>
                            <h3>{data.allMarkdownRemark.nodes[randomPosition].frontmatter.title}</h3>
                        </Link>
                    </div>
                    <div className={containerStyles.excerpt}>
                        <p>{data.allMarkdownRemark.nodes[randomPosition].frontmatter.excerpt}</p>
                    </div>
                </div>
            </div>
            <div className={containerStyles.listPosts}>
                <div className={containerStyles.listTitle}>
                    <h4>News</h4>
                </div>
                <div className={containerStyles.content}>
                    {data.allMarkdownRemark.edges.map(edge =>{
                        return (
                        <div className={containerStyles.post} key={edge.node.id}>
                            <div className={containerStyles.postImage}>
                                <GatsbyImage image={getImage(edge.node.frontmatter.featuredImage)} alt="Placeholder" />
                            </div>
                            <div className={containerStyles.postDetails}>
                                <div className={containerStyles.title}>
                                    <Link to={edge.node.frontmatter.slug} className={containerStyles.titleLink}>
                                        <h3>{edge.node.frontmatter.title}</h3>
                                    </Link>
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

export default function SidebarRight(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark (limit: 4) {
                        edges {
                            node {
                                frontmatter {
                                    title
                                    slug
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredImage {
                                        childImageSharp {
                                            gatsbyImageData (width: 1200, formats: WEBP, placeholder: BLURRED)
                                        }
                                    }
                                }
                                id
                            }
                        }
                        nodes {
                            frontmatter {
                                title
                                slug
                                date(formatString: "MMMM DD, YYYY")
                                category
                                excerpt
                                featuredImage {
                                    childImageSharp {
                                        gatsbyImageData (width: 1200, formats: WEBP, placeholder: BLURRED)
                                    }
                                }
                            }
                        }
                    }
                }
            `}

            render = {data => <SidebarRightConstruct data={data} {...[props]} />}
        />
    )
}