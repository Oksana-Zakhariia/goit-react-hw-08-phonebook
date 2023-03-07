import styled from 'styled-components';
export const Greeting = styled.p`
  grid-gap: ${props => props.theme.spacing.step * 5}px;
  color: ${props => props.theme.colors.white};
  @media (min-width: ${props => props.theme.breakpoints.s}) {
    font-size: ${props => props.theme.fontSizes.medium};

    margin: ${props => props.theme.spacing.step * 4}px;
    margin-left: 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    font-size: ${props => props.theme.fontSizes.large};

    margin: ${props => props.theme.spacing.step * 6}px;
    margin-left: 0px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    margin: ${props => props.theme.spacing.step * 8}px;
    margin-left: 0px;
  }
`;
export const Button = styled.button`
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
    box-shadow: 0px 2px 10px 2px ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
  }
`;
export const UserMenuContainer = styled.div`
  align-items: center;
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
