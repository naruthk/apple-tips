import styled from "@emotion/styled";
import { Link } from "gatsby";
import Container from "../Container";

import { dimensions, colors } from "../../styles/variables";

const StyledFooter = styled.footer`
  margin: 2rem 0;
  padding: 0 ${dimensions.containerPadding}rem;
  background-color: ${colors.black};
`;

const FooterInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${colors.white};
`;

const ContributionsLink = styled(Link)`
  margin: 2.5rem auto 1rem auto;
  padding: 1.5rem;
  border-radius: 20px;
  color: ${colors.brand};
  font-weight: 600;
  font-size: ${dimensions.fontSize.large}px;
  
  &:hover,
  &:focus {
    text-decoration: none;
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
    &:hover,
    &:focus {
      color: ${colors.white};
      text-decoration: none;
    }
  }
`;

export {
  StyledFooter,
  FooterInner,
  ContributionsLink,
  AuthorCredit
};
