import { Card, Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllPosts } from "../../../redux/postsRedux";

const RenderPosts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={3} className='g-4 mt-2'>
      {posts.map(post => (
        <Col key={post.id}>
          <Card key={post.id} className='p-3'>
            <Card.Title className='mb-3'>{post.title}</Card.Title>
            <Card.Text className='mb-1'>
              <b>Author: </b><span>{post.author}</span>
            </Card.Text>
            <Card.Text>
              <b>Published: </b><span>{post.publishedDate}</span>
            </Card.Text>
            <Card.Text>{post.shortDescription}</Card.Text>
            <div>
              <Button size='md' as={NavLink} to={'/post/' + post.id}>Read more</Button>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default RenderPosts;