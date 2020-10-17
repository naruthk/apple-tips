import React, { FC } from "react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

import { Article } from "../typings";

const StyledContainer = styled.div``;

interface ArticlesListProps {
  items: Array<Article>;
}

const ArticlesList: FC<ArticlesListProps> = ({ items }) => (
  <StyledContainer>
    {items && !!items.length ? (
      <ul>
        {items.map(article => (
          <li key={article.slug}>
            <p>{article.title}</p>
            <p>{article.description}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p>Nothing to show</p>
    )}
  </StyledContainer>
);

export default ArticlesList;
