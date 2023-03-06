import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
  padding: 10px;
  background-color: darkslateblue;
  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  width: 350px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: ${props => props.theme.spacing.step * 10}px;
`;
