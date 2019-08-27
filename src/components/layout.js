/** @jsx jsx */
import PropTypes from 'prop-types';
import { Footer, Main, Styled, Flex, css, jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import useSiteMetadata from '$hooks/use-site-metadata';
import ImageSlider from './image-slider';
import SEO from './seo';

import Header from './header';
// import './layout.css';

const Layout = ({ children }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Styled.root>
      <Global
        styles={css({
          '*': {
            boxSizing: 'inherit'
          },
          body: {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            textRendering: 'optimizeLegibility'
          },
          '::selection': {
            backgroundColor: 'primary',
            color: 'background'
          },
          a: {
            transition: 'all 0.3s ease-in-out'
          }
        })}
      />
      <SEO title="Home" />
      <Header
        siteTitle={siteMetadata.title}
        siteOwner={siteMetadata.organization.owner}
      />

      <Main>
        <Flex
          sx={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Lavori in corso!</h1>
          <Flex
            sx={{
              width: '100%',
              marginBottom: '1.45rem',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <ImageSlider />
          </Flex>
          {/* {children} */}
        </Flex>
      </Main>
      <Footer>© {new Date().getFullYear()} Rossana Campli</Footer>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
