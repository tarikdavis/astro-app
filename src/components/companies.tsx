const features = [
  {
    id: "feature-1",
    title: "HSBC",
    description: "Migration of legacy forms to Adobe Experience Manager. This was a global project and included redesigning and rebuilding forms with display logic, regex validations, configuration of submission endpoints and creation of form fragments for translation to multiple languages. During my most recent contract with HSBC I worked on the Mortgage product finder which can be seen in my latest work.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/hsbc.svg?raw=true",
  },
  {
    id: "feature-2",
    title: "Lloyds Business Banking",
    description: "Supported the Business Banking team with the transistion of the website to a fluid grid and new design. This required analysis, planning and collaboration with UX, Product Design and site adminstrators to preemtively adjust grids and component structure so that when the new design was released the site reflected the updated design with minimal impact to customers. ",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/lloyds.svg?raw=true",
  },
  {
    id: "feature-3",
    title: "Virgin 02",
    description: "Worked with design and UX to build self serve help journeys for Virgin Media customers. I also worked with an external agency to develop and build the `Best bits` web app which surfaced personalised data driven content to consumers.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/virginmedia.svg?raw=true",
  },
  {
    id: "Aviva",
    title: "Aviva",
    description: "Led a team of web producers to migrate the Aviva insurance UK website from Django to Adobe Experience Manager. We audited and rebuilt the site improving confusing journeys and removing duplicate content. We also designed and implemented structured content models which were rolled out globally.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/aviva.svg?raw=true",
  },
  {
    id: "feature-5",
    title: "Barclays Digital",
    description: "I worked with the Barclays Digital team for over 4 years, accross multiple digital touchpoints including secure online banking, retail and wealth websites and multiple native mobile apps. In my final year I led and coached the Web production teams in London, Glasgow and Pune.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/barclays.svg?raw=true",
  },
    {
    id: "feature-6",
    title: "Aquascutum",
    description: "Developed multiple templates for weekly campaign emails using HTML, CSS and Photoshop. Tested for accessibility and layout consistency accross multiple screen sizes and email clients.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/aquascutum.svg?raw=true",
  },
  {
    id: "feature-7",
    title: "Marks & Spencer",
    description: "Developed high profile campaign and landing pages for the M&S ecommerce website and M&S Bank. Worked with an external partner to build interactive content displayed on touchscreens in store. Developed data capture forms for M&S competitions surfaced on M&S Facebook pages.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/mands.svg?raw=true",
  },
  {
    id: "feature-8",
    title: "BBC",
    description: "Supported BBC learning teams to develop new features and maintain content for BBC Ouch, Webwise, Skillswise and First Click.",
    image: "https://github.com/tarikdavis/astro-app/blob/main/src/img/bbc.svg?raw=true",
  },
];

const Feature63 = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col items-center gap-16 lg:px-16">
        <div className="text-center">
          <h3 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
            Companies I've worked with
          </h3>
          <p className="text-muted-foreground lg:max-w-3xl lg:text-lg">
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
                width={100}
                height={100}
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
