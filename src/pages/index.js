import BottomNavbar from '@/components/bottomNavbar/BottomNavbar'
import Hero from '@/components/copyright ecf/heroSection'
import Navbar from '@/components/navbar/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <h1>Hello World</h1>
      <BottomNavbar />
    </main>
  )
}
