import React, { FC } from "react";

import { Article } from "../../typings";
import {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledCategoryTag,
  HashtagIcon
} from "./style";
import { getRandomInt } from "../../utils/numbers";
import { RANDOM_COLORS } from "./constants";

interface ArticlesListProps {
  items: Array<Article>;
}

const ArticlesListing: FC<ArticlesListProps> = ({ items }) => (
  <StyledContainer>
    {items.length ? (
      <StyledListing>
        {items.map((article, index) => (
          <StyledListItem key={article.slug}>
            <StyledLinkContainer
              to={article.slug}
              title={article.title}
              posIndex={index}
            >
              <StyledLinkHeading>{article.title}</StyledLinkHeading>
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
