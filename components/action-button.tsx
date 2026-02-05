"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  HelpCircle,
  UserPlus,
  Users,
  Heart,
  Phone,
  MessageSquare,
  Volume2,
  VolumeX,
  Siren,
  ChevronRight,
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
    description: "Learn the basics",
    href: "/instructions",
    style: "default",
  },
  "create-profile": {
    icon: UserPlus,
    label: "Create a Profile",
    description: "Add medical info",
    href: "/profiles/create",
    style: "default",
  },
  "view-profiles": {
    icon: Users,
    label: "View All Profiles",
    description: "Manage saved profiles",
    href: "/profiles",
    style: "default",
  },
  "first-aid": {
    icon: Heart,
    label: "First Aid Instructions",
    description: "Red Cross guide",
    href: "https://www.redcross.org.uk/first-aid/learn-first-aid",
    external: true,
    style: "default",
  },
  "call-911": {
    icon: Siren,
    label: "Call 911",
    description: "Emergency services",
    href: "/voice",
    style: "emergency",
  },
  "call-contact": {
    icon: Phone,
    label: "Call Emergency Contact",
    description: "Quick dial",
    href: "/voice",
    style: "contact",
  },
  "text-contact": {
    icon: MessageSquare,
    label: "Text Emergency Contact",
    description: "Send a message",
    href: "/voice",
    style: "contact",
  },
  alarm: {
    icon: Volume2,
    label: "Activate HELP! Alarm",
    description: "Sound alert",
    style: "alarm",
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
    "group relative flex w-full items-center gap-4 rounded-xl p-4 text-left transition-all duration-200",
    "border border-border/50 bg-card shadow-sm",
    "hover:shadow-md hover:border-border",
    "active:scale-[0.99]",
    {
      "hover:bg-secondary/50": config.style === "default",
      "bg-destructive/5 border-destructive/20 hover:bg-destructive/10 hover:border-destructive/30": config.style === "emergency",
      "bg-primary/5 border-primary/20 hover:bg-primary/10 hover:border-primary/30": config.style === "contact",
      "bg-warning/5 border-warning/20 hover:bg-warning/10 hover:border-warning/30": config.style === "alarm",
    }
  )

  const iconClasses = cn(
    "flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg transition-colors",
    {
      "bg-secondary text-foreground group-hover:bg-secondary/80": config.style === "default",
      "bg-destructive/10 text-destructive": config.style === "emergency",
      "bg-primary/10 text-primary": config.style === "contact",
      "bg-amber-500/10 text-amber-600": config.style === "alarm",
    }
  )

  const content = (
    <>
      <div className={iconClasses}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-foreground">
          {variant === "alarm" && isPlaying ? "Stop Alarm" : config.label}
        </p>
        <p className="text-sm text-muted-foreground">
          {variant === "alarm" && isPlaying ? "Tap to silence" : config.description}
        </p>
      </div>
      <ChevronRight className="h-5 w-5 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5" />
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
