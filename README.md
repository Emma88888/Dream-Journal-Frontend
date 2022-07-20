## Dream Journaling App

## Project Description 

My project will be a dream journaling app where users can keep track of their dreams - an important method for dealing with nightmares/terrors and practicing sleep hygiene. My project will include a speech to text feature in python, as well as night mode for reducing eye strain.

## Wire Frames

![0](https://media.git.generalassemb.ly/user/43030/files/e8100324-1ecf-4b13-981b-9de993a928fe)
![0-1](https://media.git.generalassemb.ly/user/43030/files/a665f5fa-b23b-4bf5-b041-5c2736fa9ff1)
![0-2](https://media.git.generalassemb.ly/user/43030/files/7181b48b-3d3b-4100-8117-8c3429a63e08)

## Technologies Used

- Python for speech-to-text
- MERN stack for frontend and API
- Tailwind

## Models

`
const Dream = new Schema({
     date: Date,
     dream: String
})
`

For my speech to text input, I will have to figure out what the data type is although I'm assuming it will be a string.

## User Stories

- As a user, I want a simple, non-distracting interface that is focused on my sleep quality/hygiene.
- As a user, I want to be able to use speech-to-text if it's easier for me than writing my dreams down.
- As a user, I want to also have the option to write my dreams down.
- As a user, I want to be able to access, delete and edit past dreams I've recorded.
- As a user, I want access to resources that might help me with sleep quality.

### MVP Goals

- CRUD for recorded/written dreams
- Speech-to-text feature
- Relaxing interface (research color theories)
- Night mode
- Date

### Stretch Goals

- User authentication
- Drawing/uploading images
- Share dream to social media
- Mark dreams as private/public
- View other users' dreams
