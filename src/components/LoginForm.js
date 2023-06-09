import './LoginForm.css';
import React, { useState } from 'react';
import MySection from './Section';
import MyButton from './Button';
import personAddIcon from '../resources/person-add.svg';
import checkIcon from '../resources/check2-all.svg';
import MyImage from './Imagem';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    const navigate = useNavigate();
    const logo = 'https://play-lh.googleusercontent.com/10RVls3lohQiKhwqcSc6MZohNhguDTPiuPrZ-N3TG6cC4hPPr9PuhsruSXwFwUOCTPI=w240-h480-rw';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateData = () => {
        if (!email) {
            return alert("Email não preenchido!");
        } else if (!password) {
            return alert("Senha não informada!");
        }
        navigate('/home', { state: { email } });
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div>
            <form name="login_form">
                <fieldset>
                    <MyImage src={logo} alt="logo" height={160} width={160} />
                    <div className='mydiv' />
                    <label htmlFor="email">Email/Login:</label>
                    <input type="email" id="email" placeholder="Digite seu email/login" value={email} onChange={handleEmailChange} /><br />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} /><br />
                    <div className="loginButtons">
                        <MySection>
                            <MyButton to="/" alt="Voltar" source={personAddIcon} nome="Voltar" />
                            <MyButton to="/register" alt="Register" source={personAddIcon} nome="Cadastro" />
                            <MyButton onClick={validateData} alt="Login" source={checkIcon} nome="Login" />
                        </MySection>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default LoginForm;