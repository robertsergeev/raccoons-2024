import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    transactions: [
        { id: 0, name: 'mcdonalds', category: 'food', amount: 15, date: Date.now() },
        { id: 1, name: 't shirt', category: 'shopping', amount: 50, date: Date.now() },
        { id: 2, name: 'decorations', category: 'home', amount: 40, date: Date.now() },
        { id: 3, name: 'taxi', category: 'transport', amount: 20, date: Date.now() },
    ],
}

const TransactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
    }
})


export const TransactionsReducer = TransactionsSlice.reducer; 