import Link from 'next/link'
import Image from 'next/image'
import {getAllUsers,getAllPosts} from "@/lib/prisma"
import Masonry from "./components/Masonry/paulcollett"
import Summary from "./components/Summary/BookSummary"

// import Hello from "./Hello.mdx"
// import styles from './page.module.scss'

export default async function Home() {

  const users = await getAllUsers(true)
  const posts = await getAllPosts(true)
  const post = await getAllPosts({id:1,include:true})
  // console.log(users)
  // console.log(posts)
  
  return (
    <main className={"home"}>
      <Masonry />
      <Summary />
      
      
      
      
      
      
      {/* {JSON.stringify(users)}
      {JSON.stringify(posts)}
      {JSON.stringify(post)}
      <hr />
      <Hello />
      <div>deoijoifdjoijfds</div> */}
    </main>
  )
}
