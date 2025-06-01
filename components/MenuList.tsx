"use client";
import React, { useEffect, useMemo, useState } from 'react'
import Menu from './Menu'
import Image from 'next/image'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'

export type Menu = {
  id: string;
  name: string,
  imageUrl: string,
  price: number,
  category: string,
  description: string,
}
type MenuListProps = {
  menus: Menu[];
};


const MenuList: React.FC<MenuListProps> = ({ menus }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = useState(searchParams?.get("category") || "all");

  useEffect(() => {
    const currentCategory = searchParams?.get("category") || "all";
    if (currentCategory !== category) {
      setCategory(currentCategory);
    }
  }, [searchParams, category]);

  const filteredMenus = useMemo(() => {
    if (category === "all") return menus;
    const result = menus.filter((menu: Menu) => menu.category === category)
    return result
  }, [category, menus]);


  const handleToggleChange = (value: string | undefined) => {
    const params = new URLSearchParams(searchParams?.toString() || "");

    if (value) {
      params.set("category", value); // Set the 'category' query param
    } else {
      params.delete("category"); // Remove 'category' if no value is selected
    }
    router.push(`?${params.toString()}`); // Push updated params to the router
  };

  return (
    <div className='overflow-x-auto'>
      <ToggleGroup type="single" variant={"outline"}
        defaultValue={searchParams?.get("category") || "all"}
        onValueChange={handleToggleChange}
      className='overflow-x-auto'
      >
        <ToggleGroupItem value="all">
          <div className='flex flex-col items-center'>
            <Image src="/menu.jpg" width={50} height={50} alt="set" />
            All
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="setMenu">
          <div className='flex flex-col items-center'>
            <Image src="/setmenu.jpg" width={50} height={50} alt="set" />
            Set menu
          </div>
        </ToggleGroupItem>
        <ToggleGroupItem value="chicken">
          <div className='flex flex-col items-center'>
            <Image src="/snack.jpg" width={50} height={50} alt="set" />
            Chicken
          </div>
        </ToggleGroupItem>

      </ToggleGroup>

      <div className='flex flex-col gap-4'>
        {filteredMenus?.map((menu: Menu) => <Menu key={menu.id} imageUrl={menu.imageUrl} name={menu.name} description={menu.description} price={menu.price} />)}
      </div>
    </div>
  )
}

export default MenuList