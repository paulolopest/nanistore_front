import './Header.scss';
import React from 'react';
import * as Icon from '@phosphor-icons/react';
import { darkMode, lightMode } from '../Utils/Extra';
import Logo from '../Assets/Logo';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../Context/GlobalContext';

const Header = () => {
	const [cartCount, setCartCount] = React.useState(10);

	const { theme, changeTheme } = React.useContext(GlobalContext);

	return (
		<div className={`${theme && 'darkTheme'} hdr-ctr `}>
			<div className="hdr-fst-ctr ">
				<div className="hdr-fst-ctr-logo">
					<Logo />
				</div>

				<div className={`${theme && 'ctr-src-dkmd'} hdr-fst-ctr-src`}>
					<Icon.MagnifyingGlass />
					<input placeholder="Pesquisar" />
				</div>

				<div className="hdr-fst-ctr-nav">
					<div style={theme ? lightMode : darkMode} className="hdr-theme-btn" onClick={changeTheme}>
						{theme ? (
							<Icon.Moon className="toggleButtonLeft" style={darkMode.svg} />
						) : (
							<Icon.Sun className="toggleButtonRight" style={lightMode.svg} />
						)}
					</div>

					<div className="hdr-cart-ctr">
						<Icon.Handbag size={20} />
						<p>Carrinho</p>
						{cartCount && <span>{cartCount}</span>}
					</div>

					<div>
						<Icon.User size={20} />
						<p>Perfil</p>
					</div>
				</div>
			</div>

			<div className="hdr-scd-ctr">
				<Link to={'products/oversized-premium'}>Oversized Premium</Link>
				<Link to={'products/short-compressão'}>Shorts Compressão</Link>
				<Link to={'products/camisetas'}>Camisetas</Link>
				<Link to={'products/camiseta-surpresa'}>Camiseta Surpresa</Link>
				<Link to={'products/moletom'}>Moletom</Link>
				<Link to={'products/bermudas'}>Bermudas</Link>
				<Link to={'products/camisetas-dry-fit'}>Camiseta Dry-fit</Link>
				<Link to={'products/kit-compressão'}>Kit Compressão</Link>
			</div>
		</div>
	);
};

export default Header;
