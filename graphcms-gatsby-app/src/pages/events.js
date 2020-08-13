import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const pageQuery = graphql`
  {
    graphCMS {
      events {
        id
        title
        slug
      }
    }
  }
`

const Events = () => {
  const {
    graphCMS: { events },
  } = useStaticQuery(pageQuery)

  return (
    <Layout>
      <SEO title="Events List" />
      <h1>Welcome to the Events List</h1>
      <Link to="/">Go back to the homepage</Link>
      {events.map(event => (
        <Link key={event.id} to={`/events/${event.slug}`}>{event.title}</Link>
      ))}
    </Layout>
  )
}

export default Events
