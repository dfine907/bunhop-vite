import { useState } from 'react'
import './App.css'

import photo1 from './assets/basketbun.jpeg'
import photo2 from './assets/lopbun.jpeg'

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(photo1)

  const handlePhotoSwitch = () => {
    setCurrentPhoto((prevPhoto) =>
      prevPhoto === photo1 ? photo2 : photo1
    )
  }

  return (
    <>
      <div className="heading">
        <h1>Cute Buns</h1>
      </div>
      <div className="card">
        <button onClick={handlePhotoSwitch}>Switch Photo</button>
        <img
          src={currentPhoto}
          alt="Switchable"
          className="bunphoto"
        />
      </div>
      <h6>Made with love by Dina 2024© </h6>
    </>
  )
}

export default App
