import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Feature50 = () => {
  return (
    <section className="py-12 bg-primary-foreground">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6">
          <h2 className="mb-2 text-center text-3xl font-semibold text-balance lg:text-5xl">
            Latest work
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            I have worked with some of the biggest brands in the world, helping them to create websites that work for them. Whether you need a complete digital strategy, custom development, or technical content design, I bring the skills and creative thinking to make it happen.
          </p>
        </div>
        <div className="mx-auto mt-20 flex max-w-5xl grid-cols-1 flex-col gap-6 lg:grid lg:grid-cols-7">
          <a
            href="#"
            className="col-span-7 grid overflow-hidden rounded-lg bg-muted sm:grid-cols-2"
          >
            <div className="flex flex-col justify-between p-8 lg:p-12">
              <div>
                <div className="mb-4 text-xs text-muted-foreground">
                  Technical Content Designer
                </div>
             <h3 className="mb-2 text-xl font-medium lg:text-2xl">
                  HSBC Mortgage finder
                </h3>
                <p className="text-sm text-muted-foreground lg:text-base">
                    A mortgage finder that helps customers find the right mortgage for them. The project involved custom development, technical content design, and a complete digital strategy.
                </p>
              </div>
              <div className="mt-6 sm:mt-8">
                <Button variant="outline">
                  Learn more
                  <ChevronRight className="ml-1 h-4" />
                </Button>
              </div>
            </div>
            <img
              src="https://tariks-website.netlify.app/img/mortgage-product-finder.webp"
              alt="HSBC"
              className="order-first aspect-video h-full max-h-96 w-full border-b object-cover sm:order-last sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-l"
            />
          </a>
            </div>
      
      </div>
    </section>
  );
};

export { Feature50 };
