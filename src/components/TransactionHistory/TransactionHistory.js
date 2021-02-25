import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
    <table className={s.transaction}>
        <thead className={s.thead}>
            <tr>
                <th>Type</th>
                <th>Amount</th>                                                                                                             
                <th>Currency</th>
            </tr>
        </thead>

        <tbody className={s.tbody}>{items.map(({id, type, amount, currency }) =>
            <tr key={id} >
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
            </tr>)}
   
        </tbody>
    </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
         PropTypes.shape({
             type: PropTypes.string.isRequired,
             amount: PropTypes.string.isRequired,
             currency: PropTypes.string.isRequired,
         })
     )
 };

export default TransactionHistory;