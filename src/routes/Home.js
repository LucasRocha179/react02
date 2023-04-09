import MyButton from '../components/Button';
import MySection from '../components/Section';
import personIcon from '../resources/person.svg';
import pluscirclefillIcon from '../resources/plus-circle-fill.svg';
import calendar2Icon from '../resources/calendar2.svg';
import calendar2checkIcon from '../resources/calendar2-check.svg';
import infocirclefillIcon from '../resources/info-circle-fill.svg';
import boxarrowrightIcon from '../resources/box-arrow-right.svg';
import MyHeader from '../components/Header';
import { useLocation } from 'react-router-dom';
import './Home.css';

function Home(props) {
    let { state } = useLocation();
    
    return (
        <div>
            <MyHeader title="Escolha uma opção!" 
            message="Olá, esta é uma plataforma online para gerenciar ordens de serviço de forma simples e eficiente."/>
            <MySection>
                <MyButton to="/customers" alt="Clientes" source={personIcon} nome="Clientes" />
                <MyButton to="/home" alt="Nova O.S." source={pluscirclefillIcon} nome="Nova O.S." />
                <MyButton to="/home" alt="Abertas" source={calendar2Icon} nome="Abertas" />
                <MyButton to="/home" alt="Encerradas" source={calendar2checkIcon} nome="Encerradas" />
                <MyButton to="/contato" back="/home" alt="Sobre" source={infocirclefillIcon} nome="Sobre" />
                <MyButton to="/" alt="Sair" source={boxarrowrightIcon} nome="Sair" />
            </MySection>
            <h3>{state.email}</h3>
        </div>
    )
};

export default Home;