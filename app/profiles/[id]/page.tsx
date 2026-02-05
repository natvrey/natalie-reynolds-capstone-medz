import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { DeleteProfileButton } from "@/components/delete-profile-button"

interface Profile {
  id: string
  firstName: string
  middleName?: string
  lastName: string
  photo: string
  gender?: string
  birthday: string
  bloodType?: string
  height?: string
  weight?: string
  conditions: string
  medications: string
  allergies: string
  doctor?: string
  contacts: string
  notes?: string
  timestamp: number
}

async function getProfile(id: string): Promise<Profile | null> {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000"

  try {
    const res = await fetch(`${baseUrl}/api/profiles/${id}`, {
      cache: "no-store",
    })
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

function formatTimestamp(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(diff / 3600000)
  const days = Math.floor(diff / 86400000)

  if (minutes < 1) return "just now"
  if (minutes < 60) return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
  if (hours < 24) return `${hours} hour${hours > 1 ? "s" : ""} ago`
  if (days < 30) return `${days} day${days > 1 ? "s" : ""} ago`
  return new Date(timestamp).toLocaleDateString()
}

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const profile = await getProfile(id)

  if (!profile) {
    notFound()
  }

  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-violet-600 md:text-4xl">
            {profile.firstName}&apos;s Profile
          </h1>
        </div>

        <Card className="rounded-2xl border-violet-200 bg-white/90">
          <CardContent className="p-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Basic Info */}
              <div className="space-y-4">
                <div className="flex justify-center md:justify-start">
                  <Image
                    src={profile.photo}
                    alt={`${profile.firstName}'s photo`}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                </div>

                <InfoRow label="First name" value={profile.firstName} />
                <InfoRow label="Middle name" value={profile.middleName} />
                <InfoRow label="Last name" value={profile.lastName} />
                <InfoRow label="Gender" value={profile.gender} />
                <InfoRow label="Date of Birth" value={profile.birthday} />
                <InfoRow label="Blood Type" value={profile.bloodType} />
                <InfoRow label="Height" value={profile.height} />
                <InfoRow label="Weight" value={profile.weight} />
              </div>

              {/* Medical Info */}
              <div className="space-y-4">
                <InfoRow label="Medical conditions" value={profile.conditions} />
                <InfoRow label="Medications" value={profile.medications} />
                <InfoRow label="Allergies" value={profile.allergies} />
                <InfoRow label="Family doctor" value={profile.doctor} />
                <InfoRow
                  label="Emergency contacts"
                  value={profile.contacts}
                />
                <InfoRow label="Other notes" value={profile.notes} />
                <InfoRow
                  label="Profile last updated"
                  value={formatTimestamp(profile.timestamp)}
                />
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-4">
              <DeleteProfileButton profileId={profile.id} />
              <Link
                href="/"
                className="min-w-[120px] rounded-lg bg-violet-600 px-6 py-2 text-center font-medium text-white hover:bg-violet-700"
              >
                HOME
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value?: string }) {
  return (
    <div>
      <p className="text-sm font-medium text-violet-600">{label}</p>
      <p className="text-gray-700">{value || "-"}</p>
    </div>
  )
}
