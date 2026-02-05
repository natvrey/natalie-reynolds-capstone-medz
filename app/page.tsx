import { ActionButton } from "@/components/action-button"
import { AlarmButton } from "@/components/alarm-button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-violet-600 md:text-4xl">
            Welcome to Medz+
          </h1>
          <p className="text-base text-pink-600 md:text-lg">
            Your emergency medical companion. Fast access to help, contacts, and
            first aid.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Information & Profiles Card */}
          <Card className="overflow-hidden rounded-2xl border-violet-200 bg-violet-50/80 shadow-lg">
            <CardContent className="flex flex-col gap-4 p-6">
              <h2 className="sr-only">Information and Profiles</h2>
              <ActionButton variant="app-info" />
              <ActionButton variant="create-profile" />
              <ActionButton variant="view-profiles" />
              <ActionButton variant="first-aid" />
            </CardContent>
          </Card>

          {/* Emergency Actions Card */}
          <Card className="overflow-hidden rounded-2xl border-pink-200 bg-pink-50/80 shadow-lg">
            <CardContent className="flex flex-col gap-4 p-6">
              <h2 className="sr-only">Emergency Actions</h2>
              <ActionButton variant="call-911" />
              <ActionButton variant="call-contact" />
              <ActionButton variant="text-contact" />
              <AlarmButton />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
