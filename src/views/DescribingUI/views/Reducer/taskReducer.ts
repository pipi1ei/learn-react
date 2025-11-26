import type { Task } from './types';

interface AddTaskAction {
  type: 'add';
  payload: Task;
}

interface ChangeTaskAction {
  type: 'change';
  payload: Task;
}

interface DeleteTaskAction {
  type: 'delete';
  payload: {
    id: number;
  };
}

export type TaskAction = AddTaskAction | ChangeTaskAction | DeleteTaskAction;

export default function taskReducer(tasks: Task[], { type, payload }: TaskAction) {
  switch (type) {
    case 'add':
      return [...tasks, { ...payload, done: false }];
    case 'change':
      return tasks.map(item => {
        if (item.id === payload.id) {
          return payload;
        } else {
          return item;
        }
      });
    case 'delete':
      return tasks.filter(item => item.id !== payload.id);
  }
}
