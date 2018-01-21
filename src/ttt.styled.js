import styled from "styled-components";

export const TBoard = styled.div`
	display:flex;
	flex-direction: column;
	width:calc(100% - 3rem);
	height:calc(100% - 3rem);
	padding:2rem;
`;
export const TAction = styled.div`
	color:black;
	height:1rem;
	font-size:1rem;
	line-height:1rem;
`;

export const Table = styled.table`
	width:100%;
	height:100%;
	border:1px solid grey;
	background: grey;
	border-collapse: separate;
	border-spacing: 1px;
	position:relative;
	top:-1rem;
`;

export const Tr = styled.tr`
	height:33.33%;
`;
export const Td = styled.td`
	width:33.33%;
	text-align:center;
	background:white;
`;
