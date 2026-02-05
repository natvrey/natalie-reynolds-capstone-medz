import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { PhoneDialer } from "@/components/phone-dialer"

export const metadata = {
  title: "Phone Dialer | Medz+",
}

export default function VoicePage() {
  return (
    <div className="min-h-[calc(100vh-140px)] bg-gradient-to-br from-violet-200 via-violet-100 to-pink-50 px-4 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Instructions */}
          <Card className="rounded-2xl border-violet-200 bg-white/90">
            <CardContent className="p-6">
              <h1 className="mb-4 text-2xl font-bold text-violet-600">
                How to use this phone
              </h1>
              <div className="space-y-3 text-gray-700">
                <p>
                  <strong className="text-violet-600">1)</strong> Select the
                  country you wish to call by clicking on its name.
                </p>
                <p className="ml-4 text-sm">
                  This will ensure that the phone adds the correct{" "}
                  <strong>country code</strong> to the number you dial.
                </p>
                <p className="ml-4 text-sm text-violet-500">
                  *Country codes determine the country of a phone number. For
                  example, <strong>+1 is the country code of Canada</strong>.
                </p>
                <p>
                  <strong className="text-violet-600">2)</strong> Type or paste
                  the number you want to call in the white field.
                </p>
                <p>
                  <strong className="text-violet-600">3)</strong> Click the{" "}
                  <strong className="text-green-600">green</strong> button.
                </p>
                <p>
                  <strong className="text-violet-600">4)</strong> Once you&apos;ve
                  started a call, a mute button & number pad will appear. Use
                  these only if you need to.
                </p>
                <p>
                  <strong className="text-violet-600">5)</strong> To end a call,
                  click the <strong className="text-red-600">red</strong>{" "}
                  button.
                </p>
                <p className="mt-4 rounded-lg bg-violet-50 p-3 text-sm text-violet-600">
                  <strong>Please Note:</strong> This demo site uses a Twilio
                  trial account with a limited $ balance. Once the funds are
                  exhausted, calls won&apos;t connect. *Also, trial calls are limited
                  to Canadian numbers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Phone Dialer */}
          <Card className="rounded-2xl border-violet-200 bg-white/90">
            <CardContent className="p-6">
              <PhoneDialer />
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block rounded-xl bg-violet-600 px-8 py-3 font-medium text-white hover:bg-violet-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}
