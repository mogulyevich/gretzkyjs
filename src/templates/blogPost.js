import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

import SEO from "../components/seo"

import * as containerStyles from "./blogPost.module.css"

import Layout from "../components/layout"
import CtaBottom from "../components/front/ctaBottom"

export default function BlogPost({ data }) {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    const image = getImage(markdownRemark.frontmatter.featuredImage)

    return (
        <Layout>
            <SEO title={frontmatter.title} description={frontmatter.excerpt} />
            <div className={containerStyles.container}>
                <div className={containerStyles.wrapper}>
                    <div className={containerStyles.row}>
                        <div className={containerStyles.article}>
                            <div className={containerStyles.title}>
                                <h1>{frontmatter.title}</h1>
                            </div>
                            <div className={containerStyles.postImage}>
                                <GatsbyImage image={image} alt="Placeholder" className={containerStyles.postImageItem} />
                            </div>
                            <div className={containerStyles.postContent} dangerouslySetInnerHTML={{ __html: html }} />
                            <div className={containerStyles.postMeta}>
                                <div className={containerStyles.meta}>
                                    <div className={containerStyles.author}>
                                        <span>{frontmatter.author}</span>
                                    </div>
                                    <div className={containerStyles.date}>
                                        <span>{frontmatter.date}</span>
                                    </div>
                                    <div className={containerStyles.category}>
                                        <span>{frontmatter.category}</span>
                                    </div>
                                </div>
                                <div className={containerStyles.share}>
                                    <div class={containerStyles.shareTitle}>
                                        <h3>Share</h3>
                                    </div>
                                    <div className={containerStyles.shareIcons}>
                                        <FontAwesomeIcon icon={faFacebookSquare} className={containerStyles.awesomeIcons} />
                                        <FontAwesomeIcon icon={faTwitterSquare} className={containerStyles.awesomeIcons} />
                                    </div>
                                </div>
                            </div>
                            <div className={containerStyles.relatedPosts}>
                                <div className={containerStyles.title}>
                                    <h5>Read More</h5>
                                </div>
                                <div className={containerStyles.grid}>
                                    {data.allMarkdownRemark.edges.map(edge => {
                                        return (
                                        <div className={containerStyles.postItem} key={edge.node.id}>
                                            <div className={containerStyles.postItemImage}>
                                                <GatsbyImage image={getImage(edge.node.frontmatter.featuredImage)} alt="Placeholder" />
                                            </div>
                                            <div className={containerStyles.innerBox}>
                                                <div className={containerStyles.relatedTitle}>
                                                    <Link to={edge.node.frontmatter.slug} className={containerStyles.titleLink}>
                                                        <h4>{edge.node.frontmatter.title}</h4>
                                                    </Link>
                                                </div>
                                                <div className={containerStyles.relatedDate}>
                                                    <span>{edge.node.frontmatter.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>         
            <CtaBottom />
        </Layout>
    )
}

export const pageQuery = graphql`
    query($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                slug
                title
                author
                category
                excerpt
                featuredImage {
                    childImageSharp {
                        gatsbyImageData (
                            width: 1200
                            placeholder: BLURRED
                            formats: [AUTO, WEBP]
                        )
                    }
                }
            }
        }
        allMarkdownRemark (limit: 3) {
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
        }
    }
`