// import * as React from "react"
// import { Search } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { cn } from "@/lib/utils"

// const filters = [
//   { id: "all", label: "All" },
//   { id: "ai-handling", label: "AI handling" },
//   { id: "escalated", label: "Escalated" },
//   { id: "lead-saved", label: "Lead saved" },
// ]

// const chats = [
//   {
//     id: 1,
//     name: "Samar Al-Otaibi",
//     phone: "+966 50 123 4567",
//     status: "AI handling",
//     message: "Hello, peace be upon you.",
//     preview: "Welcome! How can I help you with inquiries about our courses?",
//     time: "10:14",
//     unread: 0,
//     avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
//   },
//   {
//     id: 2,
//     name: "Fahad Al-Shammari",
//     phone: "+966 50 234 6789",
//     status: "escalated",
//     message: "I want to know the course dates",
//     preview: "I will send you the available dates and the courses closest to your needs.",
//     time: "09:32",
//     unread: 2,
//     avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
//   },
//   {
//     id: 3,
//     name: "Noura Al-Qahtani",
//     phone: "+966 55 987 6543",
//     status: "Lead saved",
//     message: "Done, the registration is complete, God willing.",
//     preview: "Thank you! Your details have been saved and the team will contact you soon.",
//     time: "08:18",
//     unread: 0,
//     avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
//   },
//   {
//     id: 4,
//     name: "+966 56 123 4567",
//     phone: "+966 56 123 4567",
//     status: "Voice message",
//     message: "Voice message",
//     preview: "🎤 Voice message - Click to listen.",
//     time: "07:05",
//     unread: 1,
//     avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
//   },
//   {
//     id: 5,
//     name: "Mohammed Al-Zahrani",
//     phone: "+966 50 333 2211",
//     status: "AI handling",
//     message: "Thank you very much",
//     preview: "Our team will be back in touch with you regarding your question.",
//     time: "06:48",
//     unread: 0,
//     avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
//   },
// ]

// function ConversationSidebar() {
//   return (
//     <div className="flex h-full max-h-[calc(100vh-4rem)] flex-col gap-4">
//       <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card/90">
//         {/* Header Section */}
//         <div className="border-b border-border px-4 py-4 space-y-3">
//           <p className="text-sm font-medium text-foreground">Recent chats</p>
//           <div className="relative">
//             <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//             <Input
//               placeholder="Search chats"
//               className="pl-9 pr-3 h-9 bg-muted/50 border-none focus-visible:ring-purple-500"
//               aria-label="Search chats"
//             />
//           </div>

//           <div className="flex flex-wrap gap-2">
//             {filters.map((filter, index) => (
//               <button
//                 key={filter.id}
//                 type="button"
//                 className={cn(
//                   "rounded-full border px-3 py-1 text-xs font-medium transition",
//                   index === 0
//                     ? "border-purple-500/20 bg-purple-100 text-purple-700 hover:bg-purple-200"
//                     : "border-transparent bg-muted text-muted-foreground hover:bg-muted/80"
//                 )}
//               >
//                 {filter.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Chat List */}
//         <div className="overflow-y-auto px-2 py-2 space-y-1">
//           {chats.map((chat) => {
//             const isActive = chat.id === 1;
//             return (
//               <button
//                 key={chat.id}
//                 type="button"
//                 className={cn(
//                   "group flex w-full items-start gap-3 rounded-2xl p-4 text-left transition relative",
//                   isActive
//                     ? "bg-purple-600 shadow-lg shadow-purple-500/20"
//                     : "bg-transparent hover:bg-muted/50"
//                 )}
//               >
//                 <div className="relative shrink-0">
//                   <Avatar className="h-10 w-10 border border-black/5">
//                     {chat.avatar ? (
//                       <AvatarImage src={chat.avatar} alt={chat.name} />
//                     ) : (
//                       <AvatarFallback className={cn(isActive ? "bg-purple-400 text-white" : "")}>
//                         {chat.name.split(" ").map((n) => n[0]).join("")}
//                       </AvatarFallback>
//                     )}
//                   </Avatar>
//                   {chat.unread > 0 && (
//                     <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 border-2 border-white px-1.5 text-[0.65rem] font-bold text-white">
//                       {chat.unread}
//                     </span>
//                   )}
//                 </div>

//                 <div className="min-w-0 flex-1">
//                   <div className="flex items-start justify-between gap-2">
//                     <div className="min-w-0">
//                       <p className={cn(
//                         "truncate text-sm font-bold",
//                         isActive ? "text-white" : "text-foreground"
//                       )}>
//                         {chat.name}
//                       </p>
//                       <p className={cn(
//                         "truncate text-[11px]",
//                         isActive ? "text-purple-100" : "text-muted-foreground"
//                       )}>
//                         {chat.phone}
//                       </p>
//                     </div>
//                     <div className="flex shrink-0 flex-col items-end gap-1 text-right">
//                       <span className={cn(
//                         "text-[10px]",
//                         isActive ? "text-purple-200" : "text-muted-foreground"
//                       )}>
//                         {chat.time}
//                       </span>
//                       <Badge
//                         className={cn(
//                           "text-[9px] uppercase tracking-wider px-1.5 py-0 border-none",
//                           isActive 
//                             ? "bg-white/20 text-white hover:bg-white/30" 
//                             : chat.status === "escalated"
//                               ? "bg-red-100 text-red-600 hover:bg-red-100"
//                               : "bg-slate-100 text-slate-600"
//                         )}
//                       >
//                         {chat.status}
//                       </Badge>
//                     </div>
//                   </div>

//                   <div className={cn(
//                     "mt-2 text-xs line-clamp-1",
//                     isActive ? "text-purple-50" : "text-muted-foreground"
//                   )}>
//                     {chat.preview}
//                   </div>
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ConversationSidebar







import * as React from "react"
import { Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const filters = [
  { id: "all", label: "All" },
  { id: "ai-handling", label: "AI handling" },
  { id: "escalated", label: "Escalated" },
  { id: "lead-saved", label: "Lead saved" },
]

const chats = [
  {
    id: 1,
    name: "Samar Al-Otaibi",
    phone: "+966 50 123 4567",
    status: "AI handling",
    message: "Hello, peace be upon you.",
    preview: "Welcome! How can I help you with inquiries about our courses?",
    time: "10:14",
    unread: 0,
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-5.png",
  },
  {
    id: 2,
    name: "Fahad Al-Shammari",
    phone: "+966 50 234 6789",
    status: "escalated",
    message: "I want to know the course dates",
    preview: "I will send you the available dates and the courses closest to your needs.",
    time: "09:32",
    unread: 2,
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-3.png",
  },
  {
    id: 3,
    name: "Noura Al-Qahtani",
    phone: "+966 55 987 6543",
    status: "Lead saved",
    message: "Done, the registration is complete, God willing.",
    preview: "Thank you! Your details have been saved and the team will contact you soon.",
    time: "08:18",
    unread: 0,
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-4.png",
  },
  {
    id: 4,
    name: "+966 56 123 4567",
    phone: "+966 56 123 4567",
    status: "Voice message",
    message: "Voice message",
    preview: "🎤 Voice message - Click to listen.",
    time: "07:05",
    unread: 1,
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-2.png",
  },
  {
    id: 5,
    name: "Mohammed Al-Zahrani",
    phone: "+966 50 333 2211",
    status: "AI handling",
    message: "Thank you very much",
    preview: "Our team will be back in touch with you regarding your question.",
    time: "06:48",
    unread: 0,
    avatar: "https://cdn.shadcnstudio.com/ss-assets/avatar/avatar-1.png",
  },
]


interface SidebarProps {
  selectedId: number | null;
  onSelect: (id: number) => void;
}

function ConversationSidebar({ selectedId, onSelect }: SidebarProps) {
  return (
    <div className="flex h-full flex-col gap-4">
      <div className="flex-1 overflow-hidden rounded-xl border border-border bg-card/90">
        <div className="border-b border-border px-4 py-4 space-y-3">
          <p className="text-sm font-medium text-foreground">Recent chats</p>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search chats"
              className="pl-9 pr-3 h-9 bg-muted/50 border-none focus-visible:ring-purple-500"
            />
          </div>
          <div className="flex flex-wrap gap-1">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                className={cn(
                  "rounded-full border px-2 py-1 text-[11px] font-medium transition",
                  index === 0 ? "bg-purple-100 text-purple-700" : "bg-muted text-muted-foreground"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-y-auto px-2 py-2 space-y-1">
          {chats.map((chat) => {
            const isActive = selectedId === chat.id;
            return (
              <button
                key={chat.id}
                onClick={() => onSelect(chat.id)}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-2xl p-4 text-left transition",
                  isActive ? "bg-purple-600 shadow-lg" : "hover:bg-muted/50"
                )}
              >
                {/* ... (Keep Avatar and Badge logic exactly as you had it before) ... */}
                <div className="relative shrink-0">
                  <Avatar className="h-10 w-10 border border-black/5">
                    <AvatarImage src={chat.avatar} />
                    <AvatarFallback className={isActive ? "bg-purple-400 text-white" : ""}>
                       {chat.name[0]}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="min-w-0 flex-1">
                  <p className={cn("truncate text-sm font-bold", isActive ? "text-white" : "text-foreground")}>
                    {chat.name}
                  </p>
                  <p className={cn("truncate text-[11px] mt-2", isActive ? "text-purple-50" : "text-muted-foreground")}>
                    {chat.preview}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ConversationSidebar