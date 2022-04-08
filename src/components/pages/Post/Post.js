import { Card, Col, Row, Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPostById, removePost } from "../../../redux/postsRedux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import dateToStr from "../../../utils/dateToStr";

const Post = () => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleRemove = () => {
    dispatch(removePost(id));
  }

  if(!postData) return <Navigate to='/' />
    return (
      <>
        <Row className='d-flex justify-content-evenly'>
          <Col md={2}>
            <Card border='light'>
              <Card.Title className='mb-3'><h3>{postData.title}</h3></Card.Title>
              <Card.Text className='mb-1'>
                <b>Author: </b><span>{postData.author}</span>
              </Card.Text>
              <Card.Text>
                <b>Published: </b><span>{dateToStr(postData.publishedDate)}</span>
              </Card.Text>
              <Card.Text dangerouslySetInnerHTML={{ __html: postData.content }} />
            </Card>
          </Col>
          <Col md={2}>
            <Button className='mx-2' size='md' variant='outline-info' as={NavLink} to={'/post/edit/' + postData.id}>Edit</Button>
            <Button size='md' variant='outline-danger' onClick={handleShow}>Delete</Button>
          </Col>
        </Row>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header><h3>Are you sure?</h3></Modal.Header>
          <Modal.Body>
            <p>This operation will completely remove this post from the app.</p>
            <p>Are you sure you want to do that?</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={handleClose}>Cancel</Button>
            <Button variant='danger' onClick={handleRemove}>Remove</Button>
          </Modal.Footer>
        </Modal>
      </>
  );
}

export default Post;