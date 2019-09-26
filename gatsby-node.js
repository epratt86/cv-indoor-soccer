// const path = require("path")

// Creates pages programatically from contentful tours data
// exports.createPages = async function({ actions, graphql }) {
//   const { data } = await graphql(`
//     query {
//       tours: allContentfulTour {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)
//   data.tours.edges.forEach(edge => {
//     const slug = edge.node.slug
//     actions.createPage({
//       path: `tours/${slug}`,
//       component: path.resolve("./src/templates/tour-template.js"),
//       context: {
//         slug,
//       },
//     })
//   })
// }
