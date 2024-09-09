import React from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext('');


const UserStorage = ({ children }) => {


	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

UserStorage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default UserStorage;
