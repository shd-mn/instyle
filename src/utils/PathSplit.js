import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const PathSplit = (str) => {
    return str.split('/').map(
        (item) =>
            item !== '' && (
                <Fragment key={item}>
                    /<Link to={`/${item}`}>{item}</Link>
                </Fragment>
            )
    );
};
