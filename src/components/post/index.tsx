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
        <StyledMetaContainer>
          <p>Suggested by <Link to={`/author/${author}`} title={`Posts by ${author}`}>{author}</Link></p>
          <p>Published: {date}</p>
          {keyboardCommand && <CommandKeys keys={[keyboardCommand]} />}
          <p>Version: <Link to={`/${collection}`} title={`See more posts on ${collection}`}>{osNameWithVersion}</Link></p>
          {source && <p><a href={source} title={source} target="_blank" rel="nofollow">Source</a></p>}
        </StyledMetaContainer>
      </StyledGridContainer>
    </StyledPostContainer>
  );
}

export default Post;
