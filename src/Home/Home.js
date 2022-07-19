import React, { useState, useEffect } from "react";
// import "./Home.css";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([])
  const api = "dream-journal.netlify.com/api/dream"
  useEffect(() => {
    axios.get(api)
    .then(({data}) => {
      setData(data)
    }).catch(console.error)
  },[])
  console.log(data)
    return (
      <div className="home-div">
        <h1 className="title">Dream Journal </h1>
        <p className="description">Description</p>
      </div>
    );
}

export default Home;