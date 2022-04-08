import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setshortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
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
        <Form.Control className='w-50' type='text' placeholder='Date' required value={publishedDate} onChange={e => setPublishedDate(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control as='textarea' rows={3} type='text' placeholder='Leave a comment here' required value={shortDescription} onChange={e => setshortDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme='snow' type='text' placeholder='Leave a comment here' value={content} onChange={setContent} />
      </Form.Group>

      <Button type='submit'>{actionText}</Button>
    </Form>
  );
}

export default PostForm;