import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { PageHeader } from "@/components/page-header"
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
    <div className="flex flex-col bg-gradient-to-b from-purple-50 to-background min-h-screen">
      <PageHeader title="Single Profile" backHref="/profiles" />

      <div className="px-5 pb-8">
        {/* Avatar and Name Card */}
        <div className="mb-5 flex flex-col items-center gap-3 rounded-2xl bg-white p-6 shadow-sm">
          <Image
            src={profile.photo}
            alt={`${profile.firstName}'s photo`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="text-center">
            <h2 className="text-xl font-bold text-foreground">
              {profile.firstName}
            </h2>
            <p className="text-xs text-muted-foreground">
              {profile.firstName} {profile.middleName} {profile.lastName}
            </p>
          </div>
          <div className="flex gap-8 pt-2">
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                DOB
              </p>
              <p className="text-sm font-bold text-purple-600">
                {profile.birthday}
              </p>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                Blood Type
              </p>
              <p className="text-sm font-bold text-purple-600">
                {profile.bloodType || "-"}
              </p>
            </div>
          </div>
        </div>

        {/* Medical Details */}
        <div className="space-y-4">
          <InfoSection title="Conditions" value={profile.conditions} />
          <InfoSection title="Medications" value={profile.medications} />
          <InfoSection title="Allergies" value={profile.allergies} />
          {profile.doctor && (
            <InfoSection title="Family Doctor" value={profile.doctor} />
          )}
          <InfoSection title="Emergency Contacts" value={profile.contacts} />
          {profile.notes && (
            <InfoSection title="Other Notes" value={profile.notes} />
          )}
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3">
          <DeleteProfileButton profileId={profile.id} />
          <Link
            href="/"
            className="block w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-center text-sm font-bold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

function InfoSection({ title, value }: { title: string; value: string }) {
  const items = value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)

  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <h3 className="mb-2 text-sm font-bold text-foreground">{title}</h3>
      {items.length > 1 ? (
        <ul className="space-y-1">
          {items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-muted-foreground">{value || "-"}</p>
      )}
    </div>
  )
}
