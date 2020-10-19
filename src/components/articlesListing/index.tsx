import React, { FC } from "react";

import { Article } from "../../typings";
import {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledLinkText,
  StyledCategoryTag,
  HashtagIcon
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
            <StyledLinkContainer to={article.slug} title={article.title}>
              <StyledLinkHeading>{article.title}</StyledLinkHeading>
              <StyledLinkText>{article.description}</StyledLinkText>
              <StyledCategoryTag>
                <HashtagIcon>#</HashtagIcon>
                {article.collection}
              </StyledCategoryTag>
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
