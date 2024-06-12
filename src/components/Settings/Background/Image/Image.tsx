import "./image.css";

interface Props {
  title: string;
  source: string;
  changeBackground: (key: string, newBackground: string) => void;
  isSelected: boolean;
}

function Image({ title, source, changeBackground, isSelected }: Props) {
  function handleClick() {
    changeBackground(title, source);
  }

  return (
    <div className="grid-item" onClick={handleClick}>
      <img className={isSelected ? "image selected" : "image"} src={source} />
    </div>
  );
}

export default Image;
