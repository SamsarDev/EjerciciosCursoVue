
import axios from 'axios'

const apiKey = 'CpF7vG8xm0KyCPTlEoTK8sLTfiz0Dsle'

const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1/gifs',
    params: {
        api_key: apiKey
    }
})

/* giphyApi.get('/random')
    .then(({ data:res }) => {
        const { url } =  res.data.images.original
        
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    }) */

export default giphyApi
