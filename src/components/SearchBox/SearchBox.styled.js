import styled from 'styled-components';
export const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.theme.spacing.step * 5}px;
  border: 2px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: ${props => props.theme.spacing.step * 5}px;
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
