import Link from "next/link"
import { PageHeader } from "@/components/page-header"
import {
  Phone,
  MessageSquare,
  Volume2,
  ClipboardList,
  HeartPulse,
} from "lucide-react"

export const metadata = {
  title: "Instructions | Medz+",
}

export default function InstructionsPage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-50 to-background min-h-screen">
      <PageHeader title="About Medz+" />

      <div className="space-y-5 px-5 pb-8">
        {/* About Section */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-foreground">
            About this App
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-muted-foreground">
            Medical emergencies are unpredictable. Ambulances take patients to
            the ER{" "}
            <span className="font-semibold text-purple-600">
              over 16 million times per year
            </span>{" "}
            in the US.
          </p>
          <p className="mb-2 text-sm font-medium text-foreground">
            During these emergencies:
          </p>
          <ol className="mb-4 space-y-1.5 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="shrink-0 font-bold text-purple-500">1.</span>
              Someone may not be immediately available to assist you.
            </li>
            <li className="flex gap-2">
              <span className="shrink-0 font-bold text-purple-500">2.</span>
              Bystanders may not be aware that you need help.
            </li>
          </ol>
        </div>

        {/* Features */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 text-base font-bold text-foreground">
            This app allows you to:
          </h2>
          <div className="space-y-3">
            <FeatureRow
              icon={Phone}
              text="Call 911 & your emergency contacts"
            />
            <FeatureRow
              icon={MessageSquare}
              text="Text your emergency contacts"
            />
            <FeatureRow
              icon={Volume2}
              text="Activate a distress alarm to alert bystanders"
            />
            <FeatureRow
              icon={ClipboardList}
              text="Store brief medical info for emergency responders"
            />
            <FeatureRow
              icon={HeartPulse}
              text="Access First Aid information"
            />
          </div>
        </div>

        {/* How to use */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-foreground">
            How to Use It
          </h2>
          <p className="mb-2 text-sm leading-relaxed text-muted-foreground">
            This app is very easy to use! The home page has action buttons.
            Simply tap on a button to access that feature.
          </p>
          <p className="text-sm text-muted-foreground">
            Watch the{" "}
            <span className="font-semibold text-purple-600">
              YouTube tutorial
            </span>{" "}
            for a step-by-step guide.
          </p>
        </div>

        {/* Back button */}
        <Link
          href="/"
          className="block w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

function FeatureRow({
  icon: Icon,
  text,
}: {
  icon: React.ElementType
  text: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100">
        <Icon className="h-4 w-4 text-purple-600" />
      </div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  )
}
