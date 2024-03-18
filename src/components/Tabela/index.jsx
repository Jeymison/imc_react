import 'bootstrap/dist/css/bootstrap.min.css';

import "../Tabela/Tabela.module.css";

function TabelaIMC() {
    return (
        <div className="blocoTab">
            <table className="table">
                <thead>
                    <tr>
                        <th id="th-titulo">IMC</th>
                        <th id="th-titulo">Classificação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="td-bg">
                        <td> Ate 18,50</td>
                        <td>Abaixo do peso</td>
                    </tr>
                    <tr>
                        <td>De 18,5 e 24,99</td>
                        <td>Peso normal</td>
                    </tr>
                    <tr id="td-bg">
                        <td>De 25 e 29,99</td>
                        <td>Sobrepeso</td>
                    </tr>
                    <tr>
                        <td>De 30 e 34,99</td>
                        <td>Obesidade grau 1</td>
                    </tr>
                    <tr id="td-bg">
                        <td>De 35 e 39,99</td>
                        <td>Obesidade grau 2</td>
                    </tr>
                    <tr>
                        <td>Acima</td>
                        <td>Obesidade grau 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TabelaIMC;