import "./background.css";
import Image from "./Image/Image";
import ImagesConfig from "../../../config.ts";

interface Props {
  changeBackground: (newKey: string, newBackground: string) => void;
  backgroundSelected: string;
}

function Background({ changeBackground, backgroundSelected }: Props) {
  function handleClick(key: string, value: string) {
    changeBackground(key, value);
  }

  function renderImages() {
    let imageArray = [];

    for (const [key, value] of Object.entries(ImagesConfig)) {
      imageArray.push(
        <Image
          title={key}
          source={value}
          changeBackground={handleClick}
          isSelected={key == backgroundSelected}
        ></Image>
      );
    }

    return imageArray;
  }

  return <div className="background_container">{renderImages()}</div>;
}

export default Background;
