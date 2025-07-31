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
          A comprehensive mortgage finder tool designed to help customers discover the right mortgage options through an intuitive, user-friendly interface with advanced calculation capabilities.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg">
              View live project<MoveRight className="ml-2" strokeWidth={1} />
            </Button>
            <Button size="lg" variant="ghost">
              Discuss this project
              <MoveRight className="ml-2" strokeWidth={1} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero26 };
