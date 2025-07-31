"use client";

import { Fragment, useEffect, useState } from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbBlogProps {
  breadcrumb: Array<BreadcrumbItem>;
}

interface AuthorType {
  image?: string;
  name: string;
  job: string;
  description: string;

}

const AUTHOR: AuthorType = {
  image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/avatar-1.webp",
  name: "Jane Doe",
  job: "CEO & Cofounder",
  description:
    "An avid storyteller with a passion for crafting compelling narratives, love to explore the human experience through vivid characters and thought-provoking themes. ",
  
};

const BREADCRUMB: Array<BreadcrumbItem> = [
  {
    label: "Resources",
    link: "#",
  },
  {
    label: "Blogs",
    link: "#",
  },
];


const ARTICLE_DATE = "May 18, 2025";
const ARTICLE_DURATION = "10 min read";

const Blogpost6 = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    // Query all h2 elements with IDs that match the chapter anchors
    const chapterIds = ["heading-1", "heading-2", "heading-3"];
    const headingElements = chapterIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new window.IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "0px 0px -30% 0px",
        threshold: 0.1,
      },
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="pb-32 bg-primary-foreground">

      <div className="container pt-20">
        <div className="relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex">
          {/* Chapters */}
          <div className="bg-primary-foreground top-20 flex-1 pb-10 lg:sticky lg:pb-0">
            <div className="text-xl font-medium leading-snug">Chapters</div>
            <div className="flex flex-col gap-2 pl-2 pt-2">
              <a
                href="#heading-1"
                className={`text-muted-foreground block text-sm font-medium leading-normal transition duration-300 ${activeId === "heading-1" ? "lg:bg-muted lg:!text-primary lg:rounded-md lg:p-2 lg:font-bold" : "text-muted-foreground"}`}
              >
                The Role of UI Components in Development
              </a>
              <a
                href="#heading-2"
                className={`text-muted-foreground block text-sm font-medium leading-normal transition duration-300 ${activeId === "heading-2" ? "lg:bg-muted lg:!text-primary lg:rounded-md lg:p-2 lg:font-bold" : "text-muted-foreground"}`}
              >
                Core Types of UI Components
              </a>
              <a
                href="#heading-3"
                className={`text-muted-foreground block text-sm font-medium leading-normal transition duration-300 ${activeId === "heading-3" ? "lg:bg-muted lg:!text-primary lg:rounded-md lg:p-2 lg:font-bold" : "text-muted-foreground"}`}
              >
                End Paragraph
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="flex w-full max-w-[40rem] flex-col gap-10">

            <div className="prose dark:prose-invert">
              <h2 className="mb-2 text-xl font-medium">Key Takeaways</h2>
              <p>
                • UI components are foundational, reusable elements in web
                development that encapsulate both design and behavior to promote
                consistency and efficiency.
              </p>
              <p>
                • Leveraging component libraries and frameworks streamlines the
                development process and ensures accessibility and cross-device
                compatibility.
              </p>
              <p>
                • Understanding different types of UI components enables
                developers to create structured, scalable, and maintainable user
                interfaces.
              </p>

              <p>
                In the evolving landscape of modern web development, UI
                components have emerged as indispensable tools for crafting
                user-friendly interfaces. These components, ranging from simple
                buttons to complex data tables, are the building blocks that
                help shape the overall user experience. By modularizing the
                interface into smaller, manageable pieces, UI components not
                only streamline the development process but also promote
                consistency across an application's design. As digital products
                become more complex, the role of well-structured UI components
                becomes even more critical in meeting user expectations and
                maintaining code quality.
              </p>
              <h2 className="mb-2 text-xl font-medium scroll-mt-24" id="heading-1">
                The Role of UI Components in Development
              </h2>
              <p>
                UI components serve as self-contained units of functionality and
                presentation, often designed to be reused across multiple parts
                of an application. By encapsulating both logic and styling,
                components reduce duplication and improve the maintainability of
                codebases. For example, a single button component can be reused
                with different props or styles, ensuring a uniform look and feel
                throughout the application. This modular approach also allows
                for parallel development, where teams can work on separate
                components without interfering with each other's work.
              </p>
              <p>
                Popular frameworks like React, Vue, and Angular are built around
                component-based architectures, encouraging developers to think
                in terms of reusable blocks rather than monolithic pages. This
                shift not only enhances scalability but also simplifies testing
                and debugging. Additionally, many UI libraries such as Material
                UI, Chakra UI, and Radix UI provide pre-built, accessible
                components that accelerate development and ensure consistency
                with design systems. Embracing components as first-class
                citizens in frontend architecture leads to better code
                organization, faster prototyping, and a more seamless user
                experience.
              </p>
              <h2 id="heading-2" className="scroll-mt-24">
                Core Types of UI Components
              </h2>
              <h3>1. Input Components</h3>
              <p>
                Input components are interactive elements that allow users to
                provide information. These include text inputs, checkboxes,
                radio buttons, sliders, and file upload fields. They are
                essential in forms and user settings, enabling data collection
                and customization. A well-designed input component handles
                validation, displays feedback, and provides a seamless
                experience across different devices and screen readers, ensuring
                inclusivity and usability.
              </p>
              <a href="#">Explore more</a>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>2. Navigation Components</h3>
              <p>
                Navigation components guide users through an application's
                structure. These include elements like top bars, side menus,
                breadcrumbs, tabs, and pagination. Effective navigation improves
                discoverability and helps users find the content they need
                without friction. Good navigation design considers user flow,
                accessibility (such as keyboard navigation and ARIA labels), and
                responsiveness, ensuring the interface is intuitive and adaptive
                to various screen sizes.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>3. Feedback Components</h3>
              <p>
                Feedback components provide users with visual or textual cues in
                response to their actions. Examples include modals, toast
                notifications, progress bars, and tooltips. These elements
                inform users about the success or failure of their operations or
                alert them to required actions. They enhance interactivity and
                reduce confusion, especially when performing asynchronous
                actions like form submissions or file uploads.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
              <h3>4. Layout Components</h3>
              <p>
                Layout components organize content visually on the page. Common
                examples include containers, rows, columns, and grid systems.
                These components help define the structure of a page and control
                the spacing, alignment, and responsiveness of child elements. A
                strong layout system ensures consistency in visual hierarchy and
                supports scalability as the application grows in complexity.
              </p>
              <div className="w-full max-w-[40rem] overflow-hidden">
                <img
                  src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg"
                  alt=""
                  className="size-full object-cover object-center"
                />
              </div>
              <h2 id="heading-3" className="scroll-mt-24">
                End Paragraph
              </h2>
              <p>
                Mastering the use of UI components is a key step toward building
                reliable, scalable, and aesthetically consistent web
                applications. By breaking down interfaces into smaller parts,
                developers can achieve greater flexibility, encourage reuse, and
                reduce the likelihood of errors. UI components also bridge the
                gap between design and development, creating a more
                collaborative and efficient workflow that benefits both
                developers and end users.
              </p>
            </div>

            {/* Conclusion */}
            <div className="prose dark:prose-invert bg-muted rounded-lg p-5 [&>h2]:mt-0">
              <h2>Conclusion</h2>
              <p>
                UI components are more than just visual elements—they are
                strategic assets in a modern developer's toolkit. When designed
                thoughtfully and used effectively, they empower teams to deliver
                high-quality interfaces with speed, consistency, and confidence.
                As frontend development continues to evolve, investing in
                reusable, accessible, and well-documented UI components will
                remain essential for building user-centric, maintainable digital
                products.
              </p>
            </div>

            {/* Author */}
            <div className="bg-muted flex flex-col gap-4 rounded-lg p-5">
              <Author author={AUTHOR} />
              <p>{AUTHOR.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Author = ({ author }: { author: AuthorType }) => {
  return (
    <div className="flex items-center gap-2.5">
      <Avatar className="size-12 border">
        <AvatarImage src={author.image} alt={author.name} />
        <AvatarFallback>{author.name}</AvatarFallback>
      </Avatar>
      <div>
        <div className="text-sm font-normal leading-normal">{author.name}</div>
        <div className="text-muted-foreground text-sm font-normal leading-normal">
          {author.job}
        </div>
      </div>
    </div>
  );
};


export { Blogpost6 };
