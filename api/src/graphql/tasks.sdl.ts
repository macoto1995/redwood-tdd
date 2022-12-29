export const schema = gql`
  type Task {
    id: Int!
    content: String!
    hasDone: Boolean!
  }

  type Query {
    tasks: [Task!]! @requireAuth
    task(id: Int!): Task @requireAuth
  }

  input CreateTaskInput {
    content: String!
    hasDone: Boolean!
  }

  input UpdateTaskInput {
    content: String!
    hasDone: Boolean
  }

  type Mutation {
    createTask(input: CreateTaskInput!): Task! @requireAuth
    updateTask(id: Int!, input: UpdateTaskInput!): Task! @requireAuth
    deleteTask(id: Int!): Task! @requireAuth
  }
`
