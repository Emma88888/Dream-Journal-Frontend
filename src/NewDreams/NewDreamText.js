import { useState } from 'react';
import React from "react"

const NewDreamText = props => {
    const [textDream, setTextDream] = useState("");

    return (
        <div className="input-box">
            <textarea
            type="text"
            value={props.text}
            onChange={(e) => props.onChange(e.target.value)}
            onSave={(e) => props.onSave(e.target.value)}
            />
        </div>
    )
}

export default NewDreamText;