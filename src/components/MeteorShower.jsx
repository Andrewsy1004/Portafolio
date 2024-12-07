import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // si usas `loadSlim`, instala "tsparticles-slim"

export const MeteorShower = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    // Aquí podrías agregar algo cuando las partículas se hayan cargado, si es necesario
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#030014", // Igual que el color de fondo de Navbar
          },
        },
        fpsLimit: 100,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "",
            },
            onHover: {
              enable: true,
              mode: "",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#7042f8", // Color de los enlaces en Navbar (puedes ajustarlo según tu preferencia)
          },
          links: {
            color: "#7042f8", // Igual al color de los enlaces
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};
