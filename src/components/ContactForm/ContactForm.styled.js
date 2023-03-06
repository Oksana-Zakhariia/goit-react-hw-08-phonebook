import { Field, Form } from 'formik';
import styled from 'styled-components';
export const Forma = styled(Form)`
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
export const Input = styled(Field)`
  padding: ${props => props.theme.spacing.step * 2}px;
  border: 4px solid transparent;
  border-radius: ${props => props.theme.spacing.step * 4}px;
  outline: none;
  &:focus {
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
  }
`;
export const FormLabel = styled.label`
  gap: ${props => props.theme.spacing.step * 1}px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;
export const FormButton = styled.button`
  border: 2px solid ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.mainBackground};
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 1}px;
  width: 150px;
  font-size: ${props => props.theme.fontSizes.medium};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.dark};
  }
`;
