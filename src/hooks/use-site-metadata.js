import { useStaticQuery, graphql } from 'gatsby';

const useSiteMetadata = () => {
  const result = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          author {
            name
          }
          organization {
            name
            owner
            logo
          }
          social {
            instagram
            fbAppID
          }
        }
      }
    }
  `);

  return result.site.siteMetadata;
};

export default useSiteMetadata;
