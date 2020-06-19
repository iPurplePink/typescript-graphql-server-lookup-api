import { gql } from 'apollo-server-express';

const impactAreasSchema = gql`
  type ImpactArea {
    name: String
    id: Int
  }

  extend type Query {
    impactAreas: [ImpactArea]
  }
`;

export default impactAreasSchema;
