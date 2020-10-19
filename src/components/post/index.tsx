import { Link } from "gatsby";
import React, { FC } from "react";
import { Frontmatter } from "../../typings";
import CommandKeys from "../commandKeys";

import {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  StyledPostText,
  StyledGridContainer,
  StyledMetaItem,
  CommandKeyContainer
} from "./style";

interface PostProps {
  postData: Frontmatter,
  html: string;
  collection: string;
}

const Post: FC<PostProps> = ({ postData, html, collection }) => {
  const {
    title,
    date,
    author,
    keyboardCommand,
    source,
    osVersion
  } = postData;

  const osNameWithVersion = `${collection} ${osVersion}`;

  return (
    <StyledPostContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledGridContainer>
        {/* eslint-disable-next-line react/no-danger */}
        <StyledPostText dangerouslySetInnerHTML={{ __html: html }} />
        {keyboardCommand && <CommandKeys keys={[keyboardCommand]} />}
        <StyledMetaContainer>
          <StyledMetaItem>
            <p>
              <span>Suggested by</span>
              <Link to={`/author/${author}`} title={`Posts by ${author}`}>{author}</Link>
            </p>
          </StyledMetaItem>
          <StyledMetaItem>
            <p>
              <span>Published on</span>
              {date}
            </p>
          </StyledMetaItem>
          <StyledMetaItem>
            <p>
              <span>Works on</span>
              <Link to={`/${collection}`} title={`See more posts on ${collection}`}>{osNameWithVersion}</Link>
            </p>
          </StyledMetaItem>
          {source && (
            <StyledMetaItem>
              <p>
                <span>Source</span>
                <a href={source} title={source} target="_blank" rel="nofollow">Source</a>
              </p>
            </StyledMetaItem>
          )}
        </StyledMetaContainer>
      </StyledGridContainer>
    </StyledPostContainer>
  );
}

export default Post;
