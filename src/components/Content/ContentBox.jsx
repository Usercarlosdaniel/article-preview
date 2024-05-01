import avatar from "../../assets/img/avatar-michelle.jpg";
import Share from "./Share";

export default function Content_box() {
  return (
    <div className="w-[60%] py-8 px-10 leading-normal md:w-full md:pt-[30px] md:px-7 md:pb-5">
      <h3 className="text-grayish-blue-700 font-bold text-xl mb-3 leading-normal md:text-[15px]">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h3>
      <p className="text-grayish-blue-500 leading-normal mb-4 md:mb-[30px]">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I&apos;ve got some simple tipss to help
        you make any room feel complete.
      </p>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={avatar}
            alt="michelle avatar"
            width={40}
            height={40}
            className="rounded-full md:size-9"
          />
          <div>
            <p className="font-bold text-grayish-blue-700">Michelle Appleton</p>
            <p className="text-grayish-blue-400">28 Jun 2020</p>
          </div>
        </div>
        <Share />
      </div>
    </div>
  );
}
