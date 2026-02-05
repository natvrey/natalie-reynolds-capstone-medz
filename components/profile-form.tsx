"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ProfileForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get("firstName"),
      middleName: formData.get("middleName"),
      lastName: formData.get("lastName"),
      gender: formData.get("gender"),
      birthday: formData.get("birthday"),
      bloodType: formData.get("bloodType"),
      height: formData.get("height"),
      weight: formData.get("weight"),
      conditions: formData.get("conditions"),
      medications: formData.get("medications"),
      allergies: formData.get("allergies"),
      doctor: formData.get("doctor"),
      contacts: formData.get("contacts"),
      notes: formData.get("notes"),
    }

    try {
      const res = await fetch("/api/profiles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        alert("Profile created successfully!")
        router.push("/profiles")
      } else {
        const error = await res.json()
        alert(error.error || "Failed to create profile")
      }
    } catch {
      alert("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    if (confirm("Are you sure you want to cancel?")) {
      router.push("/")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Basic Info Section */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="firstName">First name *</Label>
            <Input
              id="firstName"
              name="firstName"
              required
              minLength={2}
              placeholder="Enter your first name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="middleName">Middle name</Label>
            <Input
              id="middleName"
              name="middleName"
              placeholder="Enter your middle name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="lastName">Last name *</Label>
            <Input
              id="lastName"
              name="lastName"
              required
              minLength={2}
              placeholder="Enter your last name"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="gender">Gender</Label>
            <Input
              id="gender"
              name="gender"
              placeholder="This field is optional"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="birthday">Date of Birth *</Label>
            <Input
              id="birthday"
              name="birthday"
              required
              minLength={4}
              placeholder="MM/DD/YYYY"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="bloodType">Blood Type</Label>
            <Input
              id="bloodType"
              name="bloodType"
              placeholder="This field is optional"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="height">Height</Label>
            <Input
              id="height"
              name="height"
              placeholder="e.g. 5 feet 11 inches, OR 180cm"
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="weight">Weight</Label>
            <Input
              id="weight"
              name="weight"
              placeholder="e.g. 160lbs, OR 72.5kg"
              className="mt-1"
            />
          </div>
        </div>

        {/* Medical Info Section */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="conditions">Medical conditions *</Label>
            <Textarea
              id="conditions"
              name="conditions"
              required
              minLength={2}
              placeholder="e.g. Diabetes, Epilepsy, Asthma"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="medications">Medications *</Label>
            <Textarea
              id="medications"
              name="medications"
              required
              minLength={4}
              placeholder="List all medications e.g. Levothyroxine 50mcg, Insulin."
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="allergies">Allergies *</Label>
            <Textarea
              id="allergies"
              name="allergies"
              required
              minLength={2}
              placeholder="e.g. Peanuts (hives), Seafood (anaphylaxis). Type 'none' if you have no allergies"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="doctor">Family doctor</Label>
            <Textarea
              id="doctor"
              name="doctor"
              placeholder="e.g. Dr. Joe Soe, Apex Medical, 9-2 Molynes Rd, Kingston, Jamaica, ph: +1 876-123-1234"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="contacts">Emergency contacts *</Label>
            <Textarea
              id="contacts"
              name="contacts"
              required
              minLength={2}
              placeholder="Name & ph# of your emergency contact(s)"
              className="mt-1"
              rows={3}
            />
          </div>

          <div>
            <Label htmlFor="notes">Other notes</Label>
            <Textarea
              id="notes"
              name="notes"
              placeholder="e.g. Please call 911 & then call/text emergency contact(s)"
              className="mt-1"
              rows={3}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <Button
          type="button"
          variant="outline"
          onClick={handleCancel}
          className="min-w-[120px] border-red-300 text-red-600 hover:bg-red-50"
        >
          CANCEL
        </Button>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-w-[120px] bg-violet-600 hover:bg-violet-700"
        >
          {isSubmitting ? "Saving..." : "SAVE"}
        </Button>
      </div>
    </form>
  )
}
