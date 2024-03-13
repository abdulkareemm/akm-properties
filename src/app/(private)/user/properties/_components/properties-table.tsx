import prisma from '@/config/db'
import React from 'react'
import PropertiesTableClientSide from './properties-table-clientside'
import { GetCurrentUserFromMongoDB } from '@/actions/users'

export default async function PropertiesTable() {
  const user = await GetCurrentUserFromMongoDB()
  const properties = await prisma.property.findMany({
    orderBy:{
      createdAt:"desc"
    },
    where:{
      userId : user?.data?.id
    }
  })
  return (
    <div>
      <PropertiesTableClientSide properties = {properties}/>
    </div>
  )
}
