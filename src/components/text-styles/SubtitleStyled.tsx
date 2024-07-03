import styled from 'styled-components';

interface SubtitleStyledProps {
  padding?: boolean;
}
const SubtitleStyled = styled.h2<SubtitleStyledProps>`
  color: #ffffff;
  font-size: 2.5rem;
  font-weight: 600;
  padding-left: ${props => (props.padding ? '4rem' : '0')};
`;

export default SubtitleStyled;
