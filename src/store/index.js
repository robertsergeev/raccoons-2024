import { configureStore } from "@reduxjs/toolkit";
import { TransactionsReducer } from "./reducers/transactions";
import {ModalReducer} from "./reducers/modal.js";

export const store = configureStore({
    reducer: {
        transactions: TransactionsReducer,
        modal: ModalReducer,
    },
    devTools: true,
})