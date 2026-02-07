"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface PageHeaderProps {
  title: string
  backHref?: string
}

export function PageHeader({ title, backHref = "/" }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-3 px-5 pb-4 pt-6">
      <Link
        href={backHref}
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/80 shadow-sm transition-colors hover:bg-white"
        aria-label="Go back"
      >
        <ChevronLeft className="h-5 w-5 text-purple-700" />
      </Link>
      <h1 className="flex-1 text-center text-xl font-bold text-purple-700 pr-9">
        {title}
      </h1>
    </div>
  )
}
