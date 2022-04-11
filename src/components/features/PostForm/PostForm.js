import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../redux/categoriesRedux";


const PostForm = ({action, actionText, ...props}) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || new Date());
  const [shortDescription, setshortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [category, setCategory] = useState(props.category);
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);
  const { register, handleSubmit: validate, formState: { errors } } = useForm();
  const categories = useSelector(getAllCategories);

  const handleSubmit = () => {
    setContentError(!content)
    setDateError(!publishedDate)
    if(content && publishedDate) {
      action({ title, author, publishedDate, shortDescription, content, category });
    }
  }

  return (
    <Form onSubmit={validate(handleSubmit)}>
      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Enter title' 
        {...register('title', { required: true, minLength: 4 })} 
        value={title} 
        onChange={e => setTitle(e.target.value)} />
        {errors.title && <small className='d-block form-text text-danger mt-2'>This field is required and should contain at least 4 characters</small>}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formAuthor'>
        <Form.Label>Auhtor</Form.Label>
        <Form.Control className='w-50' type='text' placeholder='Enter author'
        {...register('author', { required: true, minLength: 4 })}
        value={author} 
        onChange={e => setAuthor(e.target.value)} />
        {errors.author && <small className='d-block form-text text-danger mt-2'>This field is required and should contain at least 4 characters</small>}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDate'>
        <Form.Label>Published date</Form.Label>
        <DatePicker selected={publishedDate} 
        onChange={(date) => setPublishedDate(date)} />
        {dateError && <small className='d-block form-text text-danger mt-2'>This field is required</small>}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDate'>
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={e => setCategory(e.target.value)}>
          <option>Select category...</option>
          {categories.map(category => (
            <option key={category}>{category}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className='mb-3' controlId='formDescription'>
        <Form.Label>Short description</Form.Label>
        <Form.Control as='textarea' rows={3} type='text' placeholder='Leave a comment here'
        {...register('shortDescription', { required: true, minLength: 20 })}
        value={shortDescription} 
        onChange={e => setshortDescription(e.target.value)} />
        {errors.shortDescription && <small className='d-block form-text text-danger mt-2'>This field is required and should contain at least 20 characters</small>}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContent'>
        <Form.Label>Main content</Form.Label>
        <ReactQuill theme='snow' type='text' placeholder='Leave a comment here' 
        value={content} 
        onChange={setContent} />
        {contentError && <small className='d-block form-text text-danger mt-2'>Content can't be empty</small>}
      </Form.Group>

      <Button type='submit'>{actionText}</Button>
    </Form>
  );
}

export default PostForm;