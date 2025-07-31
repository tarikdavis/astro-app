const features = [
  {
    id: "feature-1",
    title: "HSBC",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/hsbc.svg?raw=true",
  },
  {
    id: "feature-2",
    title: "Lloyds Business Banking",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/lloyds.svg?raw=true",
  },
  {
    id: "feature-3",
    title: "Virgin 02",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/virginmedia.svg?raw=true",
  },
  {
    id: "Aviva",
    title: "Feature 4",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/aviva.svg?raw=true",
  },
  {
    id: "feature-5",
    title: "Barclays Digital",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/barclays.svg?raw=true",
  },
  {
    id: "feature-6",
    title: "BBC",
    description: "Nam vitae molestie arcu. Quisque eu libero orci.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/bbc.svg?raw=true",
  },
];

const Feature63 = () => {
  return (
    <section className="py-12 bg-primary-foreground">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h3 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Companies I've worked with
          </h3>
          <p className="text-muted-foreground lg:max-w-3xl lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg border border-border bg-accent p-6 md:p-8"
            >
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                width={50}
                height={50}
                style={{ objectFit: "contain" }}
                className="mb-8 aspect-16/9 md:mb-12 lg:w-full"
              />
              <div className="flex flex-col">
                <p className="mb-2 text-sm font-semibold md:text-base">
                  {feature.title}
                </p>
                <p className="text-sm text-muted-foreground md:text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Feature63 };
