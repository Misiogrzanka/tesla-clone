import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
	title,
	description,
	leftBtnText,
	rightBtnText,
	backgroundImage
}) => {
	return (
		// Wrapper for the main content of the page

		<Wrap bgImage={backgroundImage}>
			<Fade bottom>
				<ItemText>
					<h1>{title}</h1>
					<p>{description}</p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</ButtonGroup>
				</Fade>
				{/* Down arrow component redirecting to the next model */}
				<DownArrow src="/images/down-arrow.svg" />
			</Buttons>
		</Wrap>
	);
};

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;

	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const ButtonGroup = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.875rem;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23 26 32 / 0.8);
	border-radius: 6.25rem;
	color: white;
	cursor: pointer;
	margin: 0.5rem;
	opacity: 0.85;

	font-size: 0.75rem;
	text-transform: uppercase;

	height: 2.5rem;
	width: 16rem;

	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background-color: rgba(23 26 32 / 0.9);
	}
`;

const RightButton = styled(LeftButton)`
	background-color: #fff;
	opacity: 0.65;
	color: #000;

	&:hover {
		background-color: rgba(232 229 223 / 0.9);
	}
`;

const DownArrow = styled.img`
	height: 2.5rem;
	overflow-x: hidden;

	animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
