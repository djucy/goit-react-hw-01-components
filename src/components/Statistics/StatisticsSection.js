import data from './data.json';
import StatisticsList from './StatisticsList';
import {
  Container,
  ContentPosition,
  Section,
} from '../CommonStyle/Container.styled';
// import { StatContentPosition } from './Statistics.styled';
import { StatisticsTitle } from './Statistics.styled';

export default function StatisticsSection({ title, children }) {
  return (
    <Container>
      <Section>
        <ContentPosition>
          {title && <StatisticsTitle>{title}</StatisticsTitle>}
          <StatisticsList items={data} />
        </ContentPosition>
      </Section>
    </Container>
  );
}
