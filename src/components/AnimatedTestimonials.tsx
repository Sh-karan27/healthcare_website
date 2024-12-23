import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { testimonials } from "../data/testimonial_data";

export function AnimatedTestimonialsDemo() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-heading-light-section_heading">
      <h1 className="font-bold text-2xl md:text-5xl text-center text-white">
        Testimonial Section
      </h1>
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
  );
}
