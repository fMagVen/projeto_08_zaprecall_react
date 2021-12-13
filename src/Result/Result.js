import LogoS from '../LogoS'
import Button from '../Button'
import './Result.css'

export default function Result(props)
{
    return(
        <div className={`resultPage flex flex-column ${props.advancePage === 3 ? '' : 'hidden'}`}>
            <LogoS />
            <div className="result flex flex-column">
                <div className="result-title weight-700 size-36">{props.forgot > 0 ? "Putz &#x1F625" : "PARABENS &#129395"}</div>
                <div className="result-message weight-400 size-22">{props.forgot > 0 ? `Você esqueceu ${props.forgot} flashcards.. Não desanima! Na próxima você consegue!` : "Você não esqueceu nenhum flashcard!"}</div>
                <Button>Tentar novamente</Button>
            </div>
        </div>
    );
}