import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import { NavBar } from "../components/navbar"
import "../components/blog-post.css"

export default function Template({ data }) {
  const { markdownRemark: post } = data
  return (
    <>
    <NavBar></NavBar>
      <div className="blog-post-container">
        <div className="left-column">
          <p>hello, put images here</p>
        </div>
        <div className="right-column">
          <Helmet title={`Your Blog Name - ${post.frontmatter.title}`}/>
          <div className="blog-post">
            <h1 className="blog-title">{post.frontmatter.title}</h1>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </div>
      </div>
      
    </>
    
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`