import React from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext('');

const GlobalStorage = ({ children }) => {
	const [theme, setTheme] = React.useState(false);

	const changeTheme = () => {
		setTheme(!theme);
		window.localStorage.setItem('theme', theme);
	};

	return <GlobalContext.Provider value={{ theme, changeTheme }}>{children}</GlobalContext.Provider>;
};

GlobalStorage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default GlobalStorage;
