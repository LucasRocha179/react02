import './RegisterForm.css';
import React, { useState } from 'react';
import MySection from './Section';
import MyButton from './Button';
import personAddIcon from '../resources/person-add.svg';
import checkIcon from '../resources/check2-all.svg';
import MyImage from './Imagem';
import { useNavigate } from 'react-router-dom';

function RegisterForm(props) {
    const navigate = useNavigate();
    const logo = 'https://play-lh.googleusercontent.com/10RVls3lohQiKhwqcSc6MZohNhguDTPiuPrZ-N3TG6cC4hPPr9PuhsruSXwFwUOCTPI=w240-h480-rw';
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const validateData = () => {
        if (!email) {
            return alert("Email não preenchido!");
        } else if (!password) {
            return alert("Senha não informada!");
        } else if (passwordConfirm !== password) {
            return alert("Senhas não são iguais!");
        }
        alert("Usuário cadastrado com sucesso!");
        navigate('/home');
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePasswordConfirmChange = (e) => {
        setPasswordConfirm(e.target.value);
    }

    return (
        <div>
            <form name="register_form">
                <fieldset>
                    <MyImage src={logo} alt="logo" height={160} width={160} />
                    <div className='mydiv' />
                    <label htmlFor="email">Email/Login:</label>
                    <input type="email" id="email" placeholder="Digite seu email/login" value={email} onChange={handleEmailChange} /><br />
                    <label htmlFor="password">Senha:</label>
                    <input type="password" id="password" placeholder="Digite sua senha" value={password} onChange={handlePasswordChange} /><br />
                    <label htmlFor="password">Confirmação de Senha:</label>
                    <input type="password" id="passwordConfirm" placeholder="Confirme sua senha" value={passwordConfirm} onChange={handlePasswordConfirmChange} /><br />
                    <div className="loginButtons">
                        <MySection>
                            <MyButton to="/login" alt="Voltar" source={personAddIcon} nome="Voltar" />
                            <MyButton onClick={validateData} alt="Cadastrar" source={checkIcon} nome="Cadastrar" />
                        </MySection>
                    </div>
                </fieldset>
            </form>
        </div>
    )
};

export default RegisterForm;