import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './ui/card'
import { Button } from './ui/button'

const Order = () => {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Korea chicken </CardTitle>
                    <CardDescription className='mt-4'>
                        <div className='flex justify-between'>
                            <div><p>6 pcs of Korea chicken</p></div>
                            <div>122 Baht</div>
                        </div>
                    </CardDescription>
                    <CardDescription>
                        <div className='flex justify-between'>
                            <div><p>6 pcs of Korea chicken</p></div>
                            <div>122 Baht</div>
                        </div>
                    </CardDescription>
                    <CardDescription>
                        <div className='flex justify-between'>
                            <div><p>Coke x2</p></div>
                            <div>122 Baht</div>
                        </div>
                    </CardDescription>
                    <CardDescription>
                        <div className='flex justify-between'>
                            <div><p>Coke x2</p></div>
                            <div>122 Baht</div>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='mt-2'>
                    <div className='flex justify-between'>
                        <div><p>Subtotal</p></div>
                        <div>122 Baht</div>
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