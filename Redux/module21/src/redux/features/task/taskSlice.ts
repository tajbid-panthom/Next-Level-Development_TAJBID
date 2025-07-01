import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { deleteUser } from "./userSlice";

interface InitialState {
  tasks: ITask[];
  filter: "all" | "High" | "Medium" | "Low";
}

const initialState: InitialState = {
  tasks: [],
  filter: "all",
};

type DraftTask = Pick<
  ITask,
  "title" | "description" | "dueDate" | "priority" | "assignedTo"
>;
const createtask = (taskData: DraftTask): ITask => {
  return {
    ...taskData,
    id: nanoid(),
    isCompleted: false,
    assignedTo: taskData.assignedTo || null,
  };
};
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<DraftTask>) => {
      state.tasks.push(createtask(action.payload));
    },
    toggleCompleteState: (state, action: PayloadAction<string>) => {
      state.tasks.forEach((task) =>
        task.id === action.payload
          ? (task.isCompleted = !task.isCompleted)
          : task.isCompleted
      );
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    updateTask: (state, action: PayloadAction<string>) => {
      const taskToUpdate = state.tasks.find(
        (task) => task.id === action.payload
      );
      console.log(taskToUpdate);
    },
    updateFilter: (
      state,
      action: PayloadAction<"all" | "High" | "Medium" | "Low">
    ) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deleteUser, (state, action) => {
      state.tasks.forEach((task) => {
        return task.assignedTo === action.payload
          ? (task.assignedTo = null)
          : task;
      });
    });
  },
});
export const selectTasks = (state: RootState) => {
  const filter = state.todo.filter;
  if (filter === "all") {
    return state.todo.tasks;
  } else if (filter === "High") {
    return state.todo.tasks.filter((task) => task.priority === "High");
  } else if (filter === "Medium") {
    return state.todo.tasks.filter((task) => task.priority === "Medium");
  } else {
    return state.todo.tasks.filter((task) => task.priority === "Low");
  }
};
export const selectFilter = (state: RootState) => {
  return state.todo.filter;
};
export const {
  addTask,
  toggleCompleteState,
  deleteTask,
  updateTask,
  updateFilter,
} = taskSlice.actions;
export const taskReducer = taskSlice.reducer;
