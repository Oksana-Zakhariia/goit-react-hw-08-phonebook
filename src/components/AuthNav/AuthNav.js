// import { NavLink } from 'react-router-dom';
import { AuthNavContainer, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </AuthNavContainer>
  );
};
