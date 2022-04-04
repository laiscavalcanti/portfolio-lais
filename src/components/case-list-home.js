/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiArrowDownLine, RiArrowRightSLine } from "react-icons/ri"

import CaseCard from "./case-card"

export default function CaseListHome(props) {
  const data = props.data
  const cases = data.edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <CaseCard key={edge.node.id} data={edge.node} />)
  return <PostMaker data={cases} />
}

const PostMaker = ({ data }) => (
  <section className="home-cases">
    <h2>
      Últimos <strong>Cases</strong>{" "}
      <span className="icon -right">
        <RiArrowDownLine />
      </span>
    </h2>
    <div className="grids col-1 sm-2 lg-3">{data}</div>
    <Link
      className="button"
      to="/case"
      sx={{
        variant: "variants.button",
      }}
    >
      Veja mais
      <span className="icon -right">
        <RiArrowRightSLine />
      </span>
    </Link>
  </section>
)
