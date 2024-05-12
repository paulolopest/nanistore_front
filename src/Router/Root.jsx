import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import IndexStorage from '../Context/ContextIndex';

const Root = () => {
	return (
		<IndexStorage>
			<Header />
			<Outlet />
		</IndexStorage>
	);
};

export default Root;
