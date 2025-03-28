import React from 'react'

function SongAddForm() {
    return (
        <div className="flex items-center justify-center h-[80vh] bg-gray-500">
        <form className="grid grid-cols-2 gap-4 border-2 border-black p-4 bg-slate-500">
            <div>
                <label className='font-bold text-xl '>Song Name:</label><br/>
                <input className='border-1 border-gray-900 outline-none bg-white px-2 rounded-md ' type="text" placeholder='Enter song name' />
            </div>
            <div>
                <label className='font-bold text-xl '>Singer:</label><br/>
                <input className='border-1 border-gray-900 outline-none bg-white px-2 rounded-md ' type="text" placeholder='Enter Singer name' />
            </div>
            <div>
                <label className='font-bold text-xl '>Movie/Album:</label><br/>
                <input className='border-1 border-gray-900 outline-none bg-white px-2 rounded-md ' type="text" placeholder='Enter movie or album name' />
            </div>
            <div>
                <label className='font-bold text-xl '>Poster:</label> <br/>
                <input className='border-1 border-gray-900 outline-none bg-white px-2 rounded-md ' type="text" placeholder='Enter poster url' />
            </div>
        </form>
        </div>
    )
}

export default SongAddForm
