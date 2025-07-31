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
            HSBC Mortgage Finder
          </h1>
          <p className="m mx-auto max-w-3xl text-muted-foreground lg:text-xl">
          A new tool to help customers discover HSBC mortgage products.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <a href="https://www.hsbc.co.uk/mortgages/finder/">View live project</a><MoveRight className="ml-2" strokeWidth={1} />
            </Button>
            <Button size="lg" variant="ghost">
              <a href="/contact">Discuss this project</a>
              <MoveRight className="ml-2" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero26 };
