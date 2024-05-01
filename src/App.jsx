import Content_box from "./components/Content/ContentBox";
import ImageBox from "./components/ImageBox/ImageBox";

export default function App() {
  return (
    <div className="bg-white flex rounded-lg max-w-[730px] md:flex-col md:max-w-[294px] md:overflow-hidden">
      <ImageBox />
      <Content_box />
    </div>
  );
}
