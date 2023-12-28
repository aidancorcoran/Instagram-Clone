import { useEffect, useState } from "react"

const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch("http://localhost:5000/home")
            const json = await response.json()

            if(response.ok) {
                setPosts(json)
            }
        }

        fetchPosts()
    }, [])


    return(
        <div className="home">
            <h2>Home</h2>
        </div>
    )
}

export default Home