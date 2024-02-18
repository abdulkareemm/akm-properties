import PageTitle from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../../_components/properties-form";

export default function EditProperty() {
  return (
    <div>
      <PageTitle title="Edit Property" />
      <PropertiesForm />
    </div>
  );
}
