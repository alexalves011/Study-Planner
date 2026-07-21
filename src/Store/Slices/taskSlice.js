// responsavel por gerenciar tudo em referente a TASK

import { createSlice, isAction } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Reducers: Funções que ditam as regras de COMO o estado deve ser alterado a partir de uma ação.
    addTask: (state, action) => {
      const taskWithId = {
        ...action.payload,
        id: Date.now(),
        completed: false,
      };
      state.tasks.push(taskWithId);
    },

    toggleTaskComplete: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },

    editTask: (state, action) => {
      const { taskId, updatedTask } = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);

      if (taskIndex !== -1) {
        // Atribuímos o novo objeto diretamente à posição correta da lista
        state.tasks[taskIndex] = {
          ...state.tasks[taskIndex], // Mantém os dados antigos (como o 'id')
          ...updatedTask, // Sobrescreve com os dados novos da edição
        };
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, toggleTaskComplete, editTask, deleteTask } =
  taskSlice.actions;

// Função De Apoi

export const selectTasks = (state) => state.tasks.tasks;
export const selectPendingTasks = (state) =>
  state.tasks.tasks.filter((task) => !task.completed);
export const selectCompletedTasks = (state) =>
  state.tasks.tasks.filter((task) => task.completed);

export default taskSlice.reducer;
