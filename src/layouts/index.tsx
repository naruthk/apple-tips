import React, { FC } from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import "modern-normalize";
import "../styles/normalize";

import Header from "../components/header";
import Footer from "../components/footer";
import LayoutRoot from "../components/LayoutRoot";
import LayoutMain from "../components/LayoutMain";

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

const MainLayout: FC = ({ children }) => (
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
      <LayoutRoot>
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
        <Header title={data.site.siteMetadata.title} />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
);

export default MainLayout;
