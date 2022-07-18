import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowAllDreams = () => {
const [data, setData] = useState([])
  const api = "http://localhost:4040/api/dream"
  useEffect(() => {
    axios.get(api)
    .then(({data}) => {
      setData(data)
    }).catch(console.error)
  },[])
  console.log(data)
    return (
        <div>
            {data.map((item) => {
                return(
                    <div key={item._id}>
                        <div>
                        {item.dream}
                        </div>
                        {item.date}
                    </div>
                )
            })}
        </div>

    )
}

export default ShowAllDreams