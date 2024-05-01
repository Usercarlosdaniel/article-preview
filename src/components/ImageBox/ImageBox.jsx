import drawers from "../../assets/img/drawers.jpg";

export default function Image_box() {
  return (
    <div className="rounded-l-lg overflow-hidden w-[40%] md:w-full md:rounded-none md:h-[180px]">
      <img
        src={drawers}
        alt="drawers image"
        className="w-full h-full object-left object-cover"
      />
    </div>
  );
}
