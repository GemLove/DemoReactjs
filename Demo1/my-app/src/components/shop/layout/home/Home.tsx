import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { defaultProps } from "./_defaultProps";
import { Row, Col, Typography, Button, Space } from "antd";

const { Title } = Typography;

const Home = (): JSX.Element => {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className={"particles"}
        options={defaultProps}
      />
      <div className="position-center-center">
        <div className="container">
          <Title level={1} className="title">
            Build a new kind of Decentralized
          </Title>
          <p className="description">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga.
          </p>
          <Space align="center">
            <Button size="large" type="primary" >Join Us</Button>
            <Button size="large"  >White to paper</Button>
          </Space>
        </div>
      </div>
    </>
  );
};
export default Home;
