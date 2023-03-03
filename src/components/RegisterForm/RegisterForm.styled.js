import styled from 'styled-components';
export const Form = styled.form`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.theme.spacing.step * 5}px;
  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  padding: 20px;
  margin-top: ${props => props.theme.spacing.step * 20}px;
  margin-left: auto;
  margin-right: auto;
`;
export const Input = styled.input`
  padding: ${props => props.theme.spacing.step * 3}px;
  border: 4px solid transparent;
  border-radius: ${props => props.theme.spacing.step * 4}px;
  outline: none;
`;
export const Label = styled.label`
  gap: ${props => props.theme.spacing.step * 3}px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;
export const Button = styled.button`
  border: 4px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 3}px;
  width: 210px;
  font-size: ${props => props.theme.fontSizes.large};
`;
