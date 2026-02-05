import { NextResponse } from "next/server"
import { v4 as uuid } from "uuid"
import fs from "fs"
import path from "path"

const dataFilePath = path.join(process.cwd(), "data", "profiles.json")

function readProfiles() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8")
    return JSON.parse(data)
  } catch {
    return []
  }
}

function writeProfiles(profiles: unknown[]) {
  fs.writeFileSync(dataFilePath, JSON.stringify(profiles, null, 2))
}

export async function GET() {
  const profiles = readProfiles()

  // Return only summary data for listing (exclude sensitive/large fields)
  const summaryProfiles = profiles.map((profile: Record<string, unknown>) => ({
    id: profile.id,
    firstName: profile.firstName,
    photo: profile.photo,
  }))

  return NextResponse.json(summaryProfiles)
}

export async function POST(request: Request) {
  const body = await request.json()

  // Validate required fields
  if (
    !body.firstName ||
    !body.lastName ||
    !body.birthday ||
    !body.conditions ||
    !body.medications ||
    !body.allergies ||
    !body.contacts
  ) {
    return NextResponse.json(
      {
        error:
          "Please make sure to include your first & last name, DOB, conditions, medications, allergies and emergency contact(s)",
      },
      { status: 400 }
    )
  }

  const newProfile = {
    photo: "/images/avatar-placeholder-medz.png",
    firstName: body.firstName,
    middleName: body.middleName || "",
    lastName: body.lastName,
    gender: body.gender || "",
    birthday: body.birthday,
    bloodType: body.bloodType || "",
    height: body.height || "",
    weight: body.weight || "",
    conditions: body.conditions,
    medications: body.medications,
    allergies: body.allergies,
    doctor: body.doctor || "",
    contacts: body.contacts,
    notes: body.notes || "",
    timestamp: Date.now(),
    id: uuid(),
  }

  const profiles = readProfiles()
  profiles.push(newProfile)
  writeProfiles(profiles)

  return NextResponse.json(newProfile, { status: 201 })
}
