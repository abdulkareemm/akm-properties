import React from 'react'
import PageTitle from '@components/PageTitle'
import PropertiesTable from './_components/page'
import LinkButton from '@/components/LinkButton'

function Properties() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <PageTitle title={"Properties"}/>
        <LinkButton title="Create Property" path="/user/properties/create-property"/>
      </div>
      <PropertiesTable/>
    </div>
  )
}

export default Properties