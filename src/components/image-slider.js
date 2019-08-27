/** @jsx jsx */
import { Flex, jsx } from 'theme-ui';
import { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { useTransition, animated, config } from 'react-spring';

const Image = ({ node, direction }) => {
  const transitions = useTransition(node, p => p.id, {
    from: {
      opacity: 0,
      transform: `translate3d(${1 * direction}10%,0,0)`
    },
    enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
    leave: { opacity: 0, transform: `translate3d(${-1 * direction}10%,0,0)` },
    config: config.slow
  });
  return transitions.map(({ item, key, props }) => {
    return (
      <animated.div
        key={key}
        style={{
          ...props,
          width: '100%',
          height: '100%',
          flexShrink: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}
      >
        <Img
          fixed={item.childImageSharp.fixed}
          key={key}
          alt={item.name.replace(/-/g, ' ').substring(2)}
        />
      </animated.div>
    );
  });
};

const arrowStyle = {
  position: 'absolute',
  top: 'calc(200px - (2.3rem / 2))',
  cursor: 'pointer',
  color: 'white',
  backgroundColor: 'rgba(100, 255, 255, 0.3)',
  width: '2.3rem',
  height: '2.3rem',
  fontSize: '2rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '&:hover': {
    backgroundColor: 'rgba(100, 255, 255, 0.6)'
  }
};

export default function SlideShow() {
  const [slide, setSlide] = useState({
    index: 0,
    direction: 1
  });
  const { allFile } = useStaticQuery(
    graphql`
      query {
        allFile(
          sort: { fields: name, order: DESC }
          filter: { sourceInstanceName: { eq: "images" } }
        ) {
          edges {
            node {
              id
              name
              childImageSharp {
                fixed(fit: COVER, height: 400, background: "blue") {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    `
  );
  const maxLength = allFile.edges.length - 1;
  const handleNext = () => {
    setSlide(({ index }) => ({
      index: index === maxLength ? 0 : index + 1,
      direction: 1
    }));
  };
  const handlePrevious = () => {
    setSlide(({ index }) => ({
      index: index === 0 ? maxLength : index - 1,
      direction: -1
    }));
  };

  useEffect(() => {
    const handler = e => {
      if (e.keyCode === 39) {
        handleNext();
      } else if (e.keyCode === 37) {
        handlePrevious();
      }
    };
    document.addEventListener('keydown', handler);

    return () => document.removeEventListener('keydown', handler);
  }, [handleNext, handlePrevious]);

  const { node } = allFile.edges[slide.index];

  return (
    <div>
      <Flex
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '500px',
          height: 400,
          overflow: 'hidden',
          position: 'relative'
        }}
      >
        <Image node={node} direction={slide.direction} />
        <div
          sx={{
            ...arrowStyle,
            left: 0
          }}
          onClick={() => handlePrevious()}
        >
          {'<'}
        </div>
        <div
          sx={{
            ...arrowStyle,
            right: 0
          }}
          onClick={() => handleNext()}
        >
          {'>'}
        </div>
        <div
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 'calc(250px - 2rem)',
            color: 'white',
            backgroundColor: 'rgba(100, 255, 255, 0.3)',
            width: '4rem',
            height: '2rem',
            fontSize: '1rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          {slide.index + 1}/{maxLength + 1}
        </div>
      </Flex>
    </div>
  );
}
