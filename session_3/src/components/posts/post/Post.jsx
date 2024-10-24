import { Link } from 'react-router-dom'
import './post.css'

// eslint-disable-next-line react/prop-types
export default function Post({title, desc, image, id}) {
    return (
        <>
            <Link className="post" to={`${id}`}>
                <img src= {image} alt={title} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </Link>
        </>
    )
}
