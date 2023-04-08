import './LoginForm.css';
import React, { useState } from 'react';
import MySection from './Section';
import MyButton from './Button';
import personAddIcon from '../resources/person-add.svg';
import checkIcon from '../resources/check2-all.svg';
import MyImage from './Imagem';

function LoginForm(props) {
    const logo = 'https://play-lh.googleusercontent.com/10RVls3lohQiKhwqcSc6MZohNhguDTPiuPrZ-N3TG6cC4hPPr9PuhsruSXwFwUOCTPI=w240-h480-rw';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                    <MyImage src={logo} alt="logo" height={160} width={160}/>
                    <div className='mydiv'/>
                    <legend>Login</legend>
                    <label htmlFor="email">Email/Login:</label>
                    <input type="email" id="email" placeholder="Digite seu email/login" value={email} onChange={handleEmailChange} /><br />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} /><br />
                    <MySection>
                        <MyButton to="/register" alt="Register" source={personAddIcon} nome="Cadastro" />
                        <MyButton to="/home" alt="Login" source={checkIcon} nome="Login" />
                    </MySection>
                </fieldset>
            </form>
        </div>
    )
};

export default LoginForm;