import LogoS from '../LogoS'
import FFlogo from '../img/FFlogo.png'
import './Result.css'

export default function Result(props)
{
    function reset()
    {
        props.setZaps(0);
        props.setCard(1);
        props.setForgot(0);
        props.setAdvancePage(1);
    }
    return(
        <div className={`resultPage flex flex-column ${props.advancePage === 6 ? '' : 'hidden'}`}>
            <LogoS />
            <div className="result flex flex-column">
                <div className="result-title weight-700 size-36">{props.forgot > 0 ? "Putz &#x1F625" : "PARABENS &#129395"}</div>
                <div className="result-message weight-400 size-22">{props.forgot > 0 ? `Você esqueceu ${props.forgot} flashcards.. Não desanima! Na próxima você consegue!` : "Você não esqueceu nenhum flashcard!"}</div>
                <button className='button weight-700 size-20 flex center' onClick={() => reset()}>
                    Tentar novamente
                    <img src={FFlogo} alt="fast forward logo" />
                </button>
            </div>
        </div>
    );
}