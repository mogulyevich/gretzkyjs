import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import * as containerStyles from "./topSlider.module.css"

const TopSliderConstruct = ({ data }) => {
    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.wrapper}>
                <div className={containerStyles.bigSlide}>
                    <div>
                        <div className={containerStyles.overlayLink}>
                            <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[0].frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.bigPostImage} />
                        </div>
                        <div className={containerStyles.meta}>
                            <div className={containerStyles.metaBox}>
                                <div className={containerStyles.category}>
                                    <span>{data.allMarkdownRemark.nodes[0].frontmatter.category}</span>
                                </div>
                                <div className={containerStyles.title}>
                                    <Link to={data.allMarkdownRemark.nodes[0].frontmatter.slug} className={containerStyles.titleLink}>
                                        <h2>{data.allMarkdownRemark.nodes[0].frontmatter.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={containerStyles.smallSlides}>
                    <div className={containerStyles.horizontalPost}>
                        <div className={containerStyles.overlayLink}>
                            <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[1].frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.horizontalPostImage} />
                        </div>
                        <div className={containerStyles.meta}>
                            <div className={containerStyles.metaBox}>
                                <div className={containerStyles.category}>
                                    <span>{data.allMarkdownRemark.nodes[1].frontmatter.category}</span>
                                </div>
                                <div className={containerStyles.title}>
                                    <Link to={data.allMarkdownRemark.nodes[1].frontmatter.slug} className={containerStyles.titleLink}>
                                        <h2>{data.allMarkdownRemark.nodes[1].frontmatter.title}</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={containerStyles.boxedPosts}>
                        <div className={containerStyles.boxedLeft}>
                            <div className={containerStyles.overlayLink}>
                                <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[2].frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.boxedPostImage} />
                            </div>
                            <div className={containerStyles.meta}>
                                <div className={containerStyles.metaBox}>
                                    <div className={containerStyles.category}>
                                        <span>{data.allMarkdownRemark.nodes[2].frontmatter.category}</span>
                                    </div>
                                    <div className={containerStyles.title}>
                                        <Link to={data.allMarkdownRemark.nodes[2].frontmatter.slug} className={containerStyles.titleLink}>
                                             <h2>{data.allMarkdownRemark.nodes[2].frontmatter.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={containerStyles.boxedRight}>
                            <div className={containerStyles.overlayLink}>
                                <GatsbyImage image={getImage(data.allMarkdownRemark.nodes[3].frontmatter.featuredImage)} alt="Placeholder" className={containerStyles.boxedPostImage} />
                            </div>
                            <div className={containerStyles.meta}>
                                <div className={containerStyles.metaBox}>
                                    <div className={containerStyles.category}>
                                        <span>{data.allMarkdownRemark.nodes[3].frontmatter.category}</span>
                                    </div>
                                    <div className={containerStyles.title}>
                                        <Link to={data.allMarkdownRemark.nodes[3].frontmatter.slug} className={containerStyles.titleLink}>
                                            <h2>{data.allMarkdownRemark.nodes[3].frontmatter.title}</h2>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TopSlider(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
                        nodes {
                            frontmatter {
                                category
                                slug
                                title
                                featuredImage {
                                    childImageSharp {
                                        gatsbyImageData(formats: WEBP, width: 1200, placeholder: BLURRED)
                                    }
                                }
                            }
                        }
                    }
                }
            `}

            render={data => < TopSliderConstruct data={data} {...props} />}
        />
    )
}

TopSliderConstruct.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            nodes: PropTypes.shape({
                frontmatter: PropTypes.shape({
                    category: PropTypes.string.isRequired,
                    slug: PropTypes.string.isRequired,
                    title: PropTypes.string.isRequired,
                    featuredImage: PropTypes.string.isRequired,
                }).isRequired,
            }).isRequired,
        }).isRequired,
    }).isRequired,
}