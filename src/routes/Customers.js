import MySection from '../components/Section';
import MyButton from '../components/Button';
import MyHeader from '../components/Header';
import './Customers.css';
import MyTable from '../components/Table';
import personAddIcon from '../resources/person-add.svg';
import personFillGearIcon from '../resources/person-fill-gear.svg';
import personDashIcon from '../resources/person-dash.svg';
import arrowBarLeftIcon from '../resources/arrow-bar-left.svg';





function Customers(props) {
    return (
        <div>
            <MyHeader title="Clientes" />
            <MyTable/>
            <MySection>
                <MyButton to="" alt="Novo" source={personAddIcon} nome="Novo" />
                <MyButton to="" alt="Editar" source={personFillGearIcon} nome="Editar" />
                <MyButton to="" alt="Excluir" source={personDashIcon} nome="Excluir" />
                <MyButton to="/home" alt="Voltar" source={arrowBarLeftIcon} nome="Voltar" />
            </MySection>
        </div>
    )
};

export default Customers;