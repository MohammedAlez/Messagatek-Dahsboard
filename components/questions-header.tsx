import React from 'react'
import { Search, Download } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function QuestionsHeader() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 py-4">
      {/* Search Input */}
      <div className="relative flex w-full max-w-sm ">
        <Input 
          placeholder="Search name or number" 
          className="p-5 flex-1 block pr-11 bg-background focus-visible:ring-1 focus-visible:ring-indigo-600"
        />
        <button className=" absolute right-1.5 top-1.25 size-5 h-8 cursor-pointer w-8 flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-lg">
            <Search className="size-5  text-slate-100" />
        </button>
      </div>

      <div className="flex w-full lg:w-fit items-center justify-between gap-3">
        {/* Date Filter */}
        <Select >
            <SelectTrigger className="w-full w-48 p-5">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent className='p-2'>
                <SelectGroup className='p-1'>
                {/* <SelectLabel></SelectLabel> */}
                <SelectItem className='p-2.5 w-full' value="apple">This Month</SelectItem>
                <SelectItem className='p-2.5 w-full' value="banana">This Week</SelectItem>
                <SelectItem className='p-2.5 w-full' value="blueberry">Today</SelectItem>
                <SelectItem className='p-2.5 w-full' value="grapes">All Time</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>

        {/* Export Button */}
        <Button variant="outline" className="gap-2 bg-indigo-500 text-slate-100 hover:bg-indigo-600 hover:text-slate-100 p-5 rounded-xl cursor-pointer">
          <Download className="h-4 w-4" />
          Export
        </Button>
      </div>
    </div>
  )
}