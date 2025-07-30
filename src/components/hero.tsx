import {
  ArrowRight,
  Blocks,
  MessagesSquare,
  MoveRight,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero26 = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="text-center">

          <h1 className="mx-auto mt-4 mb-3 max-w-3xl text-4xl font-semibold text-balance lg:mb-7 lg:text-7xl">
            Tarik Davis Digital Specialist
          </h1>
          <p className="m mx-auto max-w-3xl text-muted-foreground lg:text-xl">
           I help businesses create websites that work for them. Whether you need a complete digital strategy, custom development, or technical content design, I bring the skills and creative thinking to make it happen.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              See my latest work<MoveRight className="ml-2" strokeWidth={1} />
            </Button>
            <Button size="lg" variant="ghost">
              Get in touch
              <MoveRight className="ml-2" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero26 };
