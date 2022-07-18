import React from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const api = "http://localhost:4040/api/dream"

const NewDreamText = () => {
    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault()
        const fData = new FormData(event.target)
        const params = {
            dream: fData.get("dream"),
            date: fData.get("date")
        }
        axios.post(api, params)
        .then(() => {
            navigate("/allDreams")
        })
        .catch(alert)
    }
    return (
        <form onSubmit={onSubmit} className="input-box">
            <textarea
            name='dream'
            required
            />
            <input type="date" name="date" required >
            </input>
            <button>
                Create
            </button>
        </form>
    )
}

export default NewDreamText;