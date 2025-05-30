// import { RootState } from '@/app/libs/store';
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


// type Menu = {
//     id: string,
//     name: string,
//     quantity: number,
//     price: number,
//     noted: string,
// }

// interface OrderState {
//     customerName: string,
//     menu: Menu[]
// }

// const initialState: OrderState | null = {
//     customerName: "customer",
//     menu: []
// };

// export const orderSlice = createSlice({
//     name: 'order',
//     initialState,
//     reducers: {
//         addToOrder: (state, action: PayloadAction<OrderState>) => {
//             return action.payload;
//         },
//         clearOrder: () => null,
//         updateMenuItem: (state, action: PayloadAction<Menu>) => {
//             if (state) {
//                 const index = state.menu.findIndex((menu) => menu.id === action.payload.id);
//                 if (index !== -1) {
//                     // Update existing menu item
//                     state.menu[index] = action.payload;
//                 } else {
//                     // Add new menu item
//                     state.menu.push(action.payload);
//                 }
//             }
//         },
//         deleteMenuItem: (state, action: PayloadAction<string>) => {
//             if (state) {
//                 state.menu = state.menu.filter((menu) => menu.id !== action.payload);
//             }
//         },
//     },
// })

// export const { addToOrder, clearOrder, updateMenuItem, deleteMenuItem } = orderSlice.actions;

// export const selectOrder = (state: RootState) => state.order.value

// export default orderSlice.reducer