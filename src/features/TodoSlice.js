import { createSlice,nanoid } from "@reduxjs/toolkit";


const TodoSlice = createSlice({
    name : "Todo",
    initialState : [{id:1, text:"pratik"}],
    reducers :{
            addtodo:(state,action)=>{
                state.push({id:nanoid(), text: action.payload})

            },
            removeTodo:(state,action)=>{
              return state.filter((todo)=>todo.id !== action.payLoad)
            }
    }
})


export const{} = TodoSlice.actions;
export default TodoSlice.reducer;