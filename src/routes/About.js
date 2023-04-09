import { useLocation } from 'react-router-dom';
import MyButton from '../components/Button';
import MyHeader from '../components/Header';
import boxarrowrightIcon from '../resources/box-arrow-right.svg';
import './About.css';

function About(props) {
    let { state } = useLocation();

    return (
        <>
            <MyHeader title="Sobre o Sistema de Gerenciamento de O.S." />
            <div className='content'>
                <br />
                <p>O Sistema de Gerenciamento de O.S. é uma aplicação web que tem como objetivo auxiliar empresas a gerenciarem
                    as ordens de serviço que recebem. Com ele é possível cadastrar novas O.S., consultar as O.S. existentes e
                    acompanhar o status de cada uma delas.</p>
                <br />
                <p>Desenvolvido utilizando tecnologias web modernas como HTML5, CSS3 e JavaScript. Ele é compatível com os
                    principais navegadores web e pode ser acessado a partir de qualquer dispositivo conectado à internet.</p>
                <br />
                <p>Dúvidas ou sugestões podem ser enviadas para applrsistemas@gmail.com</p>
            </div>
            <section>
                <h2>Conheça nosso app!</h2>
                <a href="https://play.google.com/store/apps/details?id=com.app.lrsistemas.minhaordemdeservico&hl=pt_BR&gl=US"
                    aria-label="Baixe o aplicativo na Play Store">
                    <span>Baixar na Play Store</span>
                </a>
            </section>
            <MyButton to={state.rotaBack} alt="Voltar" source={boxarrowrightIcon} nome="Voltar" />
        </>
    )
};

export default About;