import { useMyContext } from '../../context/MainContext';
import { convertCurrency } from '../../utils/convertCurrency';
import styles from './Cart.module.scss';
const CartItem = ({ item }) => {
    const { currency } = useMyContext();
    const price = item.price + item.sale;
    return (
        <tbody className={styles['list-item']}>
            <tr>
                <td>
                    <figure className={styles['img-box']}>
                        <img src={item.url[0]} alt={item.name} />
                    </figure>
                </td>
                <td>
                    <h3>{item.name}</h3>
                </td>
                <td>
                    <h3>
                        {convertCurrency(price, currency)}{' '}
                        {currency === 'USD' ? '$' : '₼'}
                    </h3>
                </td>
                <td>
                    <input type="number" min="1" max="100" defaultValue='1' />
                </td>
                <td>
                    <h3>{item.name}</h3>
                </td>
            </tr>
        </tbody>
    );
};
export default CartItem;
