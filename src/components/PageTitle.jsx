import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const PageTitle = ({pageName, title}) => {
    return (
        <div className="c-container bg-slate-50">
            <h2  data-aos="zoom-in" className="text-3xl text-center text-[#2A3342] font-medium">{title}</h2>
            <div  data-aos="fade-up" data-aos-delay="300"  className='flex items-center justify-center mt-2' >
                <Link to='/' className='text-green-500'>Home</Link>
                <span className='text-gray-500'>/{pageName}</span>
            </div>
        </div>
    );
};

PageTitle.propTypes = {
    pageName: PropTypes.string,
    title: PropTypes.string,
}

export default PageTitle;