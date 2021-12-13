import LogoS from '../LogoS'
import FFlogo from '../img/FFlogo.png'
import party from '../img/party.png'
import sad from '../img/sad.png'
import './Result.css'

export default function Result(props)
{
    function reset()
    {
        window.location.reload(true);
    }
    return(
        <div className={`resultPage flex flex-column ${props.advancePage === 6 ? '' : 'hidden'}`}>
            <LogoS />
            <div className="result flex flex-column">
                <div className="result-title weight-700 size-36">
                    {props.forgot > 0 || props.zaps < props.meta ? <div className='flex'><p>Putz..</p><img src={sad} alt="sad"/></div> : <div className='flex'><p>PARABÉNS!</p><img src={party} alt="party"/></div> }
                    </div>
                <div className="result-message weight-400 size-22">{props.forgot > 0 || props.zaps < props.meta ? `Você esqueceu ${props.forgot} flashcards ou não cumpriu a meta de ${props.meta} Zaps! Não desanima! Na próxima você consegue!` : "Você não esqueceu nenhum flashcard!"}</div>
                <button className='button weight-700 size-20 flex center' onClick={() => reset()}>
                    Tentar novamente
                    <img src={FFlogo} alt="fast forward logo" />
                </button>
            </div>
        </div>
    );
}