
// import Statistics from './Statistics';

export default function StatisticsList({ items }) {
    return (
        <ul className="stat-list">
            {items.map(item => ( 
               <li className="item" key={item.id}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
        </li>
        ))}
    </ul>)
}
 