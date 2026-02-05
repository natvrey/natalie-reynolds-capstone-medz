import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="mt-auto border-t border-violet-100 bg-gradient-to-r from-violet-50 to-pink-50 px-4 py-6">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 text-sm text-violet-600 md:gap-8">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span className="font-bold">Medz</span>
          <Image
            src="/images/logo.jpg"
            alt="Medz+ logo"
            width={24}
            height={24}
            className="rounded-lg"
          />
        </Link>
        <span className="text-violet-400">
          &copy; {new Date().getFullYear()}
        </span>
        <span className="cursor-pointer hover:text-violet-800">Privacy</span>
        <span className="cursor-pointer hover:text-violet-800">Terms</span>
        <span className="cursor-pointer hover:text-violet-800">About Us</span>
      </div>
    </footer>
  )
}
