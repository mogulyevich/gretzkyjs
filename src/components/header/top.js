import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import * as containerStyles from "./top.module.css"

export default function Top() {
    return (
        <div className={containerStyles.container}>
            <div className={containerStyles.row}>
                <div className={containerStyles.wrapper}>
                    <div className={containerStyles.topSearch}>
                        <form action="http://localhost:8000/" method="get">
                            <input type="search" name="search" id="search" placeholder="Search" />
                        </form>
                        <div className={containerStyles.searchBtn}>
                            <div>
                                <FontAwesomeIcon icon={faSearch} size="2x" className={containerStyles.searchIcon} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}