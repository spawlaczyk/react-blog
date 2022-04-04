import AddPostForm from "../../features/AddPostForm/AddPostForm";

const AddPost = () => {
  return (
    <div className='m-auto' style={{maxWidth: '1000px'}}>
      <h1 className='mb-4'>Add post</h1>
      <AddPostForm />
    </div>
  );
}

export default AddPost;