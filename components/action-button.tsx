"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  Phone,
  MessageSquare,
  Volume2,
  VolumeX,
  Siren,
  ChevronRight,
} from "lucide-react"

interface ActionButtonProps {
  variant: "call-911" | "call-contact" | "text-contact" | "alarm"
  isPlaying?: boolean
  onClick?: () => void
}

const buttonConfig = {
  "call-911": {
    icon: Siren,
    label: "Call 911",
    href: "/voice",
    bg: "bg-red-500 hover:bg-red-600",
    iconBg: "bg-white/20",
  },
  "call-contact": {
    icon: Phone,
    label: "Call/Text Emergency Contact",
    href: "/voice",
    bg: "bg-purple-500 hover:bg-purple-600",
    iconBg: "bg-white/20",
  },
  "text-contact": {
    icon: MessageSquare,
    label: "Call/Text Emergency Contact",
    href: "/voice",
    bg: "bg-purple-500 hover:bg-purple-600",
    iconBg: "bg-white/20",
  },
  alarm: {
    icon: Volume2,
    label: "Activate HELP! Alarm",
    bg: "bg-amber-500 hover:bg-amber-600",
    iconBg: "bg-white/20",
  },
}

export function ActionButton({
  variant,
  isPlaying,
  onClick,
}: ActionButtonProps) {
  const config = buttonConfig[variant]
  const Icon = variant === "alarm" && isPlaying ? VolumeX : config.icon
  const label =
    variant === "alarm" && isPlaying ? "Stop Alarm" : config.label

  const inner = (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-white shadow-md transition-all active:scale-[0.98]",
        config.bg
      )}
    >
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
          config.iconBg
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
      <span className="flex-1 text-sm font-semibold">{label}</span>
      <ChevronRight className="h-4 w-4 text-white/60" />
    </div>
  )

  if (variant === "alarm" || onClick) {
    return (
      <button onClick={onClick} className="w-full text-left">
        {inner}
      </button>
    )
  }

  return (
    <Link href={"href" in config ? config.href : "/"} className="block">
      {inner}
    </Link>
  )
}
