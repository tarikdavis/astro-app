import { ArrowUpRight } from "lucide-react";

const Footer12 = () => {
  const navigation = [

    { name: "Get in touch", href: "#" },
  ];

  const social = [
    { name: "LinkedIn", href: "http://linkedin.com/in/tarikdavis" },
  ];

  const legal = [{ name: "Privacy Policy", href: "#" }];

  return (
    <section className="flex flex-col items-center gap-14 py-8">
      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export { Footer12 };
