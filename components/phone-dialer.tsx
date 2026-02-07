"use client"

import { useState } from "react"
import { Phone, Mic, MicOff, ChevronDown } from "lucide-react"

const countries = [
  { name: "USA/CA/CARIB", cc: "1", code: "us" },
  { name: "Great Britain", cc: "44", code: "gb" },
  { name: "Colombia", cc: "57", code: "co" },
  { name: "Ecuador", cc: "593", code: "ec" },
  { name: "Estonia", cc: "372", code: "ee" },
  { name: "Germany", cc: "49", code: "de" },
  { name: "Hong Kong", cc: "852", code: "hk" },
  { name: "Ireland", cc: "353", code: "ie" },
  { name: "Singapore", cc: "65", code: "sg" },
  { name: "Spain", cc: "34", code: "es" },
  { name: "Brazil", cc: "55", code: "br" },
]

export function PhoneDialer() {
  const [countryCode, setCountryCode] = useState("1")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isOnCall, setIsOnCall] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [log, setLog] = useState("Waiting for you to start a call...")
  const [showDropdown, setShowDropdown] = useState(false)

  const isValidNumber = /^([0-9]|#|\*)+$/.test(
    phoneNumber.replace(/[-()\s]/g, "")
  )

  const handleCall = () => {
    if (!isOnCall) {
      const fullNumber = `+${countryCode}${phoneNumber.replace(/\D/g, "")}`
      setIsOnCall(true)
      setIsMuted(false)
      setLog(`Calling ${fullNumber}...`)
      setTimeout(() => {
        setLog(
          `Connected to ${fullNumber} (Demo mode - not actually connected)`
        )
      }, 2000)
    } else {
      setIsOnCall(false)
      setIsMuted(false)
      setLog("Call ended.")
    }
  }

  const handleDigit = (digit: string) => {
    if (isOnCall) {
      setLog(`Sent digit: ${digit}`)
    }
  }

  const selectedCountry = countries.find((c) => c.cc === countryCode)

  return (
    <div className="space-y-5">
      {/* Country + Number Input */}
      <div className="flex gap-2">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex h-11 items-center gap-1 rounded-xl border border-border bg-background px-3 text-sm font-medium transition-colors hover:bg-purple-50"
            type="button"
          >
            +{countryCode}
            <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
          {showDropdown && (
            <div className="absolute left-0 top-12 z-50 max-h-56 w-48 overflow-y-auto rounded-xl border border-border bg-white shadow-lg">
              {countries.map((country) => (
                <button
                  key={country.code}
                  onClick={() => {
                    setCountryCode(country.cc)
                    setShowDropdown(false)
                  }}
                  className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm hover:bg-purple-50 transition-colors"
                  type="button"
                >
                  <span className="text-muted-foreground">+{country.cc}</span>
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <input
          type="tel"
          placeholder="555-666-7777"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="h-11 flex-1 rounded-xl border border-border bg-background px-3.5 text-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20 transition-colors"
        />
      </div>

      {/* Call Controls */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handleCall}
          disabled={!isValidNumber && !isOnCall}
          className={`flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all active:scale-90 disabled:opacity-40 ${
            isOnCall
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
          type="button"
          aria-label={isOnCall ? "End call" : "Start call"}
        >
          <Phone className="h-6 w-6 text-white" />
        </button>

        {isOnCall && (
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="flex h-14 w-14 items-center justify-center rounded-full border border-border bg-white shadow-sm transition-all hover:bg-purple-50 active:scale-90"
            type="button"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <MicOff className="h-5 w-5 text-red-500" />
            ) : (
              <Mic className="h-5 w-5 text-foreground" />
            )}
          </button>
        )}
      </div>

      {/* Dial Pad */}
      {isOnCall && (
        <div className="grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
            (digit) => (
              <button
                key={digit}
                onClick={() => handleDigit(digit)}
                className="flex h-14 items-center justify-center rounded-xl border border-border bg-background text-lg font-semibold transition-all hover:bg-purple-50 active:scale-95"
                type="button"
              >
                {digit}
              </button>
            )
          )}
        </div>
      )}

      {/* Status */}
      <div className="rounded-xl bg-purple-50 p-3 text-center">
        <p className="text-xs text-purple-700">{log}</p>
        {selectedCountry && !isOnCall && (
          <p className="mt-1 text-[10px] text-purple-400">
            Selected: {selectedCountry.name}
          </p>
        )}
      </div>
    </div>
  )
}
