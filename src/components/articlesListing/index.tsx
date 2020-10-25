import React, { FC } from "react";

import { Article } from "../../typings";
import {
  StyledContainer,
  StyledListing,
  StyledListItem,
  StyledLinkContainer,
  StyledLinkHeading,
  StyledCategoryTag,
  HashtagIcon,
  StyledArticleNotFound
} from "./style";

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
              // @ts-ignore TO-DO: resolve style-component props error
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
      <StyledArticleNotFound>
        <h3>It's embarrassing that we don't any content for this yet.</h3>
        <p>Try removing a filter to broaden your search.</p>
      </StyledArticleNotFound>
    )}
  </StyledContainer>
);

export default ArticlesListing;
