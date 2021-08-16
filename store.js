import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import photosReducer from "./photoSlice";

export default configureStore({
    reducer: {
        photos: photosReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})