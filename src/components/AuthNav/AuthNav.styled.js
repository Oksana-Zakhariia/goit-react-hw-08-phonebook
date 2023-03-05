import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
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
  };
  &:hover,
  &:focus: {
    color: red};
  }
`;

export const AuthNavContainer = styled.div`
  display: flex;
  grid-gap: ${props => props.theme.spacing.step * 5}px;
`;