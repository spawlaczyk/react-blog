import RenderPosts from "../../features/RenderPosts.js/RenderPosts";
import { NavLink } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";

const Home = () => {
  return (
    <main>
      <Row className='align-items-center'>
        <Col>
          <h1>All posts</h1>
        </Col>
        <Col className='d-flex justify-content-end'>
          <Button variant="outline-info" as={NavLink} to='/post/add'>Add post</Button>
        </Col>
      </Row>
      <RenderPosts />
    </main>
  );
}

export default Home;