import data from './data.json';
import StatisticsList from './StatisticsList';
import {
  Container,
  ContentPosition,
  Section,
} from '../CommonStyle/Container.styled';

export default function StatisticsSection({ title, children }) {
  return (
    <Container>
      <Section>
        {/* <ContentPosition> */}
        {title && <h2 className="title">{title}</h2>}
        <StatisticsList items={data} />
        {/* </ContentPosition> */}
      </Section>
    </Container>
  );
}
