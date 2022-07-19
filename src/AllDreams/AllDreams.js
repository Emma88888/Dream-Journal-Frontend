import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const ShowAllDreams = () => {
const [data, setData] = useState([])
  const api = "http://dream-journal.netlify.com"
  useEffect(() => {
    axios.get(api)
    .then(({data}) => {
      setData(data)
    }).catch(console.error)
  },[])
  console.log(data)

  const handleDelete = (e) => {
    axios.delete(`http://dream-journal.netlify.com/${e.target.id}`)
    window.location.reload(false)
  };

  const handleEdit = (e) => {
    axios.delete(`http://dream-journal.netlify.com/${e.target.id}`)
    window.location.reload(false)
  };

    return (
        <div>
            {data.map((item) => {
                return(
                    <div key={item._id}>
                        <div>
                        {item.dream}
                        </div>
                        {item.date}
                        <div>
                          <button onClick={handleDelete}>
                            Delete dream
                          </button>
                        </div>
                        <div>
                          <button onClick={handleEdit}>
                            Edit dream
                          </button>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}

export default ShowAllDreams