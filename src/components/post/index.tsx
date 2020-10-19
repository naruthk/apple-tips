import { Link } from "gatsby";
import React, { FC } from "react";
import { Frontmatter } from "../../typings";
import Keyboard from "../keyboard";

import {
  StyledPostContainer,
  StyledTitle,
  StyledMetaContainer,
  StyledPostText,
  StyledGridContainer,
  StyledMetaItem
} from "./style";

interface PostProps {
  postData: Frontmatter;
  html: string;
  collection: string;
}

const Post: FC<PostProps> = ({ postData, html, collection }) => {
  const { title, date, author, shortcuts, source, osVersion } = postData;

  const osNameWithVersion = `${collection} ${osVersion}`;

  const readableDate = new Date(date).toLocaleDateString("en-us");

  return (
    <StyledPostContainer>
      <StyledTitle>{title}</StyledTitle>
      <StyledGridContainer>
        {/* @ts-ignore: Find way to resolve props and typescripts for styled-components */}
        <StyledPostText
          hasShortcuts={shortcuts}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {shortcuts && <Keyboard keys={[...shortcuts]} />}
        <StyledMetaContainer>
          <StyledMetaItem>
            <p>
              <span>Suggested by</span>
              <Link to={`/author/${author}`} title={`Posts by ${author}`}>
                {author}
              </Link>
            </p>
          </StyledMetaItem>
          <StyledMetaItem>
            <p>
              <span>Published on</span>
              {readableDate}
            </p>
          </StyledMetaItem>
          <StyledMetaItem>
            <p>
              <span>Works on</span>
              <Link
                to={`/${collection}`}
                title={`See more posts on ${collection}`}
              >
                {osNameWithVersion}
              </Link>
            </p>
          </StyledMetaItem>
          {source && (
            <StyledMetaItem>
              <p>
                <span>Source</span>
                <a href={source} title={source} target="_blank" rel="nofollow">
                  Source
                </a>
              </p>
            </StyledMetaItem>
          )}
        </StyledMetaContainer>
      </StyledGridContainer>
    </StyledPostContainer>
  );
};

export default Post;
