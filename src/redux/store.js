import { configureStore } from "@reduxjs/toolkit";
import windowDimensionReducer from "./slice/windowDimensionSlice";

export default configureStore({
    reducer: {
        windowDimension: windowDimensionReducer
    }
})