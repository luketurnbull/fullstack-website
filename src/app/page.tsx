import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/0b8ab7c6-61c7-463c-b6d2-b16c7864b287-m48bhc.png",
  "https://utfs.io/f/0b8ab7c6-61c7-463c-b6d2-b16c7864b287-m48bhc.png",
  "https://utfs.io/f/0b8ab7c6-61c7-463c-b6d2-b16c7864b287-m48bhc.png",
];

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url,
  };
});

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            <h1>{post.name}</h1>
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
