import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { stat } from 'fs';


type Menu = {
    id: string,
    name: string,
    quantity: number,
    price: number,
    noted: string,
}

interface OrderState {
    customerName: string,
    items: Menu[],
    total: number,
    totalAmount: number
}

const initialState: OrderState | null = {
    customerName: "customer",
    items: [],
    total: 0,
    totalAmount: 0,
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Menu>) => {
            const existingItem = state.items.find((item) => item.name === action.payload.name)
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.total += action.payload.price * action.payload.quantity;
            state.totalAmount += action.payload.quantity;
        },
        removeItem: (state, action: PayloadAction<string>) => {
            const index = state.items.findIndex(item => item.id === action.payload);
            if (index !== -1) {
                state.total -= state.items[index].price * state.items[index].quantity;
                state.items.splice(index, 1);
            }
        },
        clearOrder: (state) => {
            state.items = [];
            state.total = 0;
            state.totalAmount = 0;
        },
        increaseItem: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find((item) => item.name === action.payload)
            if (existingItem) {
                existingItem.quantity += 1
                state.total += existingItem.price
                state.totalAmount += 1
            }
        },
        decreaseItem: (state, action: PayloadAction<string>) => {
            const existingItem = state.items.find(item => item.name === action.payload)
            if (existingItem) {
                existingItem.quantity -= 1
                state.total -= existingItem.price
                state.totalAmount -= 1
            }
        }
    },
});

export const { addItem, clearOrder, removeItem, increaseItem, decreaseItem } = orderSlice.actions;

export default orderSlice.reducer