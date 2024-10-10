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

export const getTokenFromUrl = () =>{               //this funtion is to get access_token from URL from # 
    return window.location.hash                    
    .substring(1)
    .split("&")
    .reduce((initial,items)=>{
        var parts = items.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    },{})
}

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
console.log(loginUrl)