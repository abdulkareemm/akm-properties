"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { GetCurrentUserFromMongoDB } from "../actions/users";
import { User } from "@prisma/client";
import { Button, Dropdown, message } from "antd";
import { usePathname, useRouter } from "next/navigation";
import Loader from "@components/Loader";

const userMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Properties",
    path: "/user/properties",
  },
  {
    name: "Account",
    path: "/user/account",
  },
  {
    name: "Subscriptions",
    path: "/user/subscriptions",
  },
  {
    name: "Queries",
    path: "/user/queries",
  },
];
const adminMenu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Properties",
    path: "/admin/properties",
  },
  {
    name: "Users",
    path: "/admin/users",
  },
];

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [menuToShow = userMenu, setMenuToShow] = React.useState<any>(userMenu);
  const [currentUserData = null, setCurrentUserData] =
    React.useState<User | null>(null);
  const [loading = false, setLoading] = React.useState<boolean>(false);
  const pathname = usePathname();
  const isPublicRoute = ["sign-in", "sign-up"].includes(pathname.split("/")[1]);
  const getHeader = () => {
    if (isPublicRoute) return null;
    return (
      <div className="lg:px-20 px-5">
        <div className="bg-primary p-3 flex justify-between items-center rounded-b">
          <h1
            className="text-2xl text-white font-bold cursor-pointer"
            onClick={() => {
              router.push("/");
            }}
          >
            AKM Properties
          </h1>

          <div className="bg-white py-2 px-5 rounded-sm flex items-center gap-5">
            <Dropdown
              menu={{
                items: menuToShow.map((item: any) => ({
                  label: item.name,
                  onClick: () => {
                    router.push(item.path);
                  },
                })),
              }}
            >
              <Button className="text-primary hover:text-primary" type="link">
                {currentUserData?.username}
              </Button>
            </Dropdown>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    );
  };

  const getContent = () => {
    if (isPublicRoute) return children;
    if (loading) return <Loader />;
    return <div className="py-5 lg:px-20 px-5">{children}</div>;
  };
  const getCurrentUser = async () => {
    try {
      setLoading(true)
      const response: any = await GetCurrentUserFromMongoDB();
      if (response.error) throw new Error(response.error.message);
      setCurrentUserData(response.data);
      if (response.data.isAdmin) {
        setMenuToShow(adminMenu);
      }
    } catch (error: any) {
      console.log(error);
      message.error(error.message);
    }
    finally{
      setLoading(false);
    }
  };
  useEffect(() => {
    if (!isPublicRoute) getCurrentUser();
  }, []);
  return (
    <div>
      {getHeader()}
      {getContent()}
    </div>
  );
}
