import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { FaPlus } from "react-icons/fa6";




import { Card, CardContent, CardFooter, CardImage } from './ui/card'

const Menu = ({ name, description, imageUrl, price }: any) => {
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
          <Button variant={'add'}>
            <FaPlus />
          </Button>
        </CardFooter>
      </Card>
    </div>

  )
}

export default Menu