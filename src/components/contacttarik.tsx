import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact5 = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mb-14 text-center">
          <h1 className="mb-3 mt-1 text-3xl font-semibold md:text-4xl">
            Get in touch
          </h1>
        </div>
        <form method="POST">
        <div className="mx-auto flex max-w-lg flex-col gap-6">
          
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="firstname">
              Your name
            </Label>
            <Input type="text" id="firstname" />
          </div>
          <div className="grid w-full items-center gap-2">
            <Label htmlFor="email">
              Your email address
            </Label>
            <Input type="email" id="email" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="message">
              Message
            </Label>
            <Textarea id="message" />
          </div>
          <Button className="w-full">Submit</Button>
         
        </div>
         </form>
      </div>
    </section>
  );
};

export { Contact5 };
