import prisma from '@/config/db'
import React from 'react'
import PropertiesTableClientSide from './properties-table-clientside'

export default async function PropertiesTable() {
  const properties = await prisma.property.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div>
      <PropertiesTableClientSide properties = {properties}/>
    </div>
  )
}
