'use client'
import App from '../App'
import { AppProvider } from "@/context/user"

const Home = () => {
  return (
    <AppProvider>
      <App />
    </AppProvider>
  )
}
export default Home
