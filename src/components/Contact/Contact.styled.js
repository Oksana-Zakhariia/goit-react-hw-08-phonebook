import styled from 'styled-components';
export const ContactItem = styled.div`
  width: 310px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: ${props => props.theme.spacing.step * 5}px;
  border: 1px solid ${({ color }) => color ?? '#fff'};
  border-radius: ${props => props.theme.spacing.step * 4}px;
  transition: transform 0.5s ${props => props.theme.animations.cubicBezier};
  padding: 5px;
  margin-top: ${props => props.theme.spacing.step * 2}px;
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;
export const ContactButton = styled.button`
  border: 2px solid ${props => props.theme.colors.light};
  border-radius: ${props => props.theme.spacing.step * 3}px;
  background-color: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 500;
  padding: ${props => props.theme.spacing.step * 1}px;
  width: 60px;
  font-size: ${props => props.theme.fontSizes.small};
`;
export const NameField = styled.div`
  width: 200px;
  display: flex;
  flex-wrap: wrap;'
  gap: 10px
`;
