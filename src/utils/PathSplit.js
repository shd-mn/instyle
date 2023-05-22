import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const PathSplit = (str) => {
    return str.split('/').map(
        (item, idx, arr) =>
            item !== '' &&
            idx !== arr.length - 1 && (
                <Fragment key={item}>
                    <span>/</span>
                    <Link to={`/${item}`}>{item}</Link>
                </Fragment>
            )
    );
};
