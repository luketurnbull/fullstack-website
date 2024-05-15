import { getImage } from "~/server/queries";
import Image from "next/image";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  const image = await getImage(idAsNumber);

  return (
    <div className="card">
      <Image src={image.url} width="200" height="200" alt={image.name} />
    </div>
  );
}
