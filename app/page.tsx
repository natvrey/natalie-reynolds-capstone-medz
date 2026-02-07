import { ActionButton } from "@/components/action-button"
import { AlarmButton } from "@/components/alarm-button"
import Image from "next/image"
import {
  Users,
  UserPlus,
  Stethoscope,
  HeartPulse,
  Settings,
  ShieldPlus,
} from "lucide-react"
import Link from "next/link"

function ToolCard({
  icon: Icon,
  label,
  href,
  external,
}: {
  icon: React.ElementType
  label: string
  href: string
  external?: boolean
}) {
  const content = (
    <div className="flex flex-col items-center gap-2.5 rounded-2xl bg-white p-4 shadow-sm transition-all hover:shadow-md active:scale-95">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50">
        <Icon className="h-6 w-6 text-blue-500" />
      </div>
      <span className="text-center text-xs font-medium text-foreground leading-tight">
        {label}
      </span>
    </div>
  )

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return <Link href={href}>{content}</Link>
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Gradient Hero */}
      <div className="relative overflow-hidden rounded-b-[2rem] bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 px-6 pb-8 pt-10">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-white/5" />

        <div className="relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Image
                src="/images/logo.jpg"
                alt="Medz+ logo"
                width={36}
                height={36}
                className="rounded-lg"
              />
              <span className="text-xl font-bold text-white">Medz+</span>
            </div>
            <Link href="/instructions" aria-label="App settings">
              <Settings className="h-5 w-5 text-white/70 hover:text-white" />
            </Link>
          </div>

          <div className="mt-8">
            <h1 className="text-balance text-3xl font-extrabold leading-tight text-white">
              Stay Safe,
              <br />
              Act Fast!
            </h1>
          </div>
        </div>
      </div>

      {/* Emergency Buttons */}
      <div className="-mt-4 space-y-3 px-5">
        <ActionButton variant="call-911" />
        <AlarmButton />
        <ActionButton variant="call-contact" />
        <ActionButton variant="text-contact" />
      </div>

      {/* Tools & Profiles Grid */}
      <div className="mt-8 px-5 pb-4">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Tools & Profiles
        </h2>
        <div className="grid grid-cols-3 gap-3">
          <ToolCard icon={Users} label="View All Profiles" href="/profiles" />
          <ToolCard
            icon={UserPlus}
            label="Create a Profile"
            href="/profiles/create"
          />
          <ToolCard
            icon={Stethoscope}
            label="Main Diagnoses"
            href="/profiles"
          />
          <ToolCard
            icon={ShieldPlus}
            label="Create a Record"
            href="/profiles/create"
          />
          <ToolCard
            icon={HeartPulse}
            label="First Aid"
            href="https://www.redcross.org.uk/first-aid/learn-first-aid"
            external
          />
          <ToolCard
            icon={Settings}
            label="App Guide"
            href="/instructions"
          />
        </div>
      </div>
    </div>
  )
}
