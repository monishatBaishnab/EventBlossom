import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PageTitle = ({pageName, title}) => {
    return (
        <div className="c-container bg-slate-50">
            <h2 className="text-3xl text-center text-[#2A3342] font-medium">{pageName}</h2>
            <div className='flex items-center justify-center mt-2'>
                <Link to='/' className='text-green-500'>Home</Link>
                <span className='text-gray-500'>/{title}</span>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    pageName: PropTypes.string,
    title: PropTypes.string,
}

export default PageTitle;