import type { Prisma, Task } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TaskCreateArgs>({
  task: {
    one: { data: { content: 'String', hasDone: true } },
    two: { data: { content: 'String', hasDone: true } },
  },
})

export type StandardScenario = ScenarioData<Task, 'task'>
