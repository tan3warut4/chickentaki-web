"use client";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../libs/axiosClient";
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

    return data
}
const fetchMockMenu = (): Menu[] => {
    const mockData = [
        {
            "id": "eacb61ed-b5b6-4c00-91f0-e14555156e13",
            "name": "French Fried",
            "description": "A crispy and golden plate of French fries, lightly salted for a perfect side dish.",
            "price": 39.00,
            "category": "FOOD",
            "imageUrl": "https://example.com/images/french-fried.jpg",
            "available": true,
            "createdAt": "2025-05-29T17:04:51.350524Z",
            "updatedAt": "2025-05-29T17:04:51.350598Z"
        },
        {
            "id": "d4e1a1c7-ac88-4070-a104-54de8d1f08a2",
            "name": "Korea Chicken Set (Soy Sauce, 6pcs)",
            "description": "Six pieces of Korean-style fried chicken glazed with a rich soy sauce.",
            "price": 99.00,
            "category": "FOOD",
            "imageUrl": "https://example.com/images/korea-chicken-soy.jpg",
            "available": true,
            "createdAt": "2025-05-29T17:02:51.226345Z",
            "updatedAt": "2025-05-29T17:02:51.226946Z"
        },
        {
            "id": "05132982-b15c-43ae-b3db-7cfcc09de695",
            "name": "Korea Chicken Set (Spicy Sauce, 6pcs)",
            "description": "Six pieces of Korean-style fried chicken coated with a spicy chili glaze.",
            "price": 99.00,
            "category": "FOOD",
            "imageUrl": "https://example.com/images/korea-chicken-spicy.jpg",
            "available": true,
            "createdAt": "2025-05-29T17:03:23.249293Z",
            "updatedAt": "2025-05-29T17:03:23.249360Z"
        },
        {
            "id": "fa5becdf-98f3-4528-b660-8ae95e77c743",
            "name": "ข้าวหน้าไก่คาราเกะ (Chicken Karaage Rice Bowl)",
            "description": "A Japanese-style fried chicken rice bowl, served with a flavorful sauce.",
            "price": 59.00,
            "category": "FOOD",
            "imageUrl": "https://example.com/images/chicken-karaage-rice.jpg",
            "available": true,
            "createdAt": "2025-05-29T17:04:20.461318Z",
            "updatedAt": "2025-05-29T17:04:20.461531Z"
        }
    ];
    return mockData
}

export default function useMenus() {
    const isDev = true;
    return useQuery({ queryKey: ['menus'], queryFn: isDev ? fetchMockMenu : fetchMenu })
}