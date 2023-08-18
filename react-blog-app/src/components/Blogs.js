import blogs from "../data/Blogs"
import "./Blog.css"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
export default function Blog() {
    const [search, setSearch] = useState("")
    const [filterBlog,setFilerBlog] = useState([])

    useEffect(()=>{
       const result =  blogs.filter((item)=>item.title.includes(search))
       setFilerBlog(result)
    },[search])
    return (
        <div className="blogs-container">
            <div className="search-container">
                <input type="text" className="search-input" placeholder="ค้นหาบทความ"
                    value={search} onChange={(e) => setSearch(e.target.value)}>
                </input>
            </div>
            <article>
                {filterBlog.map((item) => (
                    <Link to={`/Blog/${item.id}`} key={item.id}>
                        <div key={item.id} className="card">
                            <h2>{item.title}</h2>
                            <p>{item.content.substring(0, 300)}</p>
                            <hr />
                        </div>
                    </Link>
                ))}
            </article>
        </div>
    )
}