
// http://api.giphy.com/v1/gifs/random?api_key=CpF7vG8xm0KyCPTlEoTK8sLTfiz0Dsle
const apiUrl = 'http://api.giphy.com/v1/gifs/random?api_key='
const apiKey = 'CpF7vG8xm0KyCPTlEoTK8sLTfiz0Dsle'


fetch( `${ apiUrl }${ apiKey }` )
    .then( res => res.json() )
    .then(({ data }) => {
        const { url } = data.images.original
        
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })

