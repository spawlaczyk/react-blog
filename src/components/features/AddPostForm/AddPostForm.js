import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate('/');

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishedDate, setpublishedDate] = useState('');
  const [shortDescription, setshortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPost({title, author, publishedDate, shortDescription, content}));
    navigate('/');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Enter title' required value={title} onChange={e => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Auhtor</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Enter author' required value={author} onChange={e => setAuthor(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDate'>
        <Form.Label>Published date</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Date' required value={publishedDate} onChange={e => setpublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control as='textarea' rows={3} type='text' placeholder='Leave a comment here' required value={shortDescription} onChange={e => setshortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main content</Form.Label>
        <Form.Control as='textarea' rows={10} type='text' placeholder='Leave a comment here' required value={content} onChange={e => setContent(e.target.value)} />
      </Form.Group>

      <Button type='submit'>Add post</Button>
    </Form>
  );
}

export default AddPostForm;