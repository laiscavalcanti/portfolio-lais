/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { RiArrowRightSLine, RiLinkedinBoxFill, RiSpotifyFill, RiTelegramFill, RiGithubFill, RiMessage3Fill } from "react-icons/ri"

import Layout from "../components/layout"

import CaseListHome from "../components/case-list-home"
import Seo from "../components/seo"
import Icons from "../util/socialmedia.json"


export const pageQuery = graphql`
  query HomeQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        salutation
        title
        tagline
        featuredImage {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 485, height: 600)
          }
        }
        cta {
          ctaText
          ctaLink
        }
      }
    }
   
    cases: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { template: { eq: "case-post" } } }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featuredImage {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 345, height: 260)
              }
            }
          }
        }
      }
    }
  }
  
`

const HomePage = ({ data }) => {
  const { markdownRemark, posts, cases } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const Image = frontmatter.featuredImage
    ? frontmatter.featuredImage.childImageSharp.gatsbyImageData
    : ""
  const sIcons = Icons.socialIcons.map((icons, index) => {
    return (
      <div key={"social icons" + index}>
     
        {icons.icon === "linkedin" ? (
          <Link to={icons.url} target="_blank">
            <RiLinkedinBoxFill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "github" ? (
          <Link to={icons.url} target="_blank">
            <RiGithubFill />
          </Link>
        ) : (
          ""
        )}
           {icons.icon === "email" ? (
          <Link to={icons.url} target="_blank">
            <RiMessage3Fill />
          </Link>
        ) : (
          ""
        )}
        {icons.icon === "telegram" ? (
          <Link to={icons.url} target="_blank">
            <RiTelegramFill />
          </Link>
        ) : (
          ""
        )}
           {icons.icon === "spotify" ? (
          <Link to={icons.url} target="_blank">
            <RiSpotifyFill />
          </Link>
        ) : (
          ""
        )}
    
     
      </div>
    )
  })
  return (
    <Layout>
      <Seo />
      <div className="home-banner grids col-1 sm-2">
        <div className="container-cover">
        <h1 className="title hover">{frontmatter.salutation}</h1>
          <h1 className="title">{frontmatter.title}</h1>
          <p
            className="tagline"
            sx={{
              color: "inputBorder",
            }}
          >
            {frontmatter.tagline}
          </p>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: html }}
            sx={{
              color: "accent",
            }}
          />
         <Link
            to={frontmatter.cta.ctaLink}
            className="button"
            sx={{
              variant: "variants.button",
            }}
          >
            {frontmatter.cta.ctaText}
            <span className="icon -right">
              <RiArrowRightSLine />
            </span>
          </Link>
          <div
            className="social-icons"
            sx={{
              variant: "variants.socialIcons",
            }}
          >
            {sIcons}
          </div>
        </div>
        <div>
        <div className="background" ></div>
          {Image ? (   
            <GatsbyImage
              image={Image}
              alt={frontmatter.title + " - Featured image"}
              className="featured-image"
            />
          ) : (
            ""
          )}
        </div>
      </div>
      <CaseListHome data={cases} />
     
    </Layout>
  )
}

export default HomePage
