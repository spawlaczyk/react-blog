import EditPostForm from "../../features/EditPostForm/EditPostForm";

const EditPost = () => {
  return (
    <div className='m-auto' style={{maxWidth: '1000px'}}>
      <h1>Edit post</h1>
      <EditPostForm />
    </div>
  );
}

export default EditPost;