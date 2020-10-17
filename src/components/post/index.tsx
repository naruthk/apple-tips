import React, { FC } from "react";
import { Frontmatter } from "../../typings";
import CommandKeys from "../commandKeys";

import {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  CommandKeyContainer
} from "./style";

interface PostProps {
  postData: Frontmatter,
  html: string;
}

const Post: FC<PostProps> = ({ postData, html }) => {
  const {
    title,
    date,
    author,
    keyboardCommand,
    source,
    osVersion
  } = postData;

  return (
    <StyledPostContainer>
      <StyledTitle>{title}</StyledTitle>
      {/* eslint-disable-next-line react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <StyledMetaContainer>
        <p>Suggested by {author}</p>
        <p>Published: {date}</p>
        <CommandKeys keys={[keyboardCommand]} />
        <p>Version: {osVersion}</p>
        {source && <p>Source: {source}</p>}
      </StyledMetaContainer>
    </StyledPostContainer>
  );
}

export default Post;
