import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de WebSite</td>
            <td className="deposit">R$ 1000,00</td>
            <td>Trabalho</td>
            <td>01/01/2021</td>
          </tr>
          <tr>
            <td>Compra Tênis</td>
            <td className="withdraw">- R$ 500,00</td>
            <td>Trabalho</td>
            <td>01/01/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
