import * as React from "react"
import { NavBar } from "../components/navbar"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { GatsbyImage, getImage } from "gatsby-plugin-image"



const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
      
      <NavBar></NavBar>
      <Layout>
  
      <div class="columns-container">
        <div class="left-container">
          <StaticImage src="../images/yding.jpg" alt="Creator of this site" class="profile-pic"/>
          <div class="left-container-txt">
            <p>
              A collection of projects made by Yaxin Ding -
              MSc Software Systems Engineering graduate from UCL.
            </p>
          </div>
        </div>
        <div class="right-container">
          <div class="right-container-txt">
          
            <h3>Favourites ♡<FontAwesomeIcon icon="fa-solid fa-thumbtack" /></h3>
            <div className="blog-posts-container">
              <div className="blog-posts">
              {posts
                .filter(post => post.node.frontmatter.title.length > 0)
                .map(({ node: post }) => {
                  return (
                    <div className="blog-post-preview" key={post.id}>
                      <div class="blog-post-image-container">
                      <StaticImage src={post.frontmatter.thumbnail.childImageSharp.gatsbyImageData.images.src} class="post-icon"/>
                      <GatsbyImage image={getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData)} class="post-icon"/>
                      </div>
                      <div className="blog-content-container"> 
                      <h1>
                        <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                      </h1>
                      <div class="tech-pills">
                        {post.frontmatter.skills.map((item, index) => {
                          return <p class="pill"> {item} </p>
                        })}
                      </div>
                        
                      <p>{post.excerpt}</p>
                    </div>
                      </div>                    
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      </Layout>
    </>
  )
}


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date
            path
            skills
            thumbnail{
              childImageSharp {
                gatsbyImageData(width: 800)
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage

export const Head = () => <title>Home Page</title>
