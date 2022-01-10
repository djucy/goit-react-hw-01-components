import PropTypes from 'prop-types';
import {
  Container,
  ContentPosition,
  Section,
} from '../CommonStyle/Container.styled';
import {
  TransactionTableTitle,
  TransactionTableValue,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Container>
      <ContentPosition>
        <Section>
          <table className="transaction-history">
            <thead>
              <tr>
                <TransactionTableTitle eventType="type">
                  Type
                </TransactionTableTitle>
                <TransactionTableTitle eventType="amount">
                  Amount
                </TransactionTableTitle>
                <TransactionTableTitle eventType="currency">
                  Currency
                </TransactionTableTitle>
              </tr>
            </thead>

            <tbody>
              {items.map(item => (
                <tr key={item.id}>
                  <TransactionTableValue eventType="type">
                    {item.type}
                  </TransactionTableValue>
                  <TransactionTableValue eventType="amount">
                    {item.amount}
                  </TransactionTableValue>
                  <TransactionTableValue eventType="currency">
                    {item.currency}
                  </TransactionTableValue>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>
      </ContentPosition>
    </Container>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
