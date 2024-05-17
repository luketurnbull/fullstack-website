import { Modal } from "./modal";
import FullImagePage from "~/components/full-image-page";

export default function ImageModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(id);
  if (isNaN(idAsNumber)) {
    throw new Error("Invalid Image ID");
  }

  return (
    <Modal>
      <FullImagePage imageId={idAsNumber} />
    </Modal>
  );
}
