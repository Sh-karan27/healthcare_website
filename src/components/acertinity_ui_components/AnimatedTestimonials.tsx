import { InfiniteMovingCardsDemo } from './InfiniteMovingCardsDemo';

export function AnimatedTestimonialsDemo() {
  return (
    <div className='flex flex-col items-center justify-center p-10 bg-bacground-light pt-[80px] overflow-x-hidden'>
      
      <h1 className='font-bold text-2xl md:text-5xl text-center text-white'>
        Testimonial Section
      </h1>
      <InfiniteMovingCardsDemo />
    </div>
  );
}
