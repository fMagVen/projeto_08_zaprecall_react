import LogoS from '../LogoS'
import ArrowTurn from '../img/ArrowTurn.png'
import './CardPage.css'

export default function CardPage()
{
    return(
        <>
        <div className="CardPage flex flex-column">
            <LogoS />
            <div className="Card flex flex-column">
                <div className="number weight-400 size-18">1/8</div>
                <div className="question weight-700 size-28">O que é JSX?</div>
                <div className="turn"><img src={ArrowTurn} alt="click to turn the card" /></div>
            </div>
        </div>
        </>
    );
}