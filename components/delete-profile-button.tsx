"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

interface DeleteProfileButtonProps {
  profileId: string
}

export function DeleteProfileButton({ profileId }: DeleteProfileButtonProps) {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this profile?")) {
      return
    }

    setIsDeleting(true)
    try {
      const res = await fetch(`/api/profiles/${profileId}`, {
        method: "DELETE",
      })

      if (res.ok) {
        alert("Profile deleted!")
        router.push("/profiles")
      } else {
        alert("Failed to delete profile")
      }
    } catch {
      alert("An error occurred. Please try again.")
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <button
      onClick={handleDelete}
      disabled={isDeleting}
      className="w-full rounded-2xl border border-red-200 bg-white py-3.5 text-sm font-bold text-red-500 transition-all hover:bg-red-50 active:scale-[0.98] disabled:opacity-60"
    >
      {isDeleting ? "Deleting..." : "Delete Profile"}
    </button>
  )
}
