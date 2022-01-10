import PropTypes from 'prop-types';

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

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
