"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"

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
    <Button
      variant="outline"
      onClick={handleDelete}
      disabled={isDeleting}
      className="min-w-[120px] border-red-300 text-red-600 hover:bg-red-50"
    >
      {isDeleting ? "Deleting..." : "DELETE"}
    </Button>
  )
}
