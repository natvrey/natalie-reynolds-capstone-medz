import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "profiles.json")

interface Profile {
  id: string
  firstName: string
  lastName: string
  photo: string
  [key: string]: unknown
}

function readProfiles(): Profile[] {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

function writeProfiles(profiles: Profile[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(profiles, null, 2))
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  const profiles = readProfiles()
  const profile = profiles.find((p) => p.id === id)

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 })
  }

  return NextResponse.json(profile)
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  let profiles = readProfiles()
  const foundProfile = profiles.find((p) => p.id === id)

  if (!foundProfile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 })
  }

  profiles = profiles.filter((p) => p.id !== id)
  writeProfiles(profiles)

  return new NextResponse(null, { status: 204 })
}
