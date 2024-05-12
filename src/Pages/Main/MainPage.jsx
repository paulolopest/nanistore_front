import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import './MainPage.scss';

const MainPage = () => {
	const { theme } = React.useContext(GlobalContext);

	return <div className={`${theme && 'darkTheme'} mn-pg-ctr `}>MainPage</div>;
};

export default MainPage;
