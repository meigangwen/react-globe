//import { StrictMode } from 'react'
import App from '@/components/App'
import { exo2,orbitron } from '@/app/fonts.js'

export default function Home() {
  return (
    <div className='h-full flex flex-row'>
      <div className="w-1/2 flex flex-col justify-center px-8">
        <div className="w-[500px] mx-auto">
          <h1 className={`text-white text-4xl mb-8 ${exo2.className}`}>CHALLENGING THE STANDARD OF SPACE EXPLORATION</h1>
          <p className={`text-gray-400 mb-8 ${orbitron.className}`}>
            Millions of developers and companies build, ship, and maintain their software on GitHub-the largest and most advanced development platform in the world.
          </p>
          <div>
            <a href="" className="text-white bg-green-600 inline-block px-8 py-4 rounded-full">Learn More</a>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <App />
      </div>
    </div>
  )
}