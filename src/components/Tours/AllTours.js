import React from "react"
// import TourList from "./TourList"
// import { useStaticQuery, graphql } from "gatsby"

// const getTours = graphql`
//   query {
//     allTours: allContentfulTour {
//       edges {
//         node {
//           name
//           price
//           slug
//           country
//           contentful_id
//           days
//           images {
//             fluid {
//               ...GatsbyContentfulFluid_tracedSVG
//             }
//           }
//         }
//       }
//     }
//   }
// `

const AllTours = () => {
  // const { allTours } = useStaticQuery(getTours)
  // return <TourList tours={allTours} />
  return <div>hello from AllTours</div>
}

export default AllTours
