import React from "react"

import PostColumn from "./postColumn"
import CatColumn from "./catColumn"
import ArchiveColumn from "./archiveColumn"
import CopyrightArea from "./copyright"

import * as containerStyles from "./footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={containerStyles.container}>
                <div className={containerStyles.footerBox}>
                    <div className={containerStyles.row}>
                        <PostColumn />
                        <CatColumn />
                        <ArchiveColumn />
                    </div>
                </div>
            </div>
            <CopyrightArea />
        </>
    )
}