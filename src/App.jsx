import { useState } from 'react'
import './App.css'

import bunphoto1 from './assets/basketbun.jpeg'
import bunphoto2 from './assets/lopbun.jpeg'

function App() {
  const [currentPhoto, setCurrentPhoto] = useState(bunphoto1)

  const handlePhotoSwitch = () => {
    setCurrentPhoto((prevPhoto) =>
      prevPhoto === bunphoto1 ? bunphoto2 : bunphoto1
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
          alt="switchable-bunny"
          className="bunphoto"
        />
      </div>
      <h6>Made with love by Dina 2024© </h6>
    </>
  )
}

export default App
