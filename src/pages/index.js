import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogList from "../components/blog-list"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "abhi2rai"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `abhi2rai`, `developer`]}
        />
        <h1>
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my personal page!</p>
        <p>
          My name is Abhishek Rai. Living and working in Greater New York area. Did my Bachelors from <a href="http://ipu.ac.in" target="_blank" rel="noopener noreferrer">GGSIPU</a> and Masters from <a href="https://www.stonybrook.edu" target="_blank" rel="noopener noreferrer">Stony Brook University</a>. Working professionally as a Software Engineer since 2013.
        </p>
        <p>
          All thoughts and opinions are my own.
        </p>
        <BlogList/>
      </Layout>
    )
  }
}

export default IndexPage
