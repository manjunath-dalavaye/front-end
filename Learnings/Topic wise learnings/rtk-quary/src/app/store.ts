import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postApi } from "../services/post";


export const store=configureStore({
    reducer:{
        [postApi.reducerPath]:postApi.reducer
    },
    //define middleware
    //By default it will create
    
    middleware:(getDefaltMiddleware)=>
        getDefaltMiddleware().concat(postApi.middleware),
      //above line, it will provide the caching invalidation polling
})

setupListeners(store.dispatch)
//above line enables the refetch