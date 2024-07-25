const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Appliance {
    id: ID!
    codigo: String!
    descripcion: String!
    fabricante: String!
    tipo: String!
    marca: String!
    precioConImpuesto: Float!
    fechaUltimaCompra: String!
    empresa: String!
    eliminadoLogico: Boolean!
  }

  input ApplianceInput {
    codigo: String!
    descripcion: String!
    fabricante: String!
    tipo: String!
    marca: String!
    precioConImpuesto: Float!
    fechaUltimaCompra: String!
    empresa: String!
  }

  type Query {
    getAppliance(id: ID!): Appliance
    getAppliances: [Appliance]
  }

  type Mutation {
    createAppliance(input: ApplianceInput): Appliance
    updateAppliance(id: ID!, input: ApplianceInput): Appliance
    deleteAppliance(id: ID!): Appliance
    softDeleteAppliance(id: ID!): Appliance
  }
`);

module.exports = schema;
