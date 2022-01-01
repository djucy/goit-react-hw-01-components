import data from './data.json';
import StatisticsList from './StatisticsList';

export default function StatisticsSection({ title, children }) {
    return (<section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        {<StatisticsList items={ data}/>}
        </section>


    )
}
