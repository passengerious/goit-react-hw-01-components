import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getRandomColor from '../../RandomColor'

const Statistics = ({ title, statistics }) => (
<section className={s.statistics}>
{title && <h2 className={s.title}>{title}</h2>}

<ul className={s.list}>
    {statistics.map(({ id, label, percentage=0 }) => (
        <li className={s.item} key={id} style={{ backgroundColor: getRandomColor() }}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
        </li>
    ))}
</ul>
</section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  statistics: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          lable: PropTypes.string,
          percentage: PropTypes.number.isRequired,
      })
  )
};

export default Statistics;
