import Breadcrumb from './Breadcrumb';

const PageTitle = ({ title, pathname }) => {
    return (
        <div className="page-title">
            <h2>{title}</h2>
            <Breadcrumb pathname={pathname} />
        </div>
    );
};
export default PageTitle;
