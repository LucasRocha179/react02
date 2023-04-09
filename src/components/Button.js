import './Button.css';
import { Link } from 'react-router-dom';

function MyButton(props) {
    return (
        props.onClick ? <div className='mybutton' onClick={props.onClick}>
            <img src={props.source} alt={props.alt} />
            <h3>{props.nome}</h3>
        </div> : <Link to={props.to} state={{ rotaBack: props.back }} className='mybutton'>
            <img src={props.source} alt={props.alt} />
            <h3>{props.nome}</h3>
        </Link>
    )
};

export default MyButton;