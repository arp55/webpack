import Apple from './apple.jpg'
import AltText from './alt-text.txt'

function addImage(){
    const img=document.createElement("img")
    img.alt=AltText
    img.width=300
    img.src=Apple
    const body=document.querySelector("body")
    body.appendChild(img)
}

export default addImage