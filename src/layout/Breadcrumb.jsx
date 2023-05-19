import { Link } from 'react-router-dom';
import { PathSplit } from '../utils/PathSplit';

const Breadcrumb = ({ pathname }) => {
    return (
        <div className="breadcrumb">
            <nav className="breadcrumb-nav">
                <Link to="/">Home</Link>
                {PathSplit(pathname)}
            </nav>
        </div>
    );
};
export default Breadcrumb;
