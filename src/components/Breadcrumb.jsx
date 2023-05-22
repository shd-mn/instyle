import { Link } from 'react-router-dom';
import { PathSplit } from '../utils/PathSplit';

const Breadcrumb = ({ title, pathname }) => {
    return (
        <div className="breadcrumb">
            <Link to="/">Home</Link>

            {pathname && PathSplit(pathname)}
            <span>/</span>
            <p>{title}</p>
        </div>
    );
};
export default Breadcrumb;
