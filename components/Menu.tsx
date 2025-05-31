import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";




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
  return (
    <div>
      <Card>

        <CardContent>
          <div className='flex'>
            <div className='w-28'>
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
          <Button variant={'add'} onClick={() => dispatch(addItem({
            id: name,
            name: name,
            quantity: 1,
            price: price,
            noted: ''
          }))}>
            <FaPlus />
          </Button>
        </CardFooter>
      </Card>
    </div>

  )
}

export default Menu