import PropTypes from 'prop-types';

const Input = ({ label, type, name }) => {
    return (
        <div className='mb-3'>
            <label className='block text-gray-900 mb-1' htmlFor={name}>{label}</label>
            <input className='px-4 py-2 rounded-md border w-full focus:outline-none' type={type} name={name} id={name} placeholder={label} />
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
}

export default Input;