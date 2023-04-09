import './Header.css';

function MyHeader(props) {
    return(
        <header>
                <div>
                    <span>
                        <p>{props.message}</p>
                        <h2>{props.title}</h2>
                    </span>
                </div>
        </header>
    )
};

export default MyHeader;