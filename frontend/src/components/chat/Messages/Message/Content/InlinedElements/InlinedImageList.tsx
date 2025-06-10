import { IImageElement } from '@/react-client';

import { ImageElement } from '@/components/Elements/Image';
import { QuiltedGrid } from '@/components/QuiltedGrid';

interface Props {
  items: IImageElement[];
}

const InlinedImageList = ({ items }: Props) => (
  <QuiltedGrid
    elements={items}
    renderElement={(ctx) => <ImageElement element={ctx.element} />}
  />
);

export { InlinedImageList };
