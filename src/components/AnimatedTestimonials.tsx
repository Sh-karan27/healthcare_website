
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function AnimatedTestimonialsDemo() {
  return (
    <div
      className="flex flex-col items-center justify-center p-10 bg-primary"
      style={{ paddingTop: "80px" }} // Adjust this value to match the height of your Navbar
    >
      <h1 className="font-bold text-2xl md:text-5xl text-center text-white">
        Testimonial Section
      </h1>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
