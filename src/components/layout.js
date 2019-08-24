/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { Footer, Main, Styled, css, jsx } from 'theme-ui';
import { Global } from '@emotion/core';
import useSiteMetadata from '../hooks/use-site-metadata';
import Image from './image';

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
      <Header
        siteTitle={siteMetadata.title}
        siteOwner={siteMetadata.organization.owner}
      />

      <Main>
        <div
          sx={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1>Lavori in corso!</h1>
          <div
            sx={{
              width: '100%',
              maxWidth: '300px',
              marginBottom: '1.45rem'
            }}
          >
            <Image />
          </div>
          {/* {children} */}
        </div>
      </Main>
      <Footer>© {new Date().getFullYear()} Rossana Campli</Footer>
    </Styled.root>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
