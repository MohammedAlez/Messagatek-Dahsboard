import { LeadsCards } from '@/components/leads-cards'
import LeadsFilters from '@/components/leads-filters'
import { LeadsHeader } from '@/components/leads-screen-header'
import { LeadsTable } from '@/components/leads-table'
import { SiteHeader } from '@/components/site-header'
import React from 'react'

function Page() {
  return (
    <>
      <SiteHeader title='Leads'/>
      <main className="container mx-auto px-4">
        <LeadsHeader />
        {/* We will add StatsGrid here next */}
        <div className="mt-4">
          <LeadsCards />
          <LeadsFilters />
          <LeadsTable />
        </div>
      </main>
    </>
  )
}

export default Page