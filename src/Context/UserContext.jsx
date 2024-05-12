import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext('');

// const userRequest = new UserRequest();

const UserStorage = ({ children }) => {
	// const [login, setLogin] = React.useState(null);

	// const token = window.localStorage.getItem('token');

	// const { data, error, loading, post, get } = useAxios();

	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

UserStorage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserStorage;
