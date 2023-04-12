import Particles from "react-tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { loadFull } from "tsparticles";
import type { Container, Engine, ISourceOptions } from "tsparticles-engine";
import Info from "./components/Info";
import Links from "./components/Links";
import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";
import emailHider from "./api/emailHider";

import React, { useCallback, useState } from "react";

const Content = styled.div`
  font-family: "Montserrat", sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 1;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {},
    []
  );

  const [email, setEmail] = useState<string | undefined>(undefined);
  const [error, setError] = useState<Boolean>(false);

  const recaptchaRef: React.LegacyRef<ReCAPTCHA> = React.createRef();

  const onReCAPTCHASuccess = (token: string | null) => {
    recaptchaRef.current?.reset();
    if (token) {
      emailHider(token)
        .then((response) => {
          return response.json();
        })
        .then((body) => {
          setEmail(body["email"]);
          setError(false);
        })
        .catch((err) => {
          setError(true);
        });
    }
  };

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions as ISourceOptions}
      />
      <Content>
        <Info />
        <Links email={email} error={error} recaptchaRef={recaptchaRef} />
      </Content>
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey={import.meta.env.VITE_SITEKEY as string}
        onChange={onReCAPTCHASuccess}
      />
    </>
  );
}

export default App;
