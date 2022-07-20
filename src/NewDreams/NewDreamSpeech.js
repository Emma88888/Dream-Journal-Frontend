import React, { useEffect } from "react"
// import { useState } from "react"
import useSpeechToText from 'react-hook-speech-to-text';

export default function NewDreamSpeech() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
        } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>I'm sorry, web speech is not compatible with your browser!</p>;

  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}

// const NewDreamSpeech = ({onSave}) => {
//     const [speechDream, setSpeechDream] = useState("")

//     // let isListening = false
//     // let note = "Waiting"
//     const [isListening, setIsListening] = useState(isListening)
//     const [note, setNote] = useState(null)

//     useEffect(() => {
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
//     }, [isListening])

//     const handleToggleRecord = () => {
//         console.log("Toggling record")

//         // isListening = !isListening
//         setIsListening(!isListening)
   
//     }
//     return (
//         <div>
//             <button className="record-button">
//                 Record
//             </button>
//         </div>

//     )
// }
// export default NewDreamSpeech;
