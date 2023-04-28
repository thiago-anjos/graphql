const posts = async (_, { input }, { getPosts }) => {
  console.log(input);
  const apiFiltersInput = new URLSearchParams(input);
  console.log(apiFiltersInput);
  const response = await getPosts('/?' + apiFiltersInput);
  const posts = response.json();
  return posts;
};

const post = async (_, { id }, { getPosts }) => {
  const response = await getPosts('/' + id);
  const post = await response.json();

  if (typeof post.id === 'undefined') {
    return {
      statusCode: 404,
      message: 'Post not Found',
    };
  }

  return post;
};

export const postResolver = {
  Query: {
    post,
    posts,
  },
  Post: {
    unixTimeStampExample: ({ createdAt, id }) => {
      const timeStamp = new Date(createdAt).getTime() / 1000; // divide por 1000 para pegar o valor em segundos, já que o gettime é em milisegundos
      console.log(`Fui chamado para o post ${id}`);
      return Math.floor(timeStamp);
    },
  },
  PostResult: {
    __resolveType: (obj) => {
      if (typeof obj.statusCode !== 'undefined') return 'PostNotFound';
      if (typeof obj.id !== 'undefined') return 'Post';
      return null;
    },
  },
};

// consulta no studio apollograph referente ao apiFiltersInput que agora é enviado para compor a url

// query get_posts{
//   posts(input:{_order: "desc", _sort: "indexRef"}) {
//     title
//     indexRef
//   }
// }

// usando o unionType  === __resolveType

// query get_post{
//   post(id: "0"){
//     ... on Post{
//       id title
//     }
//     ... on PostNotFound{
//       statusCode message
//     }
//   }
// }
