export const postData = [
    {
      id: 1,
      username: 'john_doe',
      profilePic: 'profile-pic1.jpg',
      title: 'First Post',
      content: 'Lord Ganesha is the remover of obstacles and the god of beginnings. He is worshipped before starting any new endeavor.',
      godName: 'Ganesha',
      imageUrl: 'post-image1.jpg',
      likes: 10,
      comments: [
        {
          id: 1,
          userName: 'jane_smith',
          userId: '123',
          content: 'Great post!',
          likesOfComment: 5,
        },
        {
          id: 2,
          userName: 'mark_johnson',
          userId: '456',
          content: 'I love Lord Ganesha!',
          likesOfComment: 3,
        },
      ],
    },
    {
      id: 2,
      username: 'emma_watson',
      profilePic: 'profile-pic2.jpg',
      title: 'Second Post',
      content: 'Goddess Lakshmi is the goddess of wealth, prosperity, and fortune. She is worshipped for financial success and abundance.',
      godName: 'Lakshmi',
      imageUrl: 'post-image2.jpg',
      likes: 5,
      comments: [
        {
          id: 1,
          userName: 'alex_green',
          userId: '789',
          content: 'Beautiful!',
          likesOfComment: 2,
        },
        {
          id: 2,
          userName: 'sara_walker',
          userId: '012',
          content: 'Goddess Lakshmi blesses us with prosperity.',
          likesOfComment: 1,
        },
      ],
    },
    {
      id: 3,
      username: 'michael_smith',
      profilePic: 'profile-pic3.jpg',
      title: 'Third Post',
      content: 'Lord Shiva is the supreme god, the destroyer of evil, and the transformer. He is worshipped for spiritual enlightenment and inner peace.',
      godName: 'Shiva',
      imageUrl: 'post-image3.jpg',
      likes: 15,
      comments: [
        {
          id: 1,
          userName: 'laura_miller',
          userId: '345',
          content: 'Lord Shiva is mighty!',
          likesOfComment: 7,
        },
      ],
    },
    // Add more post objects as needed
  ];
  