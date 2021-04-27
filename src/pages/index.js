import React from "react"

import Layout from "../components/layout"
import TopSlider from "../components/front/topSlider"
import CtaBottom from "../components/front/ctaBottom"
import MidContent from "../components/front/midContent"
import SidebarLeft from "../components/front/sidebarLeft"
import SidebarRight from "../components/front/sidebarRight"

import SEO from "../components/seo"

import * as containerStyles from "./index.module.css"

export default function Home() {
  return (
    <Layout>
    <SEO title="The Grand Homepage" description="This is the homepage of the GretzkyJS magazine/news website created with GatsbyJS." />
      <TopSlider />
      <div className={containerStyles.boxed}>
        <div className={containerStyles.grid}>
          <div className={containerStyles.row}>
            <div className={containerStyles.columns}>
              <SidebarLeft />
              <MidContent />
              <SidebarRight />
            </div>
          </div>
        </div>
      </div>
      <CtaBottom />
    </Layout>
  )
}
