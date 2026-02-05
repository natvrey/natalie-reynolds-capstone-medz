import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface ProfileSummary {
  id: string
  firstName: string
  photo: string
}

async function getProfiles(): Promise<ProfileSummary[]> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  try {
    const res = await fetch(`${baseUrl}/api/profiles`, {
      cache: "no-store",
    })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function ProfilesPage() {
  const profiles = await getProfiles()

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-violet-600 md:text-4xl">
            All Profiles
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-violet-400" />
        </div>

        {profiles.length === 0 ? (
          <Card className="mx-auto max-w-md rounded-2xl border-violet-200 bg-white/80">
            <CardContent className="p-8 text-center">
              <p className="text-violet-600">No profiles found.</p>
              <Link
                href="/profiles/create"
                className="mt-4 inline-block rounded-xl bg-violet-500 px-6 py-2 font-medium text-white hover:bg-violet-600"
              >
                Create your first profile
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {profiles.map((profile) => (
              <Link key={profile.id} href={`/profiles/${profile.id}`}>
                <Card className="cursor-pointer rounded-2xl border-violet-200 bg-white/80 transition-all hover:scale-[1.02] hover:shadow-lg">
                  <CardContent className="flex items-center gap-4 p-4">
                    <Image
                      src={profile.photo}
                      alt={`${profile.firstName}'s avatar`}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                    <span className="text-lg font-medium text-violet-700">
                      {profile.firstName}
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-xl bg-violet-100 px-6 py-2 font-medium text-violet-700 hover:bg-violet-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
