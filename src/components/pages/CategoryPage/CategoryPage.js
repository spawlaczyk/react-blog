import { Card, Col, Row, Button, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostByCategory } from "../../../redux/postsRedux";
import dateToStr from "../../../utils/dateToStr";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryData = useSelector(state => getPostByCategory(state, categoryName));
  
  return (
    <>
      <h1>Category: {categoryName}</h1>
      {categoryData.length ? 
      <Row>
        {categoryData.map(post => (
          <Col key={post.id} md={4}>
            <Card key={post.id} className='mt-4 p-3'>
              <Card.Title className='mb-3'><h3>{post.title}</h3></Card.Title>
              <Card.Text className='mb-1'>
                <b>Author: </b><span>{post.author}</span>
              </Card.Text>
              <Card.Text className='mb-1'>
                <b>Published: </b><span>{dateToStr(post.publishedDate)}</span>
              </Card.Text>
              <Card.Text>
                <b>Category: </b><span>{post.category}</span>
              </Card.Text>
              <Card.Text>
                {post.shortDescription}
              </Card.Text>
              <div>
                <Button size='md' as={NavLink} to={'/post/' + post.id}>Read more</Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row> : <p>Nothing there...</p>}
    </>
  )
}

export default CategoryPage;