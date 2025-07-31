import { Timer, Zap, ZoomIn } from "lucide-react";

const Feature16 = () => {
  return (
    <section className="py-12">
      <div className="container">

        <h2 className="text-3xl text-center font-medium lg:text-4xl">Companies I've worked with</h2>

        <div className="mt-14 grid gap-6 lg:mt-20 lg:grid-cols-3">
          <div className="rounded-lg bg-accent p-5">
            <span className="mb-8 flex size-12 items-center justify-center bg-background">
                          <img
              src="https://github.com/tarikdavis/astro-app/blob/main/src/img/hsbc.svg?raw=true"
              alt="HSBC"
              className="order-first aspect-video h-full max-h-96 w-full border-b object-cover sm:order-last sm:aspect-auto lg:max-h-none lg:border-b-0 lg:border-l"
            />
            </span>
            <h3 className="mb-2 text-xl font-medium">HSBC</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">

            <h3 className="mb-2 text-xl font-medium">Lloyds Bank</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
 
            <h3 className="mb-2 text-xl font-medium">Virgin Media</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>

          <div className="rounded-lg bg-accent p-5">

            <h3 className="mb-2 text-xl font-medium">Aviva</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
  
            <h3 className="mb-2 text-xl font-medium">Barclays Bank</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
          <div className="rounded-lg bg-accent p-5">
 
            <h3 className="mb-2 text-xl font-medium">BBC</h3>
            <p className="leading-7 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
              beatae tenetur totam aut blanditis ipsa quaerat neque eaque, atque
              doloremque! Eligendi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Feature16 };
