import giphyApi from "./bases/11-axios";

const getImage = async() => {

    try {
        
        const { data:res } = await giphyApi.get('/random')
        const { url } = res.data.images.original

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

    } catch (error) {
        throw new Error('Error en la peticion: ', error)
    }

}

getImage()

