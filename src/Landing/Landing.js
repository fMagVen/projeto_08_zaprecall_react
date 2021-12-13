import LogoL from '../img/LogoL.png'
import './Landing.css'
import FFlogo from '../img/FFlogo.png'

export default function Landing(props)
{
    return(
        <div className={`Landing flex ${props.advancePage === 1 ? '' : 'hidden'}`}>
            <img className='LL' src={LogoL} alt="zap recall logo large" />
            <input type="text" placeholder='Sua meta de zaps, deixe em branco para meta de 1' onChange={(ev) => props.setMeta(ev.target.value)} />
            <button className='button weight-700 size-20 flex center' data-identifier="start-zap-recall" onClick={() => props.setAdvancePage(2)}>
                Praticar React
                <img src={FFlogo} alt="fast forward logo" />
            </button>
            <button className='button weight-700 size-20 flex center' data-identifier="start-zap-recall" onClick={() => props.setAdvancePage(3)}>
                Praticar HTML
                <img src={FFlogo} alt="fast forward logo" />
            </button>
            <button className='button weight-700 size-20 flex center' data-identifier="start-zap-recall" onClick={() => props.setAdvancePage(4)}>
                Praticar CSS
                <img src={FFlogo} alt="fast forward logo" />
            </button>
            <button className='button weight-700 size-20 flex center' data-identifier="start-zap-recall" onClick={() => props.setAdvancePage(5)}>
                Praticar JS
                <img src={FFlogo} alt="fast forward logo" />
            </button>
        </div>
    );
}