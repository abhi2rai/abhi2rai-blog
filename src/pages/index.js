import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

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
        What interests me:
        </p>
        <p>
          <ul>
            <li>
              Watching movies - avid fan of horror and thriller genre.
            </li>
            <li>
              History - does not matter which country or object. Anything that is intriguing and worth knowing about.
            </li>
            <li>
              Tech enthusiast - mobile phones, tablets, PC's, laptops, wearables etc.. Try my best to be up to date.
            </li>
          </ul>
        </p>
        <p>
          All thought and opinions are my own.
          Hoping to capture and analyze as I learn.
        </p>
        <Link to="/blog/">
          <Button margin="auto">Go to Blogs</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
