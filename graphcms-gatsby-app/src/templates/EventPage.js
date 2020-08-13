import React from "react"
import { graphql } from "gatsby"

const EventPage = ({
  data: {
    graphCMS: { event },
  },
}) => (
  <div>
    <h1>{event.title}</h1>
  </div>
)

export const pageQuery = graphql`
  query EventPageQuery($id: ID!) {
    graphCMS {
      event(where: { id: $id }) {
        title
        description{
          html
        }
      }
    }
  }
`

export default EventPage
