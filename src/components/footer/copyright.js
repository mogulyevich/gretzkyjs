import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import * as containerStyles from "./copyright.module.css"

export default function CopyrightArea() {
    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.copyright}>
                <div className={containerStyles.copyrightBox}>
                    <div className={containerStyles.row}>
                        <div className={containerStyles.copyrightWrapper}>
                            <div>
                                <StaticImage src="../../images/icon-white.png" alt="logo" className={containerStyles.copyrightLogo} />
                            </div>
                            <div className={containerStyles.copyrightText}>
                                <span>© housedge.ro 2021. Created with <a href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">Gatsby JS</a>. Inspired by <a href="https://themeous.net/maxi/" target="_blank" rel="noreferrer">Maxi Wordpress Theme</a>.</span>
                            </div>
                        </div>
                        <div className={containerStyles.fooMenuWrapper}>    
                            <div className={containerStyles.fooMenu}>
                                <nav>
                                    <Link to="#" className={containerStyles.menuItem}>Privacy Policy</Link>
                                    <Link to="#" className={containerStyles.menuItem}>Terms & Conditions</Link>
                                    <Link to="#" className={containerStyles.menuItem}>GDPR</Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}