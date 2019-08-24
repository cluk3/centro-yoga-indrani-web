/** @jsx jsx */
import { jsx } from 'theme-ui';

const Burger = ({ isCollapsed, toggleCollapsed }) => {
  return (
    <div
      sx={{
        position: 'relative',
        display: 'inline-block',
        width: '40px',
        height: '24px'
      }}
      onClick={toggleCollapsed}
      onKeyDown={event => {
        if (event.keycode === 13) toggleCollapsed();
      }}
      role="button"
    >
      <div
        sx={{
          top: 'auto',
          bottom: '0',
          transitionDelay: '0.13s',
          'transition-timing-function':
            'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
          'transition-duration': '0.13s',
          position: 'absolute',
          width: '40px',
          height: '4px',
          'transition-property': 'transform',
          borderRadius: '4px',
          backgroundColor: 'primary',
          display: 'block',
          mt: '-2px',
          cursor: 'pointer',
          ...(isCollapsed && {
            transform: 'translate3d(0, -10px, 0) rotate(-45deg)'
          }),
          '&::before': {
            display: 'block',
            content: '" "',
            position: 'absolute',
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            backgroundColor: 'primary',
            top: '-10px',
            transition:
              'top 0.12s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
            ...(isCollapsed && {
              top: 0,
              transition:
                'top 0.1s cubic-bezier(0.33333, 0, 0.66667, 0.33333) 0.16s, transform 0.13s cubic-bezier(0.215, 0.61, 0.355, 1) 0.25s',
              transform: 'rotate(-90deg)'
            })
          },
          '&::after': {
            display: 'block',
            content: '" "',
            position: 'absolute',
            width: '40px',
            height: '4px',
            borderRadius: '4px',
            backgroundColor: 'primary',
            bottom: '-10px',
            top: '-20px',
            transition:
              'top 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1) 0.2s, transform 0.15s ease, opacity 0.1s linear',
            ...(isCollapsed && {
              top: 0,
              transition: `top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
                  opacity 0.1s linear 0.22s`,
              opacity: 0
            })
          }
        }}
      />
    </div>
  );
};

export default Burger;
