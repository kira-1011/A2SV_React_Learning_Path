import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";

export type ReactionType = 'thumbsup' | 'heart' | 'thumbsdown' | 'thinking' | 'fire';

export interface BlogType{
    id: string,
    title: string,
    content: string,
    date: string,
    reactions: Record<ReactionType, number>,
}

interface BlogStateType{
    blogs: BlogType[]
}

const initialState:BlogStateType = {
    blogs: []
};

const blogsSlice = createSlice({
    
    name: "blogs",
    initialState,
    reducers:{

      
    }
 })

export default blogsSlice.reducer;