import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import useSiteMetadata from '$hooks/use-site-metadata';

function SEO({ description, lang, meta, title, image }) {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;
  const metaImage = image || siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang: siteMetadata.siteLang || lang
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription
        },
        {
          property: 'og:title',
          content: title
        },
        {
          property: 'og:url',
          content: siteMetadata.siteUrl
        },
        {
          property: 'og:description',
          content: metaDescription
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:image',
          content: metaImage
        }
      ].concat(meta)}
    >
      <link rel="canonical" href={siteMetadata.siteUrl} />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: 'it',
  meta: [],
  description: '',
  image: ''
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  image: PropTypes.string
};

export default SEO;
