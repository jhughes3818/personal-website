import SectionCopy from "./SectionCopy";
import SectionImage from "./SectionImage";

export default function Section(props) {
  const orientation = props.orientation;

  if (orientation === "left") {
    return (
      <>
        <div className="grid place-items-center">
          <div className="flex">
            <SectionImage />
            <SectionCopy />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid place-items-center">
        <div className="flex">
          <SectionCopy />
          <SectionImage />
        </div>
      </div>
    </>
  );
}
