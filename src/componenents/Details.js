import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";



const Details = () => {
    const params = useParams()
    const [item, setCharacterDetails] = useState({})


    useEffect(() => {
        axios.get(`https://www.breakingbadapi.com/api/characters/${params.id}`)
            .then((res) => setCharacterDetails(res.data))
            .catch((err) => console.log(err))
    }, []);
  return (

    <div >
        <div>
          <div >
            <img src={item.img} alt='' />
          </div>
          <div >
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Actor Name:</strong> {item.portrayed}
              </li>
              <li>
                <strong>Nickname:</strong> {item.nickname}
              </li>
              <li>
                <strong>Birthday:</strong> {item.birthday}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
        </div>
      </div>

  )
}

export default Details







