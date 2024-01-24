import React, { FC } from "react";

import { hot } from "react-hot-loader/root";

type Props = {
  Count: (count: number) => void;
  currentImage: number | null;
  totalImages: any;
  data: any;
};

const ControlsComponent: FC<Props> = ({
  Count,
  totalImages,
  currentImage,
  data,
}) => {
  const buttons = Array.from({ length: totalImages }, (_, index) => index);

  const image = data.filter((item: any, index: number) => {
    return index === currentImage;
  });

  return (
    <div id="sec-controls">
      {buttons.map((index) => (
        <React.Fragment key={index}>
          <button
            /* className={getButtonClassName(index)} */
            onClick={() => Count(index)}
          >
            <img src={image} alt="" />
          </button>
        </React.Fragment>
      ))}
    </div>
  );
};

export const Controls = hot(ControlsComponent);
