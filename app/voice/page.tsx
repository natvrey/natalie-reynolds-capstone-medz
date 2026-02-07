import { PageHeader } from "@/components/page-header"
import { PhoneDialer } from "@/components/phone-dialer"

export const metadata = {
  title: "Phone Dialer | Medz+",
}

export default function VoicePage() {
  return (
    <div className="flex flex-col bg-gradient-to-b from-purple-50 to-background min-h-screen">
      <PageHeader title="Phone Dialer" />

      <div className="space-y-5 px-5 pb-8">
        {/* Instructions */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-3 text-base font-bold text-foreground">
            How to use this phone
          </h2>
          <div className="space-y-2 text-sm text-muted-foreground">
            <Step n={1}>
              Select the country you wish to call to set the correct country
              code.
            </Step>
            <Step n={2}>
              Type or paste the number you want to call.
            </Step>
            <Step n={3}>
              Click the <span className="font-semibold text-green-600">green</span> button
              to start the call.
            </Step>
            <Step n={4}>
              Use the mute button & number pad if needed during a call.
            </Step>
            <Step n={5}>
              Click the <span className="font-semibold text-red-500">red</span> button to
              end the call.
            </Step>
          </div>
          <p className="mt-3 rounded-xl bg-purple-50 p-3 text-xs leading-relaxed text-purple-700">
            <span className="font-semibold">Note:</span> This demo site uses a
            Twilio trial account with a limited balance. Trial calls are limited
            to Canadian numbers.
          </p>
        </div>

        {/* Dialer */}
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <PhoneDialer />
        </div>
      </div>
    </div>
  )
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="flex gap-2">
      <span className="shrink-0 font-bold text-purple-500">{n}.</span>
      <p>{children}</p>
    </div>
  )
}
