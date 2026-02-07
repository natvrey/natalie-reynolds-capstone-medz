import Link from "next/link"
import Image from "next/image"
import { PageHeader } from "@/components/page-header"
import { ChevronRight } from "lucide-react"

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
    <div className="flex flex-col bg-gradient-to-b from-purple-50 to-background min-h-screen">
      <PageHeader title="All Profiles" />

      <div className="px-5 pb-8">
        {profiles.length === 0 ? (
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-purple-100">
              <Image
                src="/images/avatar-placeholder-medz.png"
                alt="No profiles"
                width={48}
                height={48}
                className="rounded-full opacity-50"
              />
            </div>
            <p className="text-muted-foreground">No profiles found.</p>
            <Link
              href="/profiles/create"
              className="rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-95"
            >
              Create your first profile
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {profiles.map((profile) => (
              <Link key={profile.id} href={`/profiles/${profile.id}`}>
                <div className="flex flex-col items-center gap-3 rounded-2xl bg-white p-5 shadow-sm transition-all hover:shadow-md active:scale-95">
                  <Image
                    src={profile.photo}
                    alt={`${profile.firstName}'s avatar`}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-foreground">
                      {profile.firstName}
                    </span>
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
