import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"

import data from "./data.json"
import RecentLeads from "@/components/recent-leads"
import UnansweredQuestions from "@/components/unanswered-questions"
import SystemStatus from "@/components/system-status"
import TopAskedQuestions from "@/components/top-asked-questions"

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader title="Dashboard"/>
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 px-4 lg:px-6">
                {/* left side */}
                <div className="grid grid-cols-1 gap-4">
                  <RecentLeads />
                  <UnansweredQuestions />
                </div>
                {/* right side */}
                <div className="grid grid-cols-1 gap-4">
                  <SystemStatus />
                  <TopAskedQuestions />
                </div>
              </div>
              <div className="px-4 lg:px-6">
                {/* <ChartAreaInteractive /> */}
              </div>
              {/* <DataTable data={data} /> */}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
