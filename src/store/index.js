import { configureStore } from "@reduxjs/toolkit";
import { TransactionsReducer } from "./reducers/transactions";

export const store = configureStore({
    reducer: {
        transactions: TransactionsReducer,
    },
    devTools: true,
})