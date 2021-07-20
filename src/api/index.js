import axios from 'axios'

const URL = 'http://api.espn.com/v1/now'


export const fecthLiveNewsData = async() => {
        try {
            
            const { data } = await axios.get(`${URL}`)
            const receivedNewsData = { data }

            return receivedNewsData
        } catch(err) {
            console.log(err)
        }
}