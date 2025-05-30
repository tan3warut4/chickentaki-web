'use client';

import { ReactNode, useRef } from "react";
import { AppStore, makeStore } from "./libs/store";
import { Provider } from "react-redux";

export default function StoreProvider({
    order,
    children
}: {
    order: any,
    children: ReactNode
}) {
    const storeRef = useRef<AppStore>(undefined)
    if (!storeRef.current) {
        storeRef.current = makeStore()
        storeRef.current.dispatch(initializeOrder(order))

    }
    return <Provider store={storeRef.current}>{children}</Provider>
}

function initializeOrder(order: any): any {
    throw new Error("Function not implemented.");
}
