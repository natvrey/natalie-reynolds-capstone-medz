import { ActionButton } from "@/components/action-button"
import { AlarmButton } from "@/components/alarm-button"

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-140px)] px-4 py-8 md:py-12">
      <div className="mx-auto max-w-2xl">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight md:text-5xl">
            Your emergency
            <br />
            <span className="text-destructive">medical companion</span>
          </h1>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Fast access to help, contacts, and first aid when you need it most.
          </p>
        </div>

        {/* Quick Actions Grid */}
        <div className="space-y-8">
          {/* Emergency Section */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Emergency
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-3">
              <ActionButton variant="call-911" />
              <ActionButton variant="call-contact" />
              <ActionButton variant="text-contact" />
              <AlarmButton />
            </div>
          </section>

          {/* Tools Section */}
          <section>
            <div className="mb-3 flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tools & Profiles
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="space-y-3">
              <ActionButton variant="view-profiles" />
              <ActionButton variant="create-profile" />
              <ActionButton variant="first-aid" />
              <ActionButton variant="app-info" />
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
