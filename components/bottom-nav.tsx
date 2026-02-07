"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Bell, Settings, ClipboardList, User } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/voice", icon: Bell, label: "Alerts" },
  { href: "/instructions", icon: Settings, label: "Info" },
  { href: "/profiles", icon: ClipboardList, label: "Profiles" },
  { href: "/profiles/create", icon: User, label: "Create" },
]

export function BottomNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-1/2 z-50 w-full max-w-lg -translate-x-1/2" role="navigation" aria-label="Main navigation">
      <div className="mx-3 mb-3 flex items-center justify-around rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 px-2 py-2.5 shadow-lg shadow-purple-500/25">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-all",
                isActive
                  ? "bg-white/20 text-white"
                  : "text-white/60 hover:text-white/90"
              )}
              aria-current={isActive ? "page" : undefined}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
