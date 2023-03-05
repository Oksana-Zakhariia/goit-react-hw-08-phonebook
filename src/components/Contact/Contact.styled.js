import styled from 'styled-components';
export const ContactItem = styled.div`
  width: 350px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.theme.spacing.step * 5}px;
  border: 4px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  padding: 20px;
  margin-top: ${props => props.theme.spacing.step * 5}px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  background-color: ${props => props.theme.colors.imageBackground};
`;
export const ContactButton = styled.button`
  border: 4px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 1}px;
  width: 100px;
  font-size: ${props => props.theme.fontSizes.large};
`;
