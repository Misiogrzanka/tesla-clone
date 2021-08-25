import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = (props) => {
	return (
		<Container>
			<Section
				title="Model S"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-s.jpg"
				leftBtnText="CustomOrder"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model Y"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-y.jpg"
				leftBtnText="CustomOrder"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model 3"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-3.jpg"
				leftBtnText="CustomOrder"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Model X"
				description="Order Online for Touchless Delivery"
				backgroundImage="model-x.jpg"
				leftBtnText="CustomOrder"
				rightBtnText="Existing inventory"
			/>
			<Section
				title="Lowest Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImage="solar-panel.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
				backgroundImage="solar-roof.jpg"
				leftBtnText="Order now"
				rightBtnText="Learn more"
			/>
			<Section
				title="Accessories"
				description="Check out TESLA ACCESSORIES"
				backgroundImage="accessories.jpg"
				leftBtnText="Shop now"
			/>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	height: 100vh;
`;
