import PageTitle from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../_components/properties-form";
import prisma from "@/config/db";
import { Property } from "@prisma/client";

export default async function CreateProperty({ searchParams }: { searchParams  : any}) {
  console.log(searchParams)
  const cloneFrom = searchParams?.cloneFrom||""
  let property:Property|null = null
  if(cloneFrom) {
    property = await prisma.property.findUnique({
      where :{
        id : cloneFrom
      }
    }) as Property;
  }
  return (
    <div>
      <PageTitle title="Create Property" />
      <PropertiesForm initialValues={property?property:{}}/>
    </div>
  );
}
