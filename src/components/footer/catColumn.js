import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import * as containerStyles from "./catColumn.module.css"

const CatColumnConstruct = ({ data }) => {
    return (
        <div className={containerStyles.middle}>
            <div className={containerStyles.wrapper}>
                <div className={containerStyles.title}>
                    <h3>Categories</h3>
                </div>
                <ul>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li key={edge.node.id}><Link to="#" className={containerStyles.menuItem}>{edge.node.frontmatter.category}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default function CatColumn(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark(limit: 5) {
                        edges {
                            node {
                                frontmatter {
                                    category
                                }
                                id
                            }
                        }
                    }
                }
            `}

            render = {data => <CatColumnConstruct data={data} {...props} />}
        />
    )
}