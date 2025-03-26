import { configureStore, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loggerMiddleware } from "./customMiddleware";
// create async call usiing createasynctunk

export const fetchPosts = createAsyncThunk("fetchposts", async () => {
    const resp = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!resp.ok) throw new Error("Failed to fetch posts");
    return resp.json();
});
const testSlice = createSlice({
    name: "Counter",
    initialState: {
        count: 0,
        heythrer: "Helloworld"
    },
    reducers: { // synchronous actions
        increment: (state) => {
            state.count += 1;
            state.heythrer = "From increment"
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        }
    }, // asynchronous actions like API calls
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            console.log(action.payload);
        })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                console.log(action.payload);
            }).addCase(fetchPosts.rejected, (state, action) => {
                console.log(action.payload);
            })
    }
});
export const { increment, decrement, reset } = testSlice.actions;
const store = configureStore({
    reducer: {
        counter: testSlice.reducer
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(loggerMiddleware)
    }
)

export default store;