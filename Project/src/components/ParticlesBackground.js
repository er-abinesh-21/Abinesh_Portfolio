import React, { useCallback } from 'react';
import { useTheme } from '../hooks/useTheme';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  const options = {
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: theme === 'dark' ? '#0c4e68' : '#124E66'
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1,
        random: false
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1
        }
      },
      links: {
        enable: true,
        distance: 150,
        color: theme === 'dark' ? '#0c4e68' : '#124E66',
        opacity: 0.8,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "out"
        },
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: false
        },
        onClick: {
          enable: false
        },
        resize: true
      }
    },
    detectRetina: true,
    background: {
      color: "transparent"
    }
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={options}
    />
  );
};

export default ParticlesBackground;