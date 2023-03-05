import styled from 'styled-components';
export const Greeting = styled.p`
  grid-gap: ${props => props.theme.spacing.step * 5}px;
  color: ${props => props.theme.colors.white};
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin: ${props => props.theme.spacing.step * 4}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin: ${props => props.theme.spacing.step * 6}px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin: ${props => props.theme.spacing.step * 8}px;
  }
`;
export const Button = styled.button`
  border: 4px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 1}px;
  width: 200px;
  font-size: ${props => props.theme.fontSizes.large};
`;
