import './root.css';
import MyButton from '../components/Button';
import MySection from '../components/Section';
import checkIcon from '../resources/check2-all.svg';
import infoIcon from '../resources/info-circle-fill.svg';

export default function Root() {
    return (
        <div className="landing-page">
            <header>
                <h1>Minha Ordem de Serviço</h1>
                <p>O melhor software para gestão de OS</p>
            </header>
            <section>
                <h2>Conheça nosso app!</h2>
                <a href="https://play.google.com/store/apps/details?id=com.app.lrsistemas.minhaordemdeservico&hl=pt_BR&gl=US"
                    aria-label="Baixe o aplicativo na Play Store">
                    <span>Baixar na Play Store</span>
                </a>
            </section>
            <footer>
                <MySection>
                    <MyButton to="contato" alt="Contato" source={infoIcon} nome="Contato" />
                    <MyButton to="login" alt="Login" source={checkIcon} nome="Login" />
                </MySection>
            </footer>
        </div>
    )
}