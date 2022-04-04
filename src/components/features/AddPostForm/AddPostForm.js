import { Form, Button } from "react-bootstrap";

const AddPostForm = () => {
  return (
    <Form>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Enter title' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Auhtor</Form.Label>
        <Form.Control type='text' placeholder='Enter author' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Published date</Form.Label>
        <Form.Control type='date' placeholder='Date' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Short description</Form.Label>
        <Form.Control as='textarea' rows={3} type='text' placeholder='Leave a comment here' />
      </Form.Group>
      <Form.Group className='mb-3' controlId='formBasicText'>
        <Form.Label>Main content</Form.Label>
        <Form.Control as='textarea' rows={10} type='text' placeholder='Leave a comment here' />
      </Form.Group>
      <Button>Add post</Button>
    </Form>
  );
}

export default AddPostForm;