import React, { useState, useEffect } from "react"
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const api = "https://dream-journal-8.herokuapp.com/api/dream"

const EditDreamText = () => {
    const [dream, setDream] = useState()
    const navigate = useNavigate()
    const {id} = useParams()
    const onSubmit = (event) => {
        event.preventDefault()
        const fData = new FormData(event.target)
        const params = {
            dream: fData.get("dream"),
            date: fData.get("date")
        }
        axios.put(`${api}/${id}`, params)
        .then(() => {
            navigate("/allDreams")
        })
        .catch(alert)
    }
    useEffect(() => {
        axios.get(`${api}/${id}`)
        .then(({data}) => setDream(data.dream))
    },[])
    if (!dream) {
        return (
            <div>
                Loading
            </div>
        )
    }
    console.log(dream)
    return (
        <form onSubmit={onSubmit} className="input-box">
            <textarea
            name='dream'
            required
            defaultValue={dream.dream}
            />
            <input type="date" name="date" required defaultValue={dream.date} />
            <button className="create-button">
                Edit
            </button>
        </form>
    )
}

export default EditDreamText;