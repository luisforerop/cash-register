import { useEffect, useState } from 'react'
import './App.css'
import { AllowedProducts, Minicart } from './components'
import { MinicartProvider } from './providers'

const GoToFullScreen = () => (
  <div className="flex flex-col gap-4 justify-center items-center">
    <h1>Bienvenida a caja registradora</h1>
    <button onClick={() => document.body.requestFullscreen()}>Jugar</button>
  </div>
)

function App() {
  const [render, setRender] = useState(true)
  const [showStart, setShowStart] = useState(true)

  useEffect(() => {
    const { clientHeight, clientWidth } = document.body
    setRender(clientHeight < clientWidth)
    const onFullScreen = () => setShowStart(!document.fullscreenElement)

    addEventListener('fullscreenchange', onFullScreen)
  }, [])

  if (!render) return <div>Gira la pantalla</div>

  if (showStart) return <GoToFullScreen />

  return (
    <MinicartProvider>
      <div className="grid grid-cols-[2fr_3fr] p-8 gap-8 h-[776px] grid-rows-[calc(100vh_-4em)]">
        <Minicart />
        <AllowedProducts />
      </div>
    </MinicartProvider>
  )
}

export default App
