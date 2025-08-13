import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { favMoon as FaSolidMoon } from '@fortawesome/free-solid-svg-icons';
import { faMoon as FaRegularMoon } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

export default function Header({ darkMode, toggleDarkMode }){
    return (
        <div className={`headerContainer ${darkMode ? 'Dark-Mode-On' : 'Dark-Mode-Off'}`}>
            <h2>Where in the world?</h2>
            <div className='Dark-Mode-Button' onClick={toggleDarkMode}>
                <FontAwesomeIcon icon={darkMode ? FaSolidMoon : FaRegularMoon} />
                <p>Dark Mode</p>
            </div>
        </div>
    );
};

Header.propTypes = {
    darkMode: PropTypes.bool.isRequired,
    toggleDarkMode: PropTypes.func.isRequired,
};