import shortid from "shortid";

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, id) => posts.find(post => post.id === id);
export const getPostByCategory = ({posts}, categoryName) => posts.filter(post => post.category.toLowerCase() === categoryName);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
export const REMOVE_POST = createActionName('REMOVE_POST');
export const ADD_POST = createActionName('ADD_POST');
export const EDIT_POST = createActionName('EDIT_POST');

// action creators
export const removePost = payload => ({type: REMOVE_POST, payload});
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch(action.type) {
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  }
}

export default postsReducer;