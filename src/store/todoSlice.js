import { createSlice } from "@reduxjs/toolkit"

const initialState =  {
    tasks: ["Write a blog post", "Solve 2 LeetCode problems", "Water the plants"]
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks.splice(action.payload, 1);
        }
    }
});

export const { addTask, deleteTask } = todoSlice.actions;
export default todoSlice.reducer;