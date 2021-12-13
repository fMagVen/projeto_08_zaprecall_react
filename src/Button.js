import FFlogo from './img/FFlogo.png'

export default function Button(props){
    return(
        <button className='button weight-700 size-20 flex center' onClick={props.choice}>
            {props.children}
            <img src={FFlogo} alt="fast forward logo" />
        </button>
    );
}