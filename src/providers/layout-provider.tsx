"use client";
import { UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { GetCurrentUserFromMongoDB } from "../actions/users";
import { User } from "@prisma/client";
import { message } from "antd";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentUserData = null, setCurrentUserData] =
    React.useState<User | null>(null);
  const getHeader = () => {
    return (
      <div className="lg:px-20 px-5">
        <div className="bg-primary p-4 flex justify-between items-center rounded-b">
          <h1 className="text-white text-xl">AKM Properties</h1>
          <div className="bg-white py-2 px-5 rounded-sm flex items-center gap-5">
            <span>{currentUserData?.username}</span>
            <UserButton afterSignOutUrl="/sign-in" />
          </div>
        </div>
      </div>
    );
  };
  const getContent = () => {
    return <div className="py-5">{children}</div>;
  };
  const getCurrentUser = async () => {
    try {
      const response: any = await GetCurrentUserFromMongoDB();
      if (response.error) throw new Error(response.error.message);
      setCurrentUserData(response.data);
    } catch (error: any) {
      console.log(error)
      message.error(error.message);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      {getHeader()}
      {getContent()}
    </div>
  );
}
