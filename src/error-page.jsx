import { useRouteError } from "react-router-dom";
import MyButton from "./components/Button";
import MySection from "./components/Section";
import boxarrowrightIcon from './resources/box-arrow-right.svg';

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div id="error-page">
            <br />
            <h1>Oops!</h1>
            <p>Desculpe, a página não foi encontrada!.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
            <MySection>
                <MyButton to="/" alt="Voltar" source={boxarrowrightIcon} nome="Voltar" />
            </MySection>
        </div>
    );
}