import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import * as containerStyles from "./archiveColumn.module.css"

const ArchiveColumnConstruct = ({ data }) => {
    return (
        <div className={containerStyles.right}>
            <div className={containerStyles.wrapper}>
                <div className={containerStyles.title}>
                    <h3>Archives</h3>
                </div>
                <ul>
                    {data.allMarkdownRemark.edges.map(edge => {
                        return (
                            <li key={edge.node.id}><Link to="#" className={containerStyles.menuItem}>{edge.node.frontmatter.date}</Link></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default function ArchiveColumn(props) {
    return (
        <StaticQuery 
            query = {graphql`
                query {
                    allMarkdownRemark(limit: 5) {
                        edges {
                            node {
                                frontmatter {
                                    date(formatString: "MMMM YYYY")
                                }
                                id
                            }
                        }
                    }
                }
            `}

            render = {data => <ArchiveColumnConstruct data={data} {...props} />}
        />
    )
}