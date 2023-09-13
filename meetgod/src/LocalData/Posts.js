export const godsArray = [
  // { name: "Lord Vishnu", specialty: "The Preserver of the Cosmos" },
  // { name: "Lord Brahma", specialty: "The Creator of the Universe" },
  { name: "Lord Shiva", specialty: "The Destroyer and Transformer of Existence" },
  { name: "Goddess Durga", specialty: "The Invincible Divine Mother" },
  // { name: "Lord Krishna", specialty: "The Divine Melodist and Universal Teacher" },
  { name: "Lord Rama", specialty: "The Embodiment of Virtue and Righteousness" },
  // { name: "Lord Ganesha", specialty: "Remover of Obstacles and Patron of Beginnings" },
  { name: "Lord Hanuman", specialty: "The Mighty Monkey God and Devotee of Lord Rama" },
  // { name: "Goddess Lakshmi", specialty: "Bestower of Prosperity and Fortune" },
  // { name: "Goddess Saraswati", specialty: "The Source of Knowledge and Artistic Inspiration" },
  // { name: "Goddess Parvati", specialty: "The Divine Consort of Lord Shiva and Mother of the Universe" },
  // { name: "Goddess Kali", specialty: "The Fierce and Compassionate Mother Goddess" },
];


export const products = [
  {
    _id: "6464d9e6921c62d6bebb42bf",
    title: "Radha Krishna Artwork",
    description: "Exquisite Radha Krishna artwork painted by skilled artists.",
    image: "https://m.media-amazon.com/images/I/81XbeR4Pg-L._SX450_.jpg",
    image_gallery: [
      "https://m.media-amazon.com/images/I/81+b3d4GJHL._SX450_.jpg",
      "https://m.media-amazon.com/images/I/51Ld1z0ULLL._SX450_.jpg",
      "https://m.media-amazon.com/images/I/611sPRItgOL._SX450_.jpg",
    ],
    price: 1999.99,
    discount: 15,
    brand: "Artistic Expressions",
    category: "artwork",
    outOfStock: false,
    color: "Multicolor",
    size: "Large",
    height: "24",
    length: 18,
    god_name: "Ganesh",
    width: "2",
  },
  {
    _id: "6464d9e6921c62d6bebb42be",
    title: "Ganesha Statue",
    description: "Beautiful Ganesha statue made of high-quality material.",
    image: "https://m.media-amazon.com/images/I/81G3DIusivL._SX466_.jpg",
    image_gallery: [
      "https://m.media-amazon.com/images/I/71gEsOAhIAL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/71fAhocApaL._SX466_.jpg",
    ],
    price: 2499.99,
    discount: 10,
    brand: "Divine Crafts",
    category: "statue",
    outOfStock: false,
    color: "Golden",
    size: "Medium",
    height: "12",
    length: 8,
    god_name: "Lord Ganesh",
    width: "6",
  },
  {
    _id: "6464d9e6921c62d6bebb42c5",
    title: "Hanuman Chalisa Book",
    description: "Sacred book containing the verses of Hanuman Chalisa.",
    image:
      "https://m.media-amazon.com/images/I/517oL+yP61L._SX258_BO1,204,203,200_.jpg",
    image_gallery: [
      "https://m.media-amazon.com/images/I/81-zE18RU0L.jpg",
      "https://m.media-amazon.com/images/I/81kE4HK3vZL.jpg",
      "https://m.media-amazon.com/images/I/81JVjaGCd4L.jpg",
    ],
    price: 199.99,
    discount: 5,
    brand: "Spiritual Publications",
    category: "book",
    outOfStock: false,
    color: "N/A",
    size: "N/A",
    height: null,
    length: null,
    god_name: "Lord Hanuman",
    width: null,
  },
];

export const postData = [
  {
    id: 1,
    username: "ayush_verma_13",
    fullName: "Ayush Verma",
    profilePic: "Ayush_Verma_Profile_Pic.jpg",
    title: "First Post",
    content:
      "Lord Ganesha is the remover of obstacles and the god of beginnings. He is worshipped before starting any new endeavor.",
    godName: "Ganesha",
    imageUrl:
      "https://godhindus.com/wp-content/uploads/2023/05/hd-wallpaper-lord-ganesh.jpg",
    likes: 10,
    comments: [
      {
        id: 1,
        userName: "riya_sharma",
        userId: "123",
        fullName: "Riya Sharma",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Great post!",
        likesOfComment: 5,
      },
      {
        id: 2,
        userName: "vikram_singh",
        userId: "456",
        fullName: "Vikram Singh",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "I love Lord Ganesha!",
        likesOfComment: 3,
      },
    ],
  },
  {
    id: 2,
    username: "priya_gupta",
    fullName: "Priya Gupta",
    profilePic:
      "https://media.licdn.com/dms/image/C4D03AQEhipmxvOz8rg/profile-displayphoto-shrink_800_800/0/1650488111982?e=1693440000&v=beta&t=pRIjlvTvllqPsZPesTyeKFZMwze5aQ2lTzrlLAUXP2s",
    title: "Second Post",
    content:
      "Goddess Lakshmi is the goddess of wealth, prosperity, and fortune. She is worshipped for financial success and abundance.",
    godName: "Lakshmi",
    imageUrl:
      "https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Devi-Goddess-Lakshmi-Shubh-Labh.jpg",
    likes: 5,
    comments: [
      {
        id: 1,
        userName: "rajesh_sharma",
        userId: "789",
        fullName: "Rajesh Sharma",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Beautiful!",
        likesOfComment: 2,
      },
      {
        id: 2,
        userName: "ananya_patel",
        userId: "012",
        fullName: "Ananya Patel",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Goddess Lakshmi blesses us with prosperity.",
        likesOfComment: 1,
      },
      {
        id: 3,
        userName: "rajesh_sharma",
        userId: "789",
        fullName: "Rajesh Sharma",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Beautiful!",
        likesOfComment: 2,
      },
      {
        id: 4,
        userName: "ananya_patel",
        userId: "012",
        fullName: "Ananya Patel",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Goddess Lakshmi blesses us with prosperity.",
        likesOfComment: 1,
      },
      {
        id: 5,
        userName: "rajesh_sharma",
        userId: "789",
        fullName: "Rajesh Sharma",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Beautiful!",
        likesOfComment: 2,
      },
      {
        id: 6,
        userName: "ananya_patel",
        userId: "012",
        fullName: "Ananya Patel",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Goddess Lakshmi blesses us with prosperity.",
        likesOfComment: 1,
      },
    ],
  },
  {
    id: 3,
    username: "sandeep_verma",
    fullName: "Sandeep Verma",
    profilePic:
      "https://media.licdn.com/dms/image/C4E03AQFxk2ZoLZb-Pg/profile-displayphoto-shrink_800_800/0/1596682043090?e=1693440000&v=beta&t=SYY2L6WmxObdWyO9p-Jg6RxZawvvy0Tt-5ytxujNR7E",
    title: "Third Post",
    content:
      "Lord Shiva is the supreme god, the destroyer of evil, and the transformer. He is worshipped for spiritual enlightenment and inner peace.",
    godName: "Shiva",
    imageUrl:
      "https://www.wallsnapy.com/img_gallery/top-lord-shiva-images-hd-5795326.jpg",
    likes: 15,
    comments: [
      {
        id: 1,
        userName: "neha_gupta",
        userId: "345",
        fullName: "Neha Gupta",
        avatar:
          "https://media.licdn.com/dms/image/C4D03AQGMfSdoOfkwkg/profile-displayphoto-shrink_800_800/0/1632224784918?e=1696464000&v=beta&t=UWVdRLhFl6BY9IPHr0Vzq-m8zPq5mikThsOFJ0Cbr5g",
        content: "Lord Shiva is mighty!",
        likesOfComment: 7,
      },
    ],
  },
  // Add more post objects as needed
];
