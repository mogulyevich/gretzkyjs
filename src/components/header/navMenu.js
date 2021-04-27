import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as containerStyles from "./navMenu.module.css"

export default function NavMenu() {
    return (
        <>
            <div className={containerStyles.header}>
                <div className={containerStyles.headerWrapper}>
                    <div className={containerStyles.headerBox}>
                        <div className={containerStyles.row}>
                            <div className={containerStyles.logoWrapper}>
                                <div className={containerStyles.logo}>
                                    <div className={containerStyles.logoImage}>
                                        <Link to="/">
                                            <StaticImage src="../../images/logo.png" alt="logo" className={containerStyles.housEdge} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className={containerStyles.menuWrapper}>
                                <div className={containerStyles.burgerMenu}>
                                    <span className={containerStyles.burgerInner}></span>
                                </div>
                                <div className={containerStyles.menu}>
                                    <nav>
                                        <Link to="/" activeClassName={containerStyles.active} className={containerStyles.menuItem}>Home</Link>
                                        <Link to="#" className={containerStyles.menuItem}>About</Link>
                                        <Link to="#" className={containerStyles.menuItem}>Categories</Link>
                                        <Link to="#" className={containerStyles.menuItem}>Tags</Link>
                                        <Link to="#" className={containerStyles.menuItem}>Contact</Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}