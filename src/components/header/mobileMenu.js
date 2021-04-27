import React from "react"
import { Link } from "gatsby"

import * as containerStyles from "./mobileMenu.module.css"

export default function MobileMenu() {
    return (
        <div className={containerStyles.overlay}>
            <div className={containerStyles.menuWrapper}>
                <nav>
                    <Link to="/" className={containerStyles.menuItem} activeClassName={containerStyles.active} >Home</Link>
                    <Link to="#" className={containerStyles.menuItem}>About</Link>
                    <Link to="#" className={containerStyles.menuItem}>Categories</Link>
                    <Link to="#" className={containerStyles.menuItem}>Tags</Link>
                    <Link to="#" className={containerStyles.menuItem}>Contact</Link>
                </nav>
            </div>
        </div>
    )
}