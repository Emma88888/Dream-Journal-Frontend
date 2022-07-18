import { useState } from 'react';

// export default function NewDream({onSave}) {
//     const [dream, setDream] = useState([]);
//     const []
// }

import React from "react"

const NewDreamText = props => {

    return (
        <div className="-input-box">
            <textarea
            type="text"
            value={props.text}
            onChange={(e) => props.onChange(e.target.value)}
            />
        </div>
    )
}

export default NewDreamText;