import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as containerStyles from "./ctaBottom.module.css"

const CtaBottomConstruct = ({ data }) => {
    return (
        <div>
            <div className={containerStyles.callToAction}>
                <h3>HousEdge - The House Always Wins!</h3>
            </div>
            <div className={containerStyles.featuredArticles}>
                <div className={containerStyles.wrapper}>
                    <div className={containerStyles.mainTitle}>
                        <h4>Featured</h4>
                    </div>
                    <div className={containerStyles.boxed}>
                        <div className={containerStyles.grid}>
                        {data.allMarkdownRemark.edges.map(edge => {
                            return (
                                <div className={containerStyles.article} key={edge.node.id}>
                                    <div className={containerStyles.articleImage}>
                                        <GatsbyImage image={getImage(edge.node.frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.image} />
                                    </div>
                                    <div className={containerStyles.content}>
                                        <div className={containerStyles.meta}>
                                            <div className={containerStyles.category}>
                                                <span>{edge.node.frontmatter.category}</span>
                                            </div>
                                            <div className={containerStyles.date}>
                                                <span>{edge.node.frontmatter.date}</span>
                                            </div>
                                        </div>
                                        <div className={containerStyles.articleTitle}>
                                            <Link to={edge.node.frontmatter.slug} className={containerStyles.titleLink}>
                                                <h2>{edge.node.frontmatter.title}</h2>
                                            </Link>
                                        </div>
                                        <div className={containerStyles.excerpt}>
                                            <p>{edge.node.frontmatter.excerpt}</p>
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
    )
}

export default function CtaBottom(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark(limit: 3) {
                        edges {
                            node {
                                frontmatter {
                                    category
                                    date(formatString: "MMMM DD, YYYY")
                                    excerpt
                                    title
                                    slug
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

            render = {data => <CtaBottomConstruct data={data} {...props} />}
        />
    )
}

CtaBottomConstruct.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.shape({
                node: PropTypes.shape({
                    frontmatter: PropTypes.shape({
                        category: PropTypes.string.isRequired,
                        date: PropTypes.string.isRequired,
                        excerpt: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired,
                        slug: PropTypes.string.isRequired,
                        featuredImage: PropTypes.string.isRequired,
                    }).isRequired,
                    id: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}