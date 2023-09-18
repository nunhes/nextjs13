import { Suspense } from 'react'
import { ListOfPosts } from './ListOfPosts.jsx'

export default async function PostsPage ({ params }) {
  return (
    <section>
      <Suspense fallback={<p>Cargando publicacións...</p>}>
        <ListOfPosts />
      </Suspense>
    </section>
  )
}
