export default async function SingleBlog({ params }) {
    const slug = await params.slug;
  return (
    <div className="single-blog">
      <h1>Blog Post: {slug}</h1>
    </div>
  );
}
