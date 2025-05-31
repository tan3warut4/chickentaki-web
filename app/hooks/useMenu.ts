"use client";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../libs/axiosClient";
// import axiosClient from "../libs/axiosClient"
export type Menu = {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    available: boolean;
    createdAt: string; // ISO timestamp
    updatedAt: string; // ISO timestamp
};

const fetchMenu = async (): Promise<Menu[]> => {
    const { data } = await axiosClient.get('v1/menus');
    console.log("Fetching data....");
    console.log(data)
    // const mockData = [
    //     {
    //         "id": "eacb61ed-b5b6-4c00-91f0-e14555156e13",
    //         "name": "french fried",
    //         "description": "ข้าวหน้าไก่คาราเกะ",
    //         "price": 39.00,
    //         "category": "FOOD",
    //         "imageUrl": "www.test.com",
    //         "available": true,
    //         "createdAt": "2025-05-29T17:04:51.350524Z",
    //         "updatedAt": "2025-05-29T17:04:51.350598Z"
    //     },
    //     {
    //         "id": "d4e1a1c7-ac88-4070-a104-54de8d1f08a2",
    //         "name": "Korea chicken set 6pcs with soysauce",
    //         "description": "",
    //         "price": 99.00,
    //         "category": "FOOD",
    //         "imageUrl": "www.google.com",
    //         "available": true,
    //         "createdAt": "2025-05-29T17:02:51.226345Z",
    //         "updatedAt": "2025-05-29T17:02:51.226946Z"
    //     },
    //     {
    //         "id": "05132982-b15c-43ae-b3db-7cfcc09de695",
    //         "name": "Korea chicken set 6pcs with ซแสเผ็ด",
    //         "description": "",
    //         "price": 99.00,
    //         "category": "FOOD",
    //         "imageUrl": "www.google.com",
    //         "available": true,
    //         "createdAt": "2025-05-29T17:03:23.249293Z",
    //         "updatedAt": "2025-05-29T17:03:23.24936Z"
    //     },
    //     {
    //         "id": "fa5becdf-98f3-4528-b660-8ae95e77c743",
    //         "name": "ข้าวหน้าไก่คาราเกะ",
    //         "description": "ข้าวหน้าไก่คาราเกะ",
    //         "price": 59.00,
    //         "category": "FOOD",
    //         "imageUrl": "www.google.com",
    //         "available": true,
    //         "createdAt": "2025-05-29T17:04:20.461318Z",
    //         "updatedAt": "2025-05-29T17:04:20.461531Z"
    //     }
    // ]
    return data
}

export default function useMenus() {
    console.log("Fetching data menu....");
    return useQuery({ queryKey: ['menus'], queryFn: fetchMenu })
}