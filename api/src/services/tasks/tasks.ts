import type {
  QueryResolvers,
  MutationResolvers,
  UpdateTaskInput,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const tasks: QueryResolvers['tasks'] = () => {
  return db.task.findMany()
}

export const task: QueryResolvers['task'] = ({ id }) => {
  return db.task.findUnique({
    where: { id },
  })
}

export const createTask: MutationResolvers['createTask'] = ({ input }) => {
  return db.task.create({
    data: input,
  })
}

export const updateTask: MutationResolvers['updateTask'] = ({ id, input }) => {
  const inputWithoutNull = Object.keys(input).reduce((acc, cur) => {
    const value = input[cur as keyof typeof input]
    if (value === null) return acc
    return { ...acc, [cur]: value }
  }, {})

  return db.task.update({
    data: inputWithoutNull,
    where: { id },
  })
}

export const deleteTask: MutationResolvers['deleteTask'] = ({ id }) => {
  return db.task.delete({
    where: { id },
  })
}
