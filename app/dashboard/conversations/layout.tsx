import ConversationsWrapper from "@/components/conversations-wrapper"
import { SiteHeader } from "@/components/site-header"
import { ChatService } from "@/services/chat.service"

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const conversations = await ChatService.getConversations()

  return (
    <div className="">
        <SiteHeader title="Conversations" />
        <ConversationsWrapper initialChats={conversations}>
            {children}
        </ConversationsWrapper>
    </div>
    
  )
}