"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Bot, Sparkles, BookA, Languages } from "lucide-react"

export function SystemPrompt() {
  return (
    <Card className="h-full flex flex-col border-border bg-card text-card-foreground shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
            <Bot className="h-4 w-4 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Agent Identity</CardTitle>
            
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 flex-1">
        {/* Top Row: Name and Language */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-2 flex-1">
            <Label htmlFor="agent-name" className="text-sm font-medium flex items-center gap-2">
              Agent Name
            </Label>
            <Input 
              id="agent-name" 
              placeholder="e.g. Sales Assistant" 
              defaultValue="Travel Assistant"
              className="bg-background border-input p-5"
            />
          </div>

          <div className="space-y-2 flex-1">
            <Label htmlFor="language" className="text-sm font-medium flex items-center gap-2">
              <Languages className="h-3.5 w-3.5 text-muted-foreground" />
              Primary Language
            </Label>
            <Select defaultValue="en-us" >
              <SelectTrigger id="language" className="bg-background border-input p-5 w-full">
                <SelectValue placeholder="Select language" />
              </SelectTrigger>
              <SelectContent className="p-2">
                <SelectItem className='p-2.5 w-full' value="en-us">English (US)</SelectItem>
                <SelectItem className='p-2.5 w-full' value="ar-gulf">Arabic (Gulf Dialect)</SelectItem>
                <SelectItem className='p-2.5 w-full' value="ar-msa">Arabic (Modern Standard)</SelectItem>
                <SelectItem className='p-2.5 w-full' value="es">Spanish</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tone of Voice */}
        <div className="space-y-2">
          <Label htmlFor="tone" className="text-sm font-medium flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-muted-foreground" />
            Tone of Voice
          </Label>
          <Select defaultValue="professional">
            <SelectTrigger id="tone" className="bg-background border-input p-5">
              <SelectValue placeholder="Select tone" />
            </SelectTrigger>
            <SelectContent className="p-2">
              <SelectItem className='p-2.5 w-full' value="professional">Professional & Welcoming</SelectItem>
              <SelectItem className='p-2.5 w-full' value="casual">Casual & Friendly</SelectItem>
              <SelectItem className='p-2.5 w-full' value="direct">Direct & Concise</SelectItem>
              <SelectItem className='p-2.5 w-full' value="enthusiastic">Enthusiastic & Energetic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* System Prompt Textarea */}
        <div className="space-y-2 flex-1 flex flex-col">
          <Label htmlFor="system-prompt" className="text-sm font-medium flex items-center justify-between">
            <span className="flex items-center gap-2">
              <BookA className="h-3.5 w-3.5 text-muted-foreground" />
              System Prompt
            </span>
            <span className="text-xs text-muted-foreground font-normal">Supports markdown</span>
          </Label>
          <Textarea 
            id="system-prompt" 
            placeholder="You are a helpful AI assistant..." 
            className="flex-1 min-h-[250px] resize-none bg-background border-input font-mono text-sm leading-relaxed"
            defaultValue="You are a helpful AI assistant for a business. Your goal is to qualify leads, answer frequently asked questions using the provided knowledge base, and maintain a polite, professional demeanor. Do not invent pricing or services."
          />
        </div>
      </CardContent>
    </Card>
  )
}