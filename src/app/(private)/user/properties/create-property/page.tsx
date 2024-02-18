import PageTitle from "@/components/PageTitle";
import React from "react";
import PropertiesForm from "../_components/properties-form";

export default function CreateProperty() {
  return (
    <div>
      <PageTitle title="Create Property" />
      <PropertiesForm />
    </div>
  );
}
