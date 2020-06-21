import React from 'react';
import styled from 'styled-components';

interface LocationProps {
	location: string;
}

export const Location = ({ location }: LocationProps) => {
	return <Container>{location}</Container>;
};

const Container = styled.div`
	font-family: 'Museo Moderno';
`;
