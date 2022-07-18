import React from "react"
import { useState } from "react"

const NewDreamSpeech = ({onSave}) => {
    const [speechDream, setSpeechDream] = useState("")

    return (
        <div>
            <button>
                Record
            </button>
        </div>

    )

}

// export default function NewDreamSpeech


//     // let isListening = false
//     // let note = "Waiting"
//     const [isListening, setIsListening] = useState(isListening)
//     const [note, setNote] = useState(null)

//     const handleToggleRecord = () => {
//         console.log("Toggling record")

//         isListening = !isListening
//         setIsListening(isListening)
//         console.log("isListening", isListening)

//         if (isListening) {
//             mic.start()
//             mic.onend = () => {
//                 console.log("Started mic")
//                 console.log("Resetting")
//             } 
//         }

//         else {
//             mic.stop()
//             mic.onend = () => {
//                 console.log("Stopped mic")
//             }

//         mic.onresult = event => {
//             const transcript = Array.from(event.results)
//                 .map(result => result[0])
//                 .map(result => result.transcript)
//                 .join("")
//             console.log(transcript)
//             setNote(transcript)
//             mic.onerror = event => {
//                 console.error(event.error)
//             }
//         }
//         }
//     }
// }

export default NewDreamSpeech;
