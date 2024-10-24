import { useEffect, useState } from "react"
import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
    const [posts, setPosts] = useState([])
    const postsApi = async () => {
        const res = await fetch("https://fakestoreapi.com/products")
        const data = await res.json()
        console.log(data)
        setPosts(data)
    }

    useEffect(() => {
        postsApi()
    }, [])
    return (
        <>
            <div className="container">
                {posts?.map((post) => (
                    <Post key={post.id} id={post.id} title={post.title} desc={post.description} image={post.image} />
                ))}
            </div>
        </>
    )
}
