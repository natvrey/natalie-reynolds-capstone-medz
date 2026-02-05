import { ProfileForm } from "@/components/profile-form"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Create a Profile | Medz+",
}

export default function CreateProfilePage() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-violet-600 md:text-4xl">
            Add Profile Details Below
          </h1>
          <p className="text-sm text-violet-500">
            Fields marked with an asterisk (*) are required
          </p>
          <p className="mt-2 text-sm text-pink-600">
            Please don&apos;t input your real info. This is a demo site &
            created profiles will be available to all visitors.
          </p>
        </div>

        <Card className="rounded-2xl border-violet-200 bg-white/90">
          <CardContent className="p-6">
            <ProfileForm />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
