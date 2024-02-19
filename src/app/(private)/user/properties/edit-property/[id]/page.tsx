import PageTitle from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../../_components/properties-form";
import prisma from "@/config/db";

interface Props {
  params: {
    id: string;
  };
}
export default async function EditProperty({ params }: { params: Props }) {
  const property = await prisma.property.findUnique({
    where: {
      id: params.id,
    },
  });
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertiesForm
      initialValues={property} isEdit={true} />
    </div>
  );
}
