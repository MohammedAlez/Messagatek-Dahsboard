import React from 'react'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from './ui/card'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Separator } from './ui/separator'
import { ArrowRight, MessageCircle } from 'lucide-react'

function UnansweredQuestions() {
  // Dummy data - replace with actual data source
  const leads = [
    {
      id: 1,
      name: 'John Doe',
      photo: '/avatars/john.jpg', // Replace with actual image path
      interest: 'Web Development',
      gender: 'Male',
      status: 'new'
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: '/avatars/jane.jpg',
      interest: 'Data Science',
      gender: 'Female',
      status: 'contacted'
    },
    {
      id: 3,
      name: 'Bob Johnson',
      photo: '/avatars/bob.jpg',
      interest: 'UX Design',
      gender: 'Male',
      status: 'enrolled'
    }
  ]

  return (
    <div className=''>
        <Card > 
            <CardHeader className=''>
                <CardTitle>Unanswered Questions</CardTitle>
                <CardAction className='text-sm group  font-medium text-purple-600 cursor-pointer flex items-center gap-1'>
                    view all
                    <ArrowRight className='size-3! group-hover:translate-x-1 transition' />    
                </CardAction>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 ">
                    {leads.map((lead, index) => (
                        <React.Fragment key={lead.id}>
                            <div className="flex items-center justify-between ">
                                <div className="grid grid-cols-1 gap-3">
                                    {/* <Avatar size="default">
                                        <AvatarImage src={lead.photo} alt={lead.name} />
                                        <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar> */}
                                    {/* <div>
                                        <div className="flex items-center gap-2">
                                            <p className="font-medium text-sm">{lead.name}</p>
                                            <Badge className={`text-xs ${
                                                lead.status === 'new' 
                                                    ? 'bg-green-100 text-green-800 border-green-200' 
                                                    : lead.status === 'contacted' 
                                                    ? 'bg-blue-100 text-blue-800 border-blue-200' 
                                                    : 'bg-purple-100 text-purple-800 border-purple-200'
                                            }`}>
                                                {lead.status}
                                            </Badge>
                                        </div>
                                        <p className="text-xs text-muted-foreground">
                                            {lead.interest} • {lead.gender}
                                        </p>
                                    </div> */}
                                    <CardTitle className="text-sm font-medium">
                                        +966 55 123 4567
                                    </CardTitle>
                                    <p className="text-xs text-muted-foreground">
                                        Interested in {lead.interest} ....
                                    </p>
                                </div>
                                <div className="flex flex-col items-end gap-2">
                                    <p className="text-xs text-muted-foreground">
                                        2 mins ago
                                    </p>
                                    <Button size="sm" variant="link" className="text-sm  text-purple-400 bg-none hover:bg-none border-none hover:text-purple-600 cursor-pointer">
                                        <MessageCircle className="ml-2 h-4 w-4" />
                                        Open Chat
                                    </Button>                               
                                </div>
                            </div>
                            {index < leads.length - 1 && <Separator />}
                        </React.Fragment>
                    ))}
                </div>
            </CardContent>
        </Card>

    </div>
  )
}

export default UnansweredQuestions