import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Abhishek Rai's personal blog"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Abhishek Rai's personal blog"
          keywords={[`blog`, `abhi2rai`, `developer`]}
        />
        <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal blog page!</p>
        <p>
          All thought and opinions are my own.
          Hoping to capture and analyze as I learn.
        </p>
        <p>Let's go discover something!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
