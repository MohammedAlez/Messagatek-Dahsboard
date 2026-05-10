// import React from "react"
// import ConversationSidebar from "@/components/conversation-sidebar"
// import { SiteHeader } from "@/components/site-header"
// import ConversationContent from "@/components/conversation-content"
// import { Separator } from "@/components/ui/separator"

// function Page() {
//   return (
//     <>
//       <SiteHeader title="Conversations"/>
//       <div className="flex lg:h-[calc(100vh-4rem)] p-4  bg-background text-foreground">
//         <div className="flex w-full flex-col lg:flex-row gap-4">
//           <div className="w-full lg:w-105  bg-slate-50/80">
//             <ConversationSidebar />
//           </div>
//           {/* <Separator orientation="vertical" className="hidden lg:inline-flex mx-1 tra" /> */}
//           <div className="flex flex-1 items-center justify-center  max-h-[calc(100vh-4rem)]">
//             <div className="w-full rounded-xl border border-dashed border-border/60 bg-muted/80 text-center text-sm text-muted-foreground">
//               <ConversationContent />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default Page






'use client'

import React, { useState } from "react"
import ConversationSidebar from "@/components/conversation-sidebar"
import { SiteHeader } from "@/components/site-header"
import ConversationContent from "@/components/conversation-content"
import { cn } from "@/lib/utils"

function Page() {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null)

  return (
    <>
      <SiteHeader title="Conversations" />
      {/* Container with overflow-hidden to prevent horizontal scroll during animation */}
      <div className="relative h-[calc(100vh-4rem)] overflow-hidden bg-background text-foreground">
        
        <div className={cn(
          "flex h-full w-[200%] lg:w-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:p-4 lg:gap-4",
          selectedChatId ? "-translate-x-1/2" : "translate-x-0"
        )}>
          
          {/* VIEW 1: Sidebar */}
          <div className="w-1/2 lg:w-[400px] h-full p-4 lg:p-0">
            <ConversationSidebar 
              selectedId={selectedChatId} 
              onSelect={setSelectedChatId} 
            />
          </div>

          {/* VIEW 2: Content */}
          <div className="w-1/2 lg:flex-1 h-full p-4 lg:p-0">
            <div className="h-full w-full rounded-xl border border-border bg-card shadow-sm overflow-hidden">
              {selectedChatId ? (
                <ConversationContent 
                  chatId={selectedChatId} 
                  onBack={() => setSelectedChatId(null)} 
                />
              ) : (
                <div className="hidden lg:flex h-full items-center justify-center text-muted-foreground italic">
                  Select a conversation to start messaging
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Page