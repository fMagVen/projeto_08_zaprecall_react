import LogoS from '../LogoS'
import Button from '../Button'
import './Result.css'

export default function Result()
{
    return(
        <div className='resultPage flex flex-column'>
            <LogoS />
            <div className="result flex flex-column">
                <div className="result-title weight-700 size-36">PARABENS &#x1F625;&#129395;</div>
                <div className="result-message weight-400 size-22">Você não esqueceu nenhum flashcard!</div>
                <Button>Tentar novamente</Button>
            </div>
        </div>
    );
}