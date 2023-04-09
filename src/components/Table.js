import './Table.css';

const MyTable = () => {
    return (
        <div className='content'>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>João Silva</td>
                        <td>joao.silva@gmail.com</td>
                        <td>(11) 99999-9999</td>
                        <td>Rua ADFADF, 123</td>
                    </tr>
                    <tr>
                        <td>Maria Santos</td>
                        <td>maria.santos@gmail.com</td>
                        <td>(11) 88888-8888</td>
                        <td>Rua CCCCB, 456</td>
                    </tr>
                    <tr>
                        <td>Maria ABCDE</td>
                        <td>maria.A@gmail.com</td>
                        <td>(11) 2343-8888</td>
                        <td>Rua BAAAAA, 342</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MyTable;