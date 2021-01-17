import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

function BlogList(){
    return (
        <StaticQuery
            query={dataQuery}
            render={data => {
                const posts = data.allMdx.edges
                return (
                    <div style={
                        {
                            marginLeft: `auto`,
                            marginRight: `auto`
                        }}>
                    {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <div key={node.fields.slug}>
                        <h3
                            style={{
                                marginBottom: rhythm(1 / 4),
                            }}
                        >
                        <Link
                            style={{ boxShadow: `none` }}
                            to={`/blog${node.fields.slug}`}
                        >
                        {title}
                        </Link>
                        </h3>
                        <small>{node.frontmatter.date}</small> | <small>{node.timeToRead} minute read</small>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: node.excerpt,
                            }}
                        />
                        </div>
                    )
                })}
            </div>
             )}}
        />
    )
}

export default BlogList

export const dataQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
          timeToRead
        }
      }
    }
  }
`
