import Base from "./Base";
import Controlled from "./Controlled";
import Disabled from "./Disabled";
import Multiple from "./Multiple";
import Range from "./Range";
import Vertical from "./Vertical";

export default () => {
  return (
    <>
      <Base />
      <Range />
      <Multiple />
      <Vertical />
      <Controlled />
      <Disabled />
    </>
  );
};
