import React, { useState } from 'react'
import MusicSection from '../components/sections/MusicSection'
import MovieSection from '../components/sections/MovieSection'
import Test from '../components/Test'

const Home = () => {
  const [contentToShow, setContentToShow] = useState("")
  function handleTabChange(e) {
    setContentToShow(e.target.innerText.toLowerCase())
  }

  return (
    <div className='bg-slate-600 min-h-screen'>
      <div className='flex items-center justify-center gap-x-4 border border-gray-500 py-2 px-1'>

        <div onClick={handleTabChange}
        className={`${contentToShow==="musics"
        ?"border-green-600 bg-amber-700"
        :"border-indigo-600 bg-black"
        } rounded-xl bg-black border-2 px-8 text-white`}
        >
          Musics
        </div>
        <div onClick={handleTabChange}
        className={`${contentToShow==="movies"
        ?"border-green-600 bg-amber-700"
        :"border-indigo-600 bg-black"
        } rounded-xl bg-black border-2 px-8 text-white`}
        >
          Movies
        </div>
      </div>

      {contentToShow === "musics" && <MusicSection/> }
      {contentToShow === "movies" && <MovieSection/> }
        {/* <Test/> */}
    </div>
  )
}

export default Home
