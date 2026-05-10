// import React from 'react'
// import ChatHeader from './chat-header'
// import ChatMessages from './chat-messages'
// import ChatInput from './chat-input'

// function ConversationContent() {
//   return (
//     <div className='flex flex-col h-[calc(100vh-6rem)] '>
//         <ChatHeader />
//         {/* flex-1 allows ChatMessages to fill available space and trigger overflow */}
//         <div className="flex-1 min-h-0"> 
//           <ChatMessages />
//         </div>
//         <ChatInput />
//     </div>
//   )
// }

// export default ConversationContent



import React from 'react'
import ChatHeader from './chat-header'
import ChatMessages from './chat-messages'
import ChatInput from './chat-input'
import { ChevronLeft } from 'lucide-react'

interface ContentProps {
  chatId: number;
  onBack: () => void;
}

function ConversationContent({ chatId, onBack }: ContentProps) {
  return (
    <div className='flex flex-col h-full bg-background'>
        <div className="flex items-center border-b border-border px-2">
            {/* Mobile-only Back Button */}
            <button 
              onClick={onBack}
              className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors mr-1"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <div className="flex-1">
                <ChatHeader />
            </div>
        </div>
        
        <div className="flex-1 min-h-0 bg-slate-50/30"> 
          <ChatMessages />
        </div>
        
        <div className="p-2 bg-background border-t">
          <ChatInput />
        </div>
    </div>
  )
}

export default ConversationContent