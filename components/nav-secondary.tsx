"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    name: string
    url: string
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent>
        <SidebarGroupLabel>Account</SidebarGroupLabel>
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url
            return (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className={`p-5 py-6 rounded-xl cursor-pointer ${
                      isActive
                        ? "bg-purple-700 text-white hover:bg-transparent"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {item.icon && <item.icon className="w-5 h-5 size-5!" />}
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
