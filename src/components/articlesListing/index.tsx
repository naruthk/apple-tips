import React, { FC } from "react";

import { Article } from "../../typings";
import {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledLinkText
} from "./style";

interface ArticlesListProps {
  items: Array<Article>;
}

const ArticlesListing: FC<ArticlesListProps> = ({ items }) => (
  <StyledContainer>
    {items.length ? (
      <StyledListing>
        {items.map(article => (
          <StyledListItem key={article.slug}>
            <StyledLinkContainer to={article.slug}>
              <StyledLinkHeading>{article.title}</StyledLinkHeading>
              <StyledLinkText>{article.description}</StyledLinkText>
            </StyledLinkContainer>
          </StyledListItem>
        ))}
      </StyledListing>
    ) : (
      <p>Nothing to show</p>
    )}
  </StyledContainer>
);

export default ArticlesListing;
