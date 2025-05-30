"use client";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "../libs/axiosClient"


const fetchMenu = async () => {
    const { data } = await axiosClient.get('v1/menus');
    console.log("Fetching data....");
    console.log(data)
    return data
}

export default function useMenus() {
    console.log("Fetching data menu....");
    return useQuery({ queryKey: ['menus'], queryFn: fetchMenu })
}