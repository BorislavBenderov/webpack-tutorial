import "./styles.css";
import Photo from "./download.jpg";
export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template - {process.env.NODE_ENV} {process.env.name}</h1>
      <img src={Photo} alt="" />
    </>
  );
};
