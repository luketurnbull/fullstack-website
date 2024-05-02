import Link from "next/link";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
