import { LikeButton } from "./LikeButton.jsx";
import Link from "next/link";

const fetchPosts = () => {
  console.log("Fetching posts!!!");

  // getStaticProps
  //   return fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())

  // getServerSideProps
  //  return fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'no-store' }).then(res => res.json())

  // incremental static regeneration
  // cada 60 segundos se comproban os cambios
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json());
};

export async function ListOfPosts() {
  const posts = await fetchPosts(); // este é un enlace de proba. aquí podemos conectar calquera fonte, base de datos,etc que queiramos

  return posts.map((post) => (
    <article key={post.id}>
      <Link href={`/posts/${post.id}`}>
        <h2 className="font-bold" style={{ color: "#09f" }}>
          {post.id}. {post.title}
        </h2>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ));
}
