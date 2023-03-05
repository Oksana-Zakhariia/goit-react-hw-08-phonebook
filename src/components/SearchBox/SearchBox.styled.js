import styled from 'styled-components';
export const Box = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.theme.spacing.step * 5}px;
  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  padding: 20px;
  margin-top: ${props => props.theme.spacing.step * 10}px;
  margin-left: auto;
  margin-right: auto;
`;
export const SearchLabel = styled.label`
  gap: ${props => props.theme.spacing.step * 3}px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;
export const SearchFilter = styled.input`
  padding: ${props => props.theme.spacing.step * 2}px;
  border: 4px solid transparent;
  border-radius: ${props => props.theme.spacing.step * 4}px;
  outline: none;
`;
