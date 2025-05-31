import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/libs/store'
import { removeItem } from '@/app/features/order/ordersSlice'

const Order = () => {
    const { items, total } = useSelector((state: RootState) => state.order)
    const dispatch = useDispatch();
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Korea chicken </CardTitle>
                    {items.map((item) => {
                        return (
                            <CardDescription key={item.name} className='mt-4'>
                                <div className='flex justify-between'>
                                    <div><p>{item.name}
                                    </p></div>
                                    <div>
                                        <Button size={"sm"} onClick={() => dispatch(removeItem(item.id))}>Remove</Button>
                                    </div>
                                </div>
                                <div>
                                    Amount : {item.quantity}
                                </div>
                            </CardDescription>
                        )
                    })}

                </CardHeader>
                <CardContent className='mt-2'>
                    <div className='flex justify-between'>
                        <div><p>Subtotal</p></div>
                        <div>{total}</div>
                    </div>

                </CardContent>
                <CardFooter className='mt-2'>
                    <Button className='w-full' variant={"default"} >Generate a payment</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Order