/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a>
				<img src="/images/logo.svg"></img>
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => {
						return (
							<a key={index} href="#">
								{car}
							</a>
						);
					})}
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla &nbsp;Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>

			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => {
						return (
							<li>
								<a key={index} href="#">
									{car}
								</a>
							</li>
						);
					})}
				<li>
					<a href="#">Existing Inventory</a>
				</li>
				<li>
					<a href="#">Use Inventory</a>
				</li>
				<li>
					<a href="#">Trade-in</a>
				</li>
				<li>
					<a href="#">Cybertruck</a>
				</li>
				<li>
					<a href="#">Roadster</a>
				</li>
				<li>
					<a href="#">Semi</a>
				</li>
				<li>
					<a href="#">Item</a>
				</li>
				<li>
					<a href="#">Item 32</a>
				</li>
				<li>
					<a href="#">Area 251</a>
				</li>
			</BurgerNav>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	min-height: 3.75rem;
	padding: 0 1.25rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 0.625rem;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	a {
		font-weight: 600;
		text-transform: uppercase;
		margin-right: 0.625rem;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;

	background-color: #fff;
	list-style: none;
	text-align: start;
	z-index: 10;

	padding: 1.25rem;
	width: 18.75rem;

	display: flex;
	flex-direction: column;

	transform: ${(props) => (!props.show ? "translateX(100%)" : "translateX(0)")};
	transition: transform 0.2s ease-in-out;

	li {
		padding: 0.9375rem;
		border-bottom: 0.0625rem solid rgba(0 0 0 / 0.2);

		a {
			font-weight: 600;
		}
	}
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;
