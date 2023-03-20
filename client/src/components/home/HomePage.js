import { useCallback, useRef, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import * as THREE from "three";

function HomePage() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const canvasRef = useRef();

  useEffect(() => {
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });

    renderer.setClearColor(0x000000, 0); // set the background color to transparent

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      35,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x77e35e });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.05;
      cube.rotation.y += 0.05;
      renderer.render(scene, camera);
    }

    animate();
  }, []);

  return (
    <div className="login">
      <canvas className="object3D" ref={canvasRef} />

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#06900d",
            },
            links: {
              color: "#06900d",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
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

      <div className="login-app">
        <Particles
          id="tsparticles"
          url="http://foo.bar/particles.json"
          init={particlesInit}
          loaded={particlesLoaded}
        />

        <link rel="stylesheet" href="HomePage.css"></link>

        <a href="/login" id="login-link">
          Login
        </a>
        <br />
        <a href="/signup" id="signup-link">
          Sign Up
        </a>
        <br />
      </div>
      <div className="home-page ">
        <p className="company-page-title">Hospital Jobs</p>
        <p className="home-page-title">
          Welcome to <span class="custom-color">Hospital Jobs</span> Site
        </p>
        <p className="home-page-title">
          Find the perfect job in the medical field,
        </p>

        <p className="home-page-title">with our comprehensive job listings.</p>
      </div>
      <footer id="footer">
        <h5 className="footHead">Contact Us</h5>
        <p className="foot">Email: vedanth.vasudev@gmail.com</p>
        <p className="foot">Phone: +447774713897</p>
      </footer>
    </div>
  );
}

export default HomePage;
