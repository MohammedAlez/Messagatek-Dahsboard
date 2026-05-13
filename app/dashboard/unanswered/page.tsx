import { SiteHeader } from '@/components/site-header'
import { QuestionsHeader } from '@/components/questions-header'
import { QuestionsCards } from '@/components/questions-cards'
import { QuestionsFilters } from '@/components/questions-filters'
import { QuestionsTable } from '@/components/questions-table'
import { Lightbulb } from 'lucide-react'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader title="Unanswered Questions" />
      <main className="container mx-auto px-4 pb-10">
        <QuestionsHeader />
        <div className="mt-4 flex flex-col gap-6">
          <QuestionsCards />
          
          {/* Alert Banner */}
          <div className="flex items-center gap-3 rounded-xl bg-slate-500/10 border border-indigo-500/20 p-4 text-sm text-slate-600">
            <Lightbulb className="h-5 w-5 text-slate-400 shrink-0 " />
            <p>
              Questions marked <span className="font-bold">"added to KB"</span> have been added to the knowledge base.
            </p>
          </div>

          <QuestionsFilters />
          <QuestionsTable />
        </div>
      </main>
    </div>
  )
}