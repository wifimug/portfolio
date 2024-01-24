import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql, withPrefix } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const IndexPage = ({data}) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <>
      
      <Layout>
  
      <div className="columns-container">
        <div className="left-container">
          <StaticImage src="../images/yding.jpg" alt="Creator of this site" className="profile-pic"/>
          <div className="left-container-txt">
            <p>
              A collection of projects made by Barbara Ding -
              MSc Software Systems Engineering graduate from UCL.
            </p>
          </div>
        </div>
        <div className="right-container">
          <div className="right-container-txt">
          
            <h3>Favourites ♡</h3>
            <div className="blog-posts-container">
              <div className="blog-posts">
              {posts
                .filter(post => post.node.frontmatter.featured === true)
                .map(({ node: post }) => {
                  return (
                    <div className="blog-post-preview" key={post.id}>
                      <Link to={post.frontmatter.path}>
                        <div className="blog-post-image-container">
                          <GatsbyImage image={withPrefix(getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData))} className="post-icon" alt="image"/>
                        </div>
                        <div className="blog-content-container"> 
                          <h1>
                            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                          </h1>
                        <div className="tech-pills">
                          {post.frontmatter.skills.map((item, index) => {
                            return <p className="pill"> {item} </p>
                          })}
                        </div>
                          
                        <p>{post.excerpt}</p>
                        </div>
                        
                      </Link>
                    </div>                    
                  )
                })}
                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lower-page-container">
        <div className="down-arrow-container">
          <div className="down-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor" className="down-arrow-svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
      
      
        <h2 className="tech-stack-title"> Tech Stack</h2>
          <div className="tech-stack-container">
            <div className="tech-stack-flex-item">
              <div className="languages-list">
                <h3>Languages</h3>
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>JavaScript</li>
                  <li>Ruby</li>
                  <li>Haskell</li>
                  <li>Flutter</li>
                  <li>TypeScript</li>
                </ul>
              </div>
            </div>
            <div className="tech-stack-flex-item">
              <div className="devtools-list">
                <h3>Dev Tools</h3>
                <ul>
                  <li>Google Cloud Platform (GCP)</li>
                  <li>Amazon Web Services (AWS)</li>
                  <li>Git</li>
                  <li>Jira</li>
                  <li>Confluence</li>
                  <li>Docker</li>
                </ul>
              </div>
            </div>

            <div className="tech-stack-flex-item">
              <div className="skills-list">
                <h3>Skills</h3>
                <ul>
                  <li>English</li>
                  <li>Chinese - Mandarin</li>
                  <li>Cooking</li>
                  <li>Digital Art</li>
                  <li>Piano</li>
                  <li>Violin</li>
                  <li>Sleeping</li>
                </ul>
              </div>
            </div>
          </div>
      </div>

      {/* <div className="projects-page-container">
        <h2> Projects </h2>
        <div className="projects-container">
          <div className="projects">
          {posts
                .map(({ node: post }) => {
                  return (
                    <div className="blog-post-preview" key={post.id}>
                      <Link to={post.frontmatter.path}>
                        <div className="blog-post-image-container">
                          <GatsbyImage image={withPrefix(getImage(post.frontmatter.thumbnail?.childImageSharp?.gatsbyImageData))} className="post-icon" alt="image"/>
                        </div>
                        <div className="blog-content-container"> 
                          <h1>
                            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                          </h1>
                        <div className="tech-pills">
                          {post.frontmatter.skills.map((item, index) => {
                            return <p className="pill"> {item} </p>
                          })}
                        </div>
                          
                        <p>{post.excerpt}</p>
                        </div>
                        
                      </Link>
                    </div>                    
                  )
                })}
            
          </div> */}

        {/* </div>
      </div> */}

      </Layout>
    </>
  )
}


export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            date
            path
            skills
            featured
            thumbnail {
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
