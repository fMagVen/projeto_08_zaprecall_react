import LogoL from '../img/LogoL.png'
import './Landing.css'
import Button from '../Button'

export default function Landing(){
    return(
        <div className="Landing flex">
            <img className='LL' src={LogoL} alt="zap recall logo large" />
            <input type="text" placeholder='Sua meta de zaps' />
            <Button>Praticar HTML e CSS</Button>
            <Button>Praticar JS</Button>
            <Button>Praticar React</Button>
        </div>
    );
}