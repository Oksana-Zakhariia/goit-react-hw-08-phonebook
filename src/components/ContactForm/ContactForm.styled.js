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
`;
export const FormLabel = styled.label`
  gap: ${props => props.theme.spacing.step * 1}px;
  display: flex;
  justify-content: space-between;
  width: 300px;
  align-items: center;
`;
export const FormButton = styled.button`
  border: 4px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 1}px;
  width: 210px;
  font-size: ${props => props.theme.fontSizes.large};
`;
