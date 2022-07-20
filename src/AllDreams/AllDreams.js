import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShowAllDreams = () => {
const [data, setData] = useState([])
const navigate = useNavigate()
  const api = "https://dream-journal-8.herokuapp.com/api/dream/"
  useEffect(() => {
    axios.get(api)
    .then(({data}) => {
      setData(data)
    }).catch(console.error)
  },[])

  const handleDelete = (id) => {
    axios.delete(`https://dream-journal-8.herokuapp.com/api/dream/${id}`)
      .then(() => {
        setData((data) => data.filter((dream) => dream._id !== id))
      })
  };

  const handleEdit = (id) => {
   navigate(`/dream/${id}`)
  };

    return (
        <div className="dreams-div">
            {data.map((item) => {
                return(
                    <div key={item._id}>
                        <div>
                        {item.dream}
                        </div>
                        {item.date}
                        <div>
                          <button className="delete-button" onClick={() => handleDelete(item._id)}>
                            Delete dream
                          </button>
                        </div>
                        <div>
                          <button className="edit-button" onClick={() => handleEdit(item._id)}>
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