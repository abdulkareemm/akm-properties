import React, { Suspense } from "react";
import PageTitle from "@components/PageTitle";
import PropertiesTable from "./_components/properties-table";
import LinkButton from "@/components/LinkButton";
import Filters from "@/components/Filters";
import Loader from "@/components/Loader";

function Properties() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title={"Properties"} />
        <LinkButton
          title="Create Property"
          path="/user/properties/create-property"
        />
      </div>
      <Suspense fallback={<Loader/>}>
        <PropertiesTable />
      </Suspense>
    </div>
  );
}

export default Properties;
