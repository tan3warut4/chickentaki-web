"use client"
import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/libs/store'
import { increaseItem, decreaseItem } from '@/app/features/order/ordersSlice'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'

const Order = () => {
    const { items, total } = useSelector((state: RootState) => state.order)
    const dispatch = useDispatch();
    const menuDisable = (quantity: number) => {
        if (quantity === 0) {
            return true
        }
        return false
    }
    const noOrder = <div className='flex justify-center mt-15'> you didn't have any order yet.</div>

    return (
        items.length != 0 ?
            <div>
                <Card>
                    <CardHeader>
                        <CardTitle>Your order </CardTitle>
                        {items.map((item) => {
                            return (
                                <CardDescription key={item.name} className='mt-4'>
                                    <div className='flex justify-between'>
                                        <div><p>{item.name}
                                        </p></div>
                                        <div>
                                            <Button variant="addOrder" size={"addOrder"} disabled={menuDisable(item.quantity)} onClick={() => dispatch(decreaseItem(item.name))}>-</Button>
                                            <span className='pr-1'> {item.quantity}</span>
                                            <Button variant="addOrder" size={"addOrder"} onClick={() => dispatch(increaseItem(item.name))}>+</Button>
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <span className="cursor-pointer px-2 py-1 bg-gray-200 rounded-full hover:bg-gray-300">⋮</span>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    <DropdownMenuItem variant='delete'>Delete</DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        </div>
                                    </div>
                                </CardDescription>
                            )
                        })}

                    </CardHeader>
                    <CardContent className='my-4'>
                        <div className='flex justify-between'>
                            <div><p>Subtotal</p></div>
                            <div>{total}</div>
                        </div>

                    </CardContent>
                    <CardFooter className='mt-2'>
                        <Button className='w-full' variant={"default"} >Generate a payment</Button>
                    </CardFooter>
                </Card>
            </div> : noOrder
    )
}

export default Order