import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import Image from 'next/image'

const RestaurantCard = () => {
    return (
        <div>
            <Card>
                <CardContent>
                    <div className='flex'>
                        <div className='w-28'>
                            <Image src={"/bonchon.jpeg"} width={100} height={100} alt='menu' />
                        </div>
                        <div>
                            <label className='font-bold'>Chicken Taki</label>
                            <p className='text-gray-500 text-sm'>Location : Aspire sathon</p>
                            <p className='text-gray-500 text-sm'>Cokking time: within 15 mins</p>
                            <p className='text-gray-500 text-sm'>Delivery fees: Free</p>

                        </div>

                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default RestaurantCard