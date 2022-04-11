import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import Post from './components/pages/Post/Post';
import AddPost from './components/pages/AddPost/AddPost';
import EditPost from './components/pages/EditPost/EditPost';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Header from "./components/views/Header/Header";
import Footer from './components/views/Footer/Footer';
import Categories from './components/pages/Categories/Categories';
import { Container } from "react-bootstrap";
import CategoryPage from "./components/pages/CategoryPage/CategoryPage";


const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post/add' element={<AddPost />} />
        <Route path='/post/edit/:id' element={<EditPost />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryName' element={<CategoryPage />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
