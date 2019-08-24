import { graphql, useStaticQuery } from 'gatsby';

const useNavigation = () => {
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       allPage {
  //         nodes {
  //           title
  //           slug
  //         }
  //       }
  //     }
  //   `
  // );

  // return data.allPage.nodes;
  return [
    {
      title: 'Lezioni',
      slug: '/lezioni'
    },
    {
      title: 'Chi Siamo',
      slug: '/chi-siamo'
    },
    {
      title: 'Il Centro',
      slug: '/il-centro'
    },
    {
      title: 'Prezzi',
      slug: '/prezzi'
    },
    {
      title: 'Corsi',
      slug: '/corsi'
    },
    {
      title: 'Dove Trovarci',
      slug: '/dove-trovarci'
    },
    {
      title: 'Contatti',
      slug: '/contatti'
    }
  ];
};

export default useNavigation;
