const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      author: 'John Doe',
      publishedDate: new Date('02-02-2022'),
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      category: 'Sport'
    },

    {
      id: '2',
      title: 'Article title II',
      author: 'Jane Doe',
      publishedDate: new Date('01-04-2022'),
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      category: "News"
    },

    {
      id: '3',
      title: 'Article title III',
      author: 'John Smith',
      publishedDate: new Date('08-01-2022'),
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      category: "Movies"
    }
  ],

  categories: [
    'Sport',
    'News',
    'Movies'
  ]
}

export default initialState;