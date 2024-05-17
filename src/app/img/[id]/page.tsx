import FullImagePage from "~/components/full-image-page";

export default async function ImagePage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);

  if (isNaN(idAsNumber)) {
    throw new Error("Invalid Image ID");
  }

  return <FullImagePage imageId={idAsNumber} />;
}
