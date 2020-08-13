exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      graphCMS: { events },
    },
  } = await graphql(`
    {
      graphCMS {
        events {
          id
          title
          slug
        }
      }
    }
  `)

  events.forEach(({ id, slug }) =>
    createPage({
      path: `/events/${slug}`,
      component: require.resolve(`./src/templates/EventPage.js`),
      context: {
        id,
      },
    })
  )
}
