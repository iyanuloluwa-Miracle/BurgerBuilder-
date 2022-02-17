import axios from "axios"

const instance = axios.create({
    baseURL:'https://practice-react-project-ca461-default-rtdb.europe-west1.firebasedatabase.app/' 
})

export default instance