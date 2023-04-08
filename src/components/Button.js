import './Button.css';
import { Link } from 'react-router-dom';

function MyButton(props) {
    return(
        <Link to={props.to} className='mybutton'>
                <img src={props.source} alt={props.alt}/>
                <h3>{props.nome}</h3>
        </Link>
    )
};

export default MyButton;