import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Instructions | Medz+",
}

export default function InstructionsPage() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-3xl">
        <Card className="rounded-2xl border-violet-200 bg-white/90">
          <CardContent className="p-6 md:p-8">
            {/* About Section */}
            <div className="mb-8">
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-0.5 flex-1 bg-violet-300" />
                <h1 className="text-2xl font-bold text-violet-600 md:text-3xl">
                  About this App
                </h1>
                <div className="h-0.5 flex-1 bg-violet-300" />
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg font-medium text-violet-700">
                  Medical emergencies are unpredictable.
                </p>
                <p>
                  Ambulances take patients to the ER{" "}
                  <em className="text-violet-600">
                    over 16 million times per year
                  </em>{" "}
                  in the US.
                </p>

                <p className="font-medium text-violet-700">
                  During these emergencies:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>
                    Someone may not be immediately available to assist you.
                  </li>
                  <li>
                    Bystanders may not be aware that you need help.
                  </li>
                </ol>

                <p className="font-medium text-violet-700">
                  This app allows you to:
                </p>
                <ol className="ml-6 list-decimal space-y-2">
                  <li>Call 911 & your emergency contacts</li>
                  <li>Text your emergency contacts</li>
                  <li>
                    Activate a distress alarm to alert bystanders that you need
                    help
                  </li>
                  <li>
                    Store brief medical info that emergency responders may need
                    when attending to you
                  </li>
                  <li>Access First Aid information</li>
                </ol>
              </div>
            </div>

            {/* How to Use Section */}
            <div>
              <div className="mb-4 flex items-center justify-center gap-4">
                <div className="h-0.5 flex-1 bg-violet-300" />
                <h2 className="text-2xl font-bold text-violet-600 md:text-3xl">
                  How to Use It
                </h2>
                <div className="h-0.5 flex-1 bg-violet-300" />
              </div>

              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  This app is very easy to use! The home page has 8 buttons.
                  Simply click on a button to access that feature.
                </p>
                <p>
                  Watch this YouTube video for a{" "}
                  <strong className="text-violet-600">
                    step-by-step tutorial
                  </strong>
                  .
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/"
                className="inline-block rounded-xl bg-violet-600 px-8 py-3 font-medium text-white hover:bg-violet-700"
              >
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
