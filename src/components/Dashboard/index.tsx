import { Summary } from '../Summary';
import { TransacionsTable } from '../TransactionsTable';
import { Container } from './style';

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <TransacionsTable />
        </Container>
    );
}