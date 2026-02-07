import { ProfileForm } from "@/components/profile-form"
import { PageHeader } from "@/components/page-header"
import { AlertTriangle } from "lucide-react"

export const metadata = {
  title: "Create a Profile | Medz+",
}

export default function CreateProfilePage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-50 to-background min-h-screen">
      <PageHeader title="Create Profile" backHref="/profiles" />

      <div className="px-5 pb-8">
        {/* Warning */}
        <div className="mb-6 flex gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4">
          <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500 mt-0.5" />
          <p className="text-xs leading-relaxed text-amber-800">
            This application creates demo profiles. Please don&apos;t input real
            medical data -- any profiles you create will be visible to all
            visitors.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}
