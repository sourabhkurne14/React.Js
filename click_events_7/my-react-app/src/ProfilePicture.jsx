

function ProfilePicture(){

    const imageUrl = './src/assets/Sita2.jpg'

    const handleClick = (e)=> e.target.style.display = "none"

    return(  <img onClick = {(e)=> handleClick(e)} src={imageUrl} /> )

}

export default ProfilePicture