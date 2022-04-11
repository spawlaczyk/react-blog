import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";

const EditPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate('/');
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const handleSubmit = post => {
    dispatch(editPost({ ...post, id }));
    navigate('/');
  }

  if(!postData) return <Navigate to='/' />
    return (
      <PostForm 
      action={handleSubmit} 
      actionText='Save changes' 
      title={postData.title} 
      author={postData.author} 
      publishedDate={postData.publishedDate} 
      shortDescription={postData.shortDescription}
      content={postData.content}
      category={postData.category} />
    );
}

export default EditPostForm;