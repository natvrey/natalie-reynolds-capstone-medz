"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

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
      {/* Two-column layout: Basic Info | Medical Info */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Basic Info */}
        <div>
          <h3 className="mb-4 text-sm font-bold text-foreground">Basic Info</h3>
          <div className="space-y-3">
            <FormField label="First name" name="firstName" required minLength={2} placeholder="First name" />
            <FormField label="Middle name" name="middleName" placeholder="Middle name" />
            <FormField label="Last name" name="lastName" required minLength={2} placeholder="Last name" />
            <FormField label="Gender" name="gender" placeholder="Gender" />
            <FormField label="Date of Birth" name="birthday" required minLength={4} placeholder="MM/DD/YYYY" />
            <FormField label="Blood Type" name="bloodType" placeholder="Blood type" />
            <FormField label="Height" name="height" placeholder="e.g. 5'11 or 180cm" />
            <FormField label="Weight" name="weight" placeholder="e.g. 160lbs or 72.5kg" />
          </div>
        </div>

        {/* Medical Info */}
        <div>
          <h3 className="mb-4 text-sm font-bold text-foreground">Medical Info</h3>
          <div className="space-y-3">
            <FormField label="Name" name="doctor" placeholder="Patient name" />
            <FormField label="Medical conditions" name="conditions" required minLength={2} placeholder="Medical conditions" multiline />
            <FormField label="Medications" name="medications" required minLength={4} placeholder="Medications" multiline />
            <FormField label="Allergies" name="allergies" required minLength={2} placeholder="Allergies" multiline />
            <FormField label="Emergency contacts" name="contacts" required minLength={2} placeholder="Emergency contacts" multiline />
            <FormField label="Other notes" name="notes" placeholder="Other notes" multiline />
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98] disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : "Save Profile"}
        </button>
        <button
          type="button"
          onClick={handleCancel}
          className="w-full rounded-2xl border border-red-200 bg-white py-3 text-sm font-semibold text-red-500 transition-all hover:bg-red-50 active:scale-[0.98]"
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

function FormField({
  label,
  name,
  placeholder,
  required,
  minLength,
  multiline,
}: {
  label: string
  name: string
  placeholder?: string
  required?: boolean
  minLength?: number
  multiline?: boolean
}) {
  const inputClasses =
    "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-colors"

  return (
    <div>
      <label htmlFor={name} className="mb-1 block text-xs font-medium text-muted-foreground">
        {label}
        {required && <span className="text-red-400"> *</span>}
      </label>
      {multiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          rows={2}
          className={inputClasses}
        />
      ) : (
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          minLength={minLength}
          className={inputClasses}
        />
      )}
    </div>
  )
}
