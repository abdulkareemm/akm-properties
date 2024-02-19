"use client"
import React from 'react'
import {Property} from "@prisma/client"
import dayjs from 'dayjs';
import { Button, Table } from 'antd';

export default function PropertiesTableClientSide({ properties }: { properties :Property[]}) {
     const columns: any = [
       {
         title: "Property Name",
         dataIndex: "name",
         key: "name",
       },
       {
         title: "Price",
         dataIndex: "price",
         key: "price",
         render(price: number) {
           return `$${price}`;
         },
       },
       {
         title: "Type",
         dataIndex: "type",
         key: "type",
       },
       {
         title: "Status",
         dataIndex: "status",
         key: "status",
       },
       {
         title: "Updated At",
         dataIndex: "updatedAt",
         render(updatedAt: Date) {
           return dayjs(updatedAt).format("DD MMM YYYY HH:mm A");
         },
       },
     ];
  return <div className='capitalize'>
    <Table dataSource={properties} columns={columns}/>
  </div>;
}