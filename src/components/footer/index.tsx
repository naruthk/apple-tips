import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  StyledFooter,
  CallToActionContainer,
  FooterInner,
  ContributionsLink,
  AuthorCredit,
  ActionLink,
  StyledLegalSection
} from "./style";

const CONTRIBUTIONS_PAGE_URL = "/contributions";

const Footer: FC = () => {
  const queriedData = useStaticQuery(graphql`
    query FooterDataForQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
            url
          }
          texts {
            copyright
            legal
            applyForContributions
          }
        }
      }
    }
  `);

  const { author, texts } = queriedData.site.siteMetadata;

  return (
    <StyledFooter>
      <FooterInner>
        <CallToActionContainer>
          <ContributionsLink to={CONTRIBUTIONS_PAGE_URL} title="Contribute">
            <p>{texts.applyForContributions}</p>
            <ActionLink>
              Contribute
            </ActionLink>
          </ContributionsLink>
        </CallToActionContainer>
        <AuthorCredit>
          <span>A fun side project by </span>
          <a href={author.url} title={`Homepage of ${author.name}`}>
            {author.name}
          </a>
        </AuthorCredit>
        <StyledLegalSection>{texts.legal}</StyledLegalSection>
      </FooterInner>
    </StyledFooter>
  );
};

export default Footer;
