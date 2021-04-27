import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import * as containerStyles from "./midContent.module.css"


const MidContentConstruct = ({ data }) => {
    return (
        <div className={containerStyles.middle}>
            <div className={containerStyles.bigPost}>
                <div className={containerStyles.bigPostImage}>
                    <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[0].frontmatter.featuredImage)} alt="Placeholder" />
                </div>
                <div className={containerStyles.bigPostDetails}>
                    <div className={containerStyles.meta}>
                        <div className={containerStyles.category}>
                            <span>{data.allMarkdownRemark.nodes[0].frontmatter.category}</span>
                        </div>
                        <div className={containerStyles.date}>
                            <span>{data.allMarkdownRemark.nodes[0].frontmatter.date}</span>
                        </div>
                    </div>
                    <div className={containerStyles.bigPostTitle}>
                        <Link to={data.allMarkdownRemark.nodes[0].frontmatter.slug} className={containerStyles.titleLink}>
                            <h2>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h2>
                        </Link>
                    </div>
                    <div className={containerStyles.excerpt}>
                        <p>{data.allMarkdownRemark.nodes[0].frontmatter.excerpt}</p>
                    </div>
                </div>
            </div>
            <div className={containerStyles.adSpace}>
                <h5>This Ad Is In The Middle</h5>
                <p>Tagline for the middle Ad</p>
            </div>
            <div className={containerStyles.middleTwoColumnLink}>
                <div className={containerStyles.linkWrapperLeft}>
                    <div className={containerStyles.linkTitle}>
                        <Link to={data.allMarkdownRemark.nodes[1].frontmatter.slug} className={containerStyles.titleLink}>
                            <h3>{data.allMarkdownRemark.nodes[1].frontmatter.title}</h3>
                        </Link>
                    </div>
                    <div className={containerStyles.linkExcerpt}>
                        <p>{data.allMarkdownRemark.nodes[1].frontmatter.excerpt}</p>
                    </div>
                </div>
                <div className={containerStyles.linkWrapperRight}>
                    <div className={containerStyles.linkTitle}>
                        <Link to={data.allMarkdownRemark.nodes[2].frontmatter.slug} className={containerStyles.titleLink}>
                            <h3>{data.allMarkdownRemark.nodes[2].frontmatter.title}</h3>
                        </Link>
                    </div>
                    <div className={containerStyles.linkExcerpt}>
                        <p>{data.allMarkdownRemark.nodes[2].frontmatter.excerpt}</p>
                    </div>
                </div>
            </div>
            <div className={containerStyles.postOverlay}>
                <div className={containerStyles.overlayImage}>
                    <Link to={data.allMarkdownRemark.nodes[3].frontmatter.slug}>
                        <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[3].frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.overlayImage} />
                    </Link>
                </div>
                <div className={containerStyles.title}>
                    <Link to={data.allMarkdownRemark.nodes[3].frontmatter.slug} className={containerStyles.titleLink}>
                        <h3>{data.allMarkdownRemark.nodes[3].frontmatter.title}</h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function MidContent(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}) {
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

            render = {data => <MidContentConstruct data={data} {...[props]} />}
        />
    )
}