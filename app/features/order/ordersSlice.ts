import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


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
    total: number
}

const initialState: OrderState | null = {
    customerName: "customer",
    items: [
        { id: "3", name: "test", quantity: 4, price: 100, noted: "" }
    ],
    total: 0
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<Menu>) => {
            state.items.push(action.payload);
            state.total += action.payload.price * action.payload.quantity;
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
        },
    },
});

export const { addItem, clearOrder, removeItem } = orderSlice.actions;

export default orderSlice.reducer