import React from 'react';
import { GlobalContext } from '../../Context/GlobalContext';
import './MainPage.scss';
import { AnimatePresence, motion, useMotionValue, useTransform } from 'framer-motion';

import ProductCard from '../../Components/ProductCard/ProductCard';

const MainPage = () => {
	const { theme } = React.useContext(GlobalContext);
	const [containerWidth, setContainerWidth] = React.useState({ left: 0, right: 0 });

	const ref = React.useRef();

	React.useEffect(() => {
		if (ref.current) {
			setContainerWidth({ left: -16 * 170 + 16 * 5, right: 0 });
		}
	}, [ref]);

	console.log(containerWidth);

	return (
		<div className={`${theme && 'darkTheme'} mn-pg-ctr `}>
			<div className="mn-pg-fstBanner">
				<img src="https://acdn.mitiendanube.com/stores/001/111/914/themes/amazonas/slide-1710042654005-4772266774-4f3553d320cbed496b753698914a39091710042656.jpg?1121670904" />
			</div>
			<motion.div className="mn-pg-crs-ctr">
				<motion.div
					ref={ref}
					className="mn-pg-crs"
					drag="x"
					dragConstraints={containerWidth}
					dragElastic={0.2}
				>
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</motion.div>
			</motion.div>

			<AnimatePresence
				initial={{ opacity: 0, y: 200 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="mn-pg-fstBanner"
			>
				<motion.img src="https://acdn.mitiendanube.com/stores/001/111/914/themes/amazonas/slide-1710042654005-4772266774-4f3553d320cbed496b753698914a39091710042656.jpg?1121670904" />
			</AnimatePresence>
			{/* <div className="mn-pg-collection">Coleções</div>
			<div className="mn-pg-crs">Lancamentos</div>
			<div className="mn-pg-ext-info">Frete, parcelas etc</div> */}
		</div>
	);
};

export default MainPage;
