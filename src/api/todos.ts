import { Todo } from '../types/Todo';
import { client } from '../utils/fetchClient';

interface NewTodo {
  userId: number;
  title: string;
  completed: boolean;
}

export const getTodos = (userId: number) => {
  return client.get<Todo[]>(`/todos?userId=${userId}`);
};

export const addTodo = (data: NewTodo) => {
  return client.post<Todo>('/todos/', data);
};

export const deleteTodo = (todoId: number) => {
  return client.delete(`/todos/${todoId}`);
};

export const updateTodo = (
  todoId: number, data: { completed?: boolean, title?: string },
) => {
  return client.patch(`/todos/${todoId}`, data);
};