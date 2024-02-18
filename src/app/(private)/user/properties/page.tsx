import React from 'react'
import PageTitle from '@components/PageTitle'
import PropertiesTable from './_components/properties-table'

function Properties() {
  return (
    <div>
      <div className="flex justify-between">
        <PageTitle title={"Properties"}/>
      </div>
      <PropertiesTable/>
    </div>
  )
}

export default Properties