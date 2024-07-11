import { Quote } from "./Quote";
import { Reservation } from "./Reservation";

export function Reserve() {
  return (
    <div className="md:flex w-full mx-auto md:items-center">
      <div className=" w-full mx-auto mt-10 mb-5 md:mt-5 md:mx-10 md:w-5/12">
        <Reservation />
      </div>
      <div className="md:w-9/12">
        <Quote />
      </div>
    </div>
  );
}
