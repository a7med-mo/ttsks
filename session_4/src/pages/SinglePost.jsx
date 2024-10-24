import { useParams} from 'react-router-dom';
import { useEffect, useState } from "react"
import SinglePost from '../components/singlePost/SinglePost';

export default function SinglePostPage() {

    const { id } = useParams()
    const [post, setPost] = useState([])

    const postApi = async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        console.log(data)
        setPost(data)
    }

    useEffect(() => {
        postApi()
    }, [])

    console.log(id);

    return (
        <>
           
                <SinglePost key={post.id} title={post.title} price={post.price} description={post.description} image={post.image} />


        </>
    )
}
