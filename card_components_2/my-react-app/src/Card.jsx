import Bablipic from './assets/Sita.jpg'


function Card(){
    return(
        <div className="card">
            <img className='card-image' src={Bablipic} alt="picture of babli" ></img>
            <h2 className='card-title'>Notorous Sita</h2>
            <p className='card-text'>I take care of my boss's house</p>

        </div>
    )


}

export default Card