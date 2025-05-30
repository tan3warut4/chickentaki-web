"use client";
import MenuList from "@/components/MenuList";
import Order from "@/components/Order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useMenus from "./hooks/useMenu";
import { Label } from "@/components/ui/label";
import { LuSquareMenu } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { BounceLoader } from "react-spinners";




export default function Home() {
  const { data, isLoading, error } = useMenus()
  if (error) return <p>Error fetching menus: {error.message}</p>;

  return (
    <div className="mx-auto max-w-xl min-h-screen bg-white flex justify-center pt-14">
      <Tabs defaultValue="menu" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="menu">
            <div>
              <div className="flex justify-center">
                <LuSquareMenu />
              </div>
              <Label>Chickentaki menu</Label>
            </div>

          </TabsTrigger>
          <TabsTrigger value="order">
            <div>
              <div className="flex justify-center">
                <IoMdPerson />
              </div>
              <Label>Your order</Label>
            </div>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="menu">
          {isLoading ?
          <div className="flex mt-25 justify-center min-h-screen ">
            <BounceLoader
              color={"#807f9f"}
              loading={isLoading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
            
            : <MenuList data={data} />}
        </TabsContent>
        <TabsContent value="order">
          <Order />
        </TabsContent>
      </Tabs>
    </div>
  );
}
