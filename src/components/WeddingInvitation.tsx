import { useState, useEffect } from 'react'
import { Calendar, MapPin, Phone, Clock } from 'lucide-react'
import FloralDecoration from './FloralDecoration'
import CountdownTimer from './CountdownTimer'

const WeddingInvitation = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="max-w-4xl mx-auto relative">
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-amber-100">
        {/* Top Floral Decoration */}
        <div className="absolute top-0 left-0 z-10">
          <FloralDecoration position="top-left" />
        </div>

        {/* Bottom Floral Decoration */}
        <div className="absolute bottom-0 right-0 z-10">
          <FloralDecoration position="bottom-right" />
        </div>

        {/* Content */}
        <div className="relative z-20 px-6 sm:px-12 md:px-16 py-12 sm:py-16">
          {/* Names */}
          <div className={`text-center mb-8 ${isVisible ? 'animate-fade-in-up' : ''}`}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-wedding-burgundy mb-4 text-shadow">
              Σπύρος
            </h1>
            <div className="text-4xl sm:text-5xl text-wedding-burgundy font-serif mb-4">
              &
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl italic text-wedding-burgundy text-shadow">
              Παναγιώτα
            </h1>
          </div>

          {/* Countdown Timer */}
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-200' : ''}`}>
            <CountdownTimer weddingDate={new Date('2025-12-20T19:15:00')} />
          </div>

          {/* Invitation Text */}
          <div className={`text-center mb-10 ${isVisible ? 'animate-fade-in-up animation-delay-400' : ''}`}>
            <p className="font-sans text-lg sm:text-xl md:text-2xl text-gray-800 leading-relaxed">
              Σας προσκαλούμε με χαρά στο γάμο μας
            </p>
            <div className="flex items-center justify-center gap-2 mt-4 text-xl sm:text-2xl font-semibold text-wedding-burgundy">
              <Calendar className="w-6 h-6" />
              <p>το Σάββατο 20 Δεκεμβρίου 2025 στις 19:15</p>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-lg sm:text-xl text-gray-700">
              <MapPin className="w-5 h-5" />
              <p>στη Δημοτική Πινακοθήκη Πειραιά</p>
            </div>
          </div>

          {/* Families */}
          <div className={`mb-8 ${isVisible ? 'animate-fade-in-up animation-delay-600' : ''}`}>
            <h2 className="font-serif italic text-2xl sm:text-3xl text-center text-wedding-rose mb-4">
              Οικογένειες
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center">
              <div className="space-y-2">
                <p className="font-sans text-lg sm:text-xl text-gray-800">Θάνο Δουβή</p>
                <p className="font-sans text-lg sm:text-xl text-gray-800">Ρούλη Θεοδοσοπούλου</p>
              </div>
              <div className="space-y-2">
                <p className="font-sans text-lg sm:text-xl text-gray-800">Πασχάλη Φίλου</p>
                <p className="font-sans text-lg sm:text-xl text-gray-800">Μαρία Ρόκα</p>
              </div>
            </div>
          </div>

          {/* Best Men */}
          <div className={`mb-10 ${isVisible ? 'animate-fade-in-up animation-delay-800' : ''}`}>
            <h2 className="font-serif italic text-2xl sm:text-3xl text-center text-wedding-rose mb-4">
              Κουμπάροι
            </h2>
            <div className="text-center space-y-2">
              <p className="font-sans text-lg sm:text-xl text-gray-800">Γεράσιμος Αυγουστινιάτος</p>
              <p className="font-sans text-lg sm:text-xl text-gray-800">Πωλίνα Τσαγκαράκη</p>
            </div>
          </div>

          {/* Reception Info */}
          <div className={`bg-rose-50 rounded-2xl p-6 sm:p-8 mb-8 border-2 border-rose-100 ${isVisible ? 'animate-fade-in-up animation-delay-800' : ''}`}>
            <p className="font-sans text-base sm:text-lg text-gray-800 text-center leading-relaxed mb-4">
              Μετά την τελετή θα ακολουθήσει δεξίωση<br />
              στο εστιατόριο <span className="font-semibold text-wedding-burgundy">Nyn Esti</span> στο ΕΜΣΤ
            </p>
            <p className="font-sans text-base sm:text-lg text-gray-700 text-center leading-relaxed">
              Για τη διευκόλυνση σας, θα διατίθενται δωρεάν θέσεις<br />
              στο πάρκινγκ Μετρό Συγγρού-Φιξ
            </p>
          </div>

          {/* RSVP */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up animation-delay-800' : ''}`}>
            <div className="bg-wedding-burgundy text-white rounded-2xl p-6 sm:p-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5" />
                <p className="font-sans text-lg sm:text-xl font-semibold">
                  Παρακαλούμε ενημερώστε μας για την παρουσία σας
                </p>
              </div>
              <p className="font-sans text-base sm:text-lg mb-4">
                έως 20 Νοεμβρίου 2025 στα τηλέφωνα
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
                <a
                  href="tel:6973188322"
                  className="flex items-center gap-2 hover:underline transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-semibold underline">6973188322</span>
                  <span className="text-sm">(Σπύρος)</span>
                </a>
                <a
                  href="tel:6986181668"
                  className="flex items-center gap-2 hover:underline transition-all hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-lg font-semibold underline">6986181668</span>
                  <span className="text-sm">(Παναγιώτα)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeddingInvitation
