import styled from "@emotion/styled";
import { Link } from "gatsby";
import Container from "../Container";

import { dimensions, colors, radius } from "../../styles/variables";

const StyledFooter = styled.footer`
  margin-top: 2rem;
  background-color: ${colors.black};
`;

const CallToActionContainer = styled.div`
  margin-top: -5rem;
  padding: 1rem;
  background-color: ${colors.ui.hero};
  border-bottom: 2px solid ${colors.white};
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
  padding: ${dimensions.containerPadding}rem 0;
`;

const ContributionsLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  padding: 1.5rem;
  border-radius: ${radius.container}px;
  color: ${colors.black};
  font-weight: 600;
  font-size: ${dimensions.fontSize.large}px;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const ActionLink = styled.span`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid ${colors.gray.calm};
  font-size: ${dimensions.fontSize.regular}px;

  :hover {
    border: 1px solid ${colors.black};
    background-color: ${colors.black};
    color: ${colors.white};
  }

  ::after {
    content: ">";
    margin-left: 10px;
  }  
`;

const AuthorCredit = styled.p`
  margin: 1rem 0;
  font-size: ${dimensions.fontSize.small}px;
  font-weight: 300;

  a {
    color: ${colors.white};
    font-weight: 600;
    &:hover,
    &:focus {
      color: ${colors.white};
      text-decoration: none;
    }
  }
`;

const StyledLegalSection = styled.p`
  margin: 1.5rem;
  font-size: ${dimensions.fontSize.xsmall}px;
  font-weight: 300;
`;

export {
  StyledFooter,
  CallToActionContainer,
  FooterInner,
  ContributionsLink,
  AuthorCredit,
  ActionLink,
  StyledLegalSection
};
