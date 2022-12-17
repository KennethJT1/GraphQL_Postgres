import { client } from "../database/db.js";

export const resolvers = {
  Query: {
    users: () => client,
  },
};
