import React, { FC } from "react";
import Helmet from "react-helmet";
import { Global, css } from "@emotion/core";
import { StaticQuery, graphql } from "gatsby";
import normalize from "../styles/normalize";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/header";
import Footer from "../components/footer";

import {
  StyledRootLayoutContainer,
  StyledInnerLayoutContainer,
  StyledChildContainer
} from "./style";

interface StaticQueryProps {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string;
      texts: {
        copyright: string;
        applyForContributions: string;
        email: string;
      };
    };
  };
}

interface MainLayoutProps {
  location: {
    pathname: string;
  }
}

const MainLayout: FC<MainLayoutProps> = ({ location, children }) => {
  const isRootPage = location && location.pathname === "/";

  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          site {
            siteMetadata {
              title
              description
              texts {
                copyright
                applyForContributions
                builtWithGatsby
              }
            }
          }
        }
      `}
      render={(data: StaticQueryProps) => (
        <StyledRootLayoutContainer>
          <Global styles={() => css(normalize)} />
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              {
                name: "description",
                content: data.site.siteMetadata.description
              },
              { name: "keywords", content: data.site.siteMetadata.keywords }
            ]}
            />
          <Header title={data.site.siteMetadata.title} showTagline={isRootPage} />
          <StyledInnerLayoutContainer>
            <StyledChildContainer>
              {children}
            </StyledChildContainer>
          </StyledInnerLayoutContainer>
          <Footer />
        </StyledRootLayoutContainer>
      )}
    />
  );
};

export default MainLayout;
