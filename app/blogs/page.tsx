import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";

type BlogPost = {
  slug: string;
  frontmatter: {
    title: string;
    author: string;
    publishDate: string;
    image: string;
  };
};

export default async function BlogsPage() {
  const blogsDirectory = path.join(process.cwd(), "content/blogs");
  const filenames = fs.readdirSync(blogsDirectory);

  const blogs: BlogPost[] = filenames.map((filename) => {
    const filePath = path.join(blogsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const slug = filename.replace(".mdx", "");
    return { slug, frontmatter: data as BlogPost["frontmatter"] };
  });

  return (
    <div>
      <Navbar />
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl md:mx-auto pt-[130px] md:pt-[170px] font-bold mb-8 text-blue-900 text-center">Our Blog</h1> 
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map(({ slug, frontmatter }) => (
          <article
            key={slug}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <Image
  src={frontmatter.image}
  alt={frontmatter.title}
  width={800} // You must provide width & height
  height={400}
  className="w-full h-48 object-cover"
/>

            <div className="p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {frontmatter.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                By {frontmatter.author} on {frontmatter.publishDate}
              </p>
              <Link
                href={`/blogs/${slug}`}
                className="text-blue-500 font-medium hover:underline"
              >
                Read More
              </Link>
            </div>
          </article>
        ))}
      </div>
      
    </main>
    <Footer />
    </div>
  );
}
