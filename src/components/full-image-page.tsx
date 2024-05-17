import { getImage } from "~/server/queries";

export default async function FullImagePage({ imageId }: { imageId: number }) {
  const image = await getImage(imageId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} className="object-contain" alt={image.name} />
      </div>
      <div className="w-48 border-l">
        <div className="text-xl font-bold">{image.name}</div>
      </div>
    </div>
  );
}
