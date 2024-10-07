export const authEndPoint = "https://accounts.spotify.com/authorize"

const redirectUrl = "http://localhost:5173/";

const clientId = "10c5e0ed43a84af099a6e40aac0774db"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
console.log(loginUrl)