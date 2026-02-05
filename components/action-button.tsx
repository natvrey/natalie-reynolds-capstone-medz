"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  HelpCircle,
  UserPlus,
  Search,
  Heart,
  Ambulance,
  Phone,
  MessageSquare,
  Volume2,
  VolumeX,
} from "lucide-react"

interface ActionButtonProps {
  variant:
    | "app-info"
    | "create-profile"
    | "view-profiles"
    | "first-aid"
    | "call-911"
    | "call-contact"
    | "text-contact"
    | "alarm"
  isPlaying?: boolean
  onClick?: () => void
}

const buttonConfig = {
  "app-info": {
    icon: HelpCircle,
    label: "How to use this App",
    href: "/instructions",
    className: "bg-violet-100 hover:bg-violet-200 text-violet-700",
  },
  "create-profile": {
    icon: UserPlus,
    label: "Create a Profile",
    href: "/profiles/create",
    className: "bg-violet-100 hover:bg-violet-200 text-violet-700",
  },
  "view-profiles": {
    icon: Search,
    label: "View All Profiles",
    href: "/profiles",
    className: "bg-violet-100 hover:bg-violet-200 text-violet-700",
  },
  "first-aid": {
    icon: Heart,
    label: "First Aid Instructions",
    href: "https://www.redcross.org.uk/first-aid/learn-first-aid",
    external: true,
    className: "bg-violet-100 hover:bg-violet-200 text-violet-700",
  },
  "call-911": {
    icon: Ambulance,
    label: "Call 911",
    href: "/voice",
    className: "bg-red-100 hover:bg-red-200 text-red-700",
  },
  "call-contact": {
    icon: Phone,
    label: "Call Emergency Contact",
    href: "/voice",
    className: "bg-pink-100 hover:bg-pink-200 text-pink-700",
  },
  "text-contact": {
    icon: MessageSquare,
    label: "Text Emergency Contact",
    href: "/voice",
    className: "bg-pink-100 hover:bg-pink-200 text-pink-700",
  },
  alarm: {
    icon: Volume2,
    label: "Activate HELP! alarm",
    className: "bg-orange-100 hover:bg-orange-200 text-orange-700",
  },
}

export function ActionButton({
  variant,
  isPlaying,
  onClick,
}: ActionButtonProps) {
  const config = buttonConfig[variant]
  const Icon = variant === "alarm" && isPlaying ? VolumeX : config.icon

  const baseClasses = cn(
    "flex w-full items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200",
    "shadow-sm hover:shadow-md active:scale-[0.98]",
    config.className
  )

  const content = (
    <>
      <Icon className="h-6 w-6 flex-shrink-0" />
      <span className="text-sm md:text-base">
        {variant === "alarm" && isPlaying ? "Stop alarm" : config.label}
      </span>
    </>
  )

  if (variant === "alarm" || onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {content}
      </button>
    )
  }

  if ("external" in config && config.external) {
    return (
      <a
        href={config.href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {content}
      </a>
    )
  }

  return (
    <Link href={config.href || "/"} className={baseClasses}>
      {content}
    </Link>
  )
}
