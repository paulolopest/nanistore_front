import React from 'react';
import PropTypes from 'prop-types';
import UserStorage from './UserContext';
import GlobalStorage from './GlobalContext';

export const IndexContext = React.createContext();

const IndexStorage = ({ children }) => {
	return (
		<IndexContext.Provider value={{}}>
			<UserStorage>
				<GlobalStorage>{children}</GlobalStorage>
			</UserStorage>
		</IndexContext.Provider>
	);
};

IndexStorage.propTypes = {
	children: PropTypes.node.isRequired,
};

export default IndexStorage;
