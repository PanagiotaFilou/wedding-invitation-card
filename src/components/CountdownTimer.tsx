import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  weddingDate: Date
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownTimer = ({ weddingDate }: CountdownTimerProps) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - new Date().getTime()

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [weddingDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md p-3 sm:p-4 min-w-[70px] sm:min-w-[90px] border-2 border-rose-100">
      <div className="text-2xl sm:text-4xl font-bold text-wedding-burgundy font-serif">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xs sm:text-sm text-gray-600 mt-1 font-sans uppercase tracking-wide">
        {label}
      </div>
    </div>
  )

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-center">
        <p className="text-xl sm:text-2xl font-serif text-wedding-rose mb-2">
          Μέχρι τη μεγάλη μέρα
        </p>
      </div>
      <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
        <TimeUnit value={timeLeft.days} label="Ημέρες" />
        <TimeUnit value={timeLeft.hours} label="Ώρες" />
        <TimeUnit value={timeLeft.minutes} label="Λεπτά" />
        <TimeUnit value={timeLeft.seconds} label="Δευτ." />
      </div>
    </div>
  )
}

export default CountdownTimer
