import {
  LabelStatistics,
  StatisticsPercentage,
  StatisticsItem,
} from './Statistics.styled';

export default function StatisticsList({ items }) {
  return (
    <ul className="stat-list">
      {items.map(item => (
        <StatisticsItem key={item.id}>
          <LabelStatistics>{item.label}</LabelStatistics>
          <StatisticsPercentage>{item.percentage}</StatisticsPercentage>
        </StatisticsItem>
      ))}
    </ul>
  );
}
