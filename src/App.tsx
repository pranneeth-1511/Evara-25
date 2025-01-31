import { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';
import ieeeLogo from '/assets/logos/ieee.png';
import rotaractLogo from '/assets/logos/rotaract.png';
import kprLogo from '/assets/logos/kprlogo.png';


function App() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const eventDate = new Date(2025, 3, 24, 9, 0); // April 25, 2024 at 9:00 AM

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = Math.abs(eventDate.getTime() - now);

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const CountdownBox = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-lg p-2 md:p-4 w-[4.5rem] md:w-32">
      <span className="text-2xl md:text-4xl font-bold text-white mb-1">{value}</span>
      <span className="text-xs md:text-base text-blue-200">{label}</span>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      <div className="absolute top-8 left-0 right-0 flex justify-center gap-16 px-4">
        {/* KPRIET Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white/100 p-4 rounded-full">
            <img src={kprLogo} alt="KPRIET - Logo" className="w-200 h-12" />
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold">KPRIET</h3>
            <p className="text-blue-200 text-sm">Learn Beyond</p>
          </div>
        </div>
        {/* IEEE-SSIT Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white/100 p-4 rounded-full">
            <img src={ieeeLogo} alt="IEEE - SSIT Logo" className="w-200 h-12" />
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold">SSIT</h3>
            <p className="text-blue-200 text-sm">Society on Social <br /> Implications of Technology</p>
          </div>
        </div>
        {/* Rotaract Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white/100 p-4 rounded-full">
            <img src={rotaractLogo} alt="Rotaract Club Logo" className="w-200 h-12" />
          </div>
          <div className="text-left">
            <h3 className="text-white font-semibold">Rotaract Club</h3>
            <p className="text-blue-200 text-sm">Service Above Self</p>
          </div>
        </div>
        {/* Third logo */}

      </div>

      <div className="text-center z-10 px-4 mt-32 md:mt-24">
        <div className="flex flex-col items-center justify-center gap-4 mb-8">
          <div className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 animate-pulse">
            EVERA'25
          </div>
          <div className="flex items-center gap-2">
            <Timer className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
            <h2 className="text-xl md:text-3xl font-light text-blue-200">
              The Future Awaits
            </h2>
          </div>
        </div>

        <h2 className="text-lg md:text-2xl text-blue-200 mb-8 md:mb-12 font-light">
          IEEE-SSIT & Rotaract Club Present
        </h2>

        <div className="flex gap-2 md:gap-4 mb-8 justify-center">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Minutes" />
          <CountdownBox value={timeLeft.seconds} label="Seconds" />
        </div>

        {/* Registration button */}
        <div className="mb-8 md:mb-12">
          <a
            href="https://forms.google.com/your-form-url"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 md:px-8 py-3 md:py-4 bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Register Now
          </a>
        </div>

        <div className="space-y-3 md:space-y-4">
          <h3 className="text-xl md:text-2xl text-white font-semibold">
             KPR Institute of Engineering and Technology
          </h3>
          <p className="text-blue-200 text-sm md:text-base">
            Arasur, Coimbatore - 641407
          </p>
          <p className="text-blue-200 text-sm md:text-base">
            Join us for an exciting technical extravaganza!
          </p>
        </div>
      </div>

      {/* Glowing orbs for visual effect */}
      <div className="absolute top-1/4 left-1/4 w-48 md:w-64 h-48 md:h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 md:w-64 h-48 md:h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </div>
  );
}

export default App;