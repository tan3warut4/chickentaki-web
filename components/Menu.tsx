import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";
import toast, { Toaster } from 'react-hot-toast';

import { Card, CardContent, CardFooter } from './ui/card'
import { useDispatch } from 'react-redux';
import { addItem } from '@/app/features/order/ordersSlice';

type MenuProps = {
  name: string,
  description: string,
  price: number,
  imageUrl: string,
}

const Menu = ({ name, description, price }: MenuProps) => {
  const dispatch = useDispatch();
  const handleMenuClick = () => {
    toast.success(`Add ${name} to your order.`)
    dispatch(addItem({
      id: name,
      name: name,
      quantity: 1,
      price: price,
      noted: ''
    }))
  }
  return (
    <div>
      <Toaster position="bottom-center"
        reverseOrder={false} />
      <Card>

        <CardContent>
          <div className='flex'>
            <div className='w-full'>
              <Image src={"/menu.jpg"} width={112} height={122} alt='menu' />
            </div>
            <div>
              <label className='font-bold'>{name}</label>
              <p className='text-gray-500 text-sm'>{description}</p>
              <p className='text-gray-500'>{price}</p>
            </div>

          </div>
        </CardContent>
        <CardFooter className='justify-end'>
          <Button variant={'add'} onClick={handleMenuClick}>
            <FaPlus />
          </Button>
        </CardFooter>
      </Card>
    </div>

  )
}

export default Menu