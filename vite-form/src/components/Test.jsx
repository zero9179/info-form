import React from 'react'
import axios from "axios"

function Test() {

    async function getDataJson() {
        let data = await axios.get("http://localhost:8080/users")
        return console.log(data.data[0])
    }
    getDataJson()
  return (
    <div>
      test
    </div>
  )
}

export default Test
