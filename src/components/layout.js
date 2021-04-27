import React from "react"

import * as containerStyles from "./layout.module.css"

import Header from "./header/header"
import Footer from "./footer/footer"

export default function Layout({ children }) {
    return (
    <div className={containerStyles.wrapper}>
        <Header />
        {children}
        <Footer />
    </div>
    )
}