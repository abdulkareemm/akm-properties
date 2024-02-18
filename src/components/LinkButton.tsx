"use client";
import { Button } from "antd";
import React from "react";
import { useRouter } from "next/navigation";

function LinkButton({ title, path }: { title: string; path: string }) {
  const router = useRouter();
  return (
    <Button type="default" onClick={() => router.push(path)}>
      {title}
    </Button>
  );
}

export default LinkButton;
