"use client";
import MenuList from "@/components/MenuList";
import Order from "@/components/Order";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useMenus from "./hooks/useMenu";
import { Label } from "@/components/ui/label";
import { LuSquareMenu } from "react-icons/lu";
import { IoMdPerson } from "react-icons/io";
import { BounceLoader } from "react-spinners";
import { useSelector } from "react-redux";
import { RootState } from "./libs/store";
import RestaurantCard from "@/components/RestaurantCard";

export default function Home() {
  const { data, isLoading, error } = useMenus();
  const { totalAmount } = useSelector((state: RootState) => state.order)

  if (error) return <p>Error fetching menus: {error.message}</p>;

  return (
    <div className="mx-auto max-w-sm min-h-screen  bg-slate-50 flex flex-col items-center ">
      <div className="px-4">
        <div className="w-full my-2">
          <RestaurantCard />
        </div>

        <Tabs defaultValue="menu" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="menu">
              <div>
                <div className="flex justify-center">
                  <LuSquareMenu />
                </div>
                <Label>Chickentaki menu</Label>
              </div>
            </TabsTrigger>
            <TabsTrigger value="order" className="relative" >
              <div >
                <div className="flex justify-center">
                  <IoMdPerson />
                </div>
                <Label>Your order</Label>
                <div className="absolute w-5 h-5 bg-green-600 text-white rounded-full top-3 right-10">{totalAmount}</div>
              </div>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="menu">
            {isLoading ? (
              <div className="flex mt-25 justify-center min-h-screen">
                <BounceLoader
                  color={"#807f9f"}
                  loading={isLoading}
                  size={30}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            ) : (
              // Pass the data array directly
              data ? <MenuList menus={data} /> : <p>No menus available</p>
            )}
          </TabsContent>
          <TabsContent value="order">
            <Order />
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
}