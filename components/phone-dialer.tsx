"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mic, MicOff, ChevronDown } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

  const isValidNumber = /^([0-9]|#|\*)+$/.test(phoneNumber.replace(/[-()\s]/g, ""))

  const handleCall = () => {
    if (!isOnCall) {
      const fullNumber = `+${countryCode}${phoneNumber.replace(/\D/g, "")}`
      setIsOnCall(true)
      setIsMuted(false)
      setLog(`Calling ${fullNumber}...`)
      
      // In a real implementation, this would connect to Twilio
      // For demo purposes, we'll simulate a call
      setTimeout(() => {
        setLog(`Connected to ${fullNumber} (Demo mode - not actually connected)`)
      }, 2000)
    } else {
      setIsOnCall(false)
      setIsMuted(false)
      setLog("Call ended.")
    }
  }

  const handleDigit = (digit: string) => {
    if (isOnCall) {
      // Send DTMF tone (in real implementation)
      setLog(`Sent digit: ${digit}`)
    }
  }

  const selectedCountry = countries.find((c) => c.cc === countryCode)

  return (
    <div className="space-y-6">
      {/* Country Selector + Phone Input */}
      <div className="flex gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="min-w-[100px]">
              +{countryCode}
              <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-[300px] overflow-y-auto">
            {countries.map((country) => (
              <DropdownMenuItem
                key={country.code}
                onClick={() => setCountryCode(country.cc)}
              >
                {country.name} (+{country.cc})
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <Input
          type="tel"
          placeholder="555-666-7777"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="flex-1"
        />
      </div>

      {/* Call Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={handleCall}
          disabled={!isValidNumber && !isOnCall}
          className={`h-16 w-16 rounded-full ${
            isOnCall
              ? "bg-red-500 hover:bg-red-600"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          <Phone className="h-6 w-6" />
        </Button>

        {isOnCall && (
          <Button
            onClick={() => setIsMuted(!isMuted)}
            variant="outline"
            className="h-16 w-16 rounded-full"
          >
            {isMuted ? (
              <MicOff className="h-6 w-6 text-red-500" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>
        )}
      </div>

      {/* Dial Pad (shown during call) */}
      {isOnCall && (
        <div className="grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map(
            (digit) => (
              <Button
                key={digit}
                variant="outline"
                onClick={() => handleDigit(digit)}
                className="h-14 text-xl font-semibold"
              >
                {digit}
              </Button>
            )
          )}
        </div>
      )}

      {/* Status Log */}
      <div className="rounded-lg bg-gray-50 p-4 text-center">
        <p className="text-sm text-gray-600">{log}</p>
        {selectedCountry && !isOnCall && (
          <p className="mt-1 text-xs text-gray-400">
            Selected: {selectedCountry.name}
          </p>
        )}
      </div>
    </div>
  )
}
