import React from 'react';
import './ProductCard.scss';
import * as Icon from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
	const navigate = useNavigate();

	const onClick = () => {
		console.log('clicous');
		navigate('/home');
	};

	return (
		<div className="pdct-crd">
			<div className="pdct-crd-fst-ctr">
				<img src="https://acdn.mitiendanube.com/stores/001/111/914/products/bull-4979b7e878bc9b297217064851294929-1024-1024.webp" />
				<span />
			</div>

			<div className="pdct-crd-scnd-crt">
				<p className="pdct-crd-name">Shorts Compressão 2 em 1 - Shadow PB</p>

				<div className="pdct-crd-price">
					<div onClick={onClick}>
						<span>R$ 90,00</span>
						<h1>R$ 74,90</h1>
						<p>Ou até 10x de R$ 08,50</p>
					</div>

					<div className="pdct-crd-addCart">
						<Icon.Handbag />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
