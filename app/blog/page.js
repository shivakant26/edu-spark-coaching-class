import Link from "next/link";

export default function Blog(){
    return(
        <div className="blogs">
            <Link href="/blog/one-blog">My First Blog</Link><br />
            <Link href="/blog/twoblog">My Second Blog</Link><br />
            <Link href="/blog/threeblog">My Third Blog</Link><br />
            <Link href="/blog/fourblog">My Four Blog</Link><br />
            <Link href="/blog/fifthblog">My Fifth Blog</Link><br />
            <Link href="/blog/sixthblog">My Six Blog</Link><br />
            <Link href="/blog/sevenblog">My Seven Blog</Link><br />
        </div>
    )
}