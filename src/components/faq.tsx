import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export function Faq() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Faq</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Frequently Asked Questions
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        For any other questions, please feel free to contact us.
      </p>
      <Accordion type="single" collapsible className="mt-6 w-full divide-y max-w-3xl">
        <AccordionItem value="item-0" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Is there a limit to how many requests I can have ?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            No, the requests will be sent over one by one.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-1" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How fast will I receive my requests ?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            They will be case by case basis, however usual average delivery time will be no less
            than 48 hours.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How does the pause feature work ?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Sometimes analytics work might slow down. That is what is so great about the pause
            feature. Billing cycles are based on 31 day period. Let's say you sign up and use the
            service for 25 days, and then decide to pause your subscription. This means that the
            billing cycle will be paused and you'll have 5 days of service remaining to be used
            anytime in the future.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            How do I request analytics work?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            You can make request through our ticketing system via osTicket.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            Are there any refunds if I don't like the service ?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            Due to the way analytics work is set up, there will be no refunds issued.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5" className="border-b-0">
          <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
            What if I can only have a single request?
          </AccordionTrigger>
          <AccordionContent className="text-lg text-muted-foreground">
            That is okay. You can pause the subscription when the request is finished and return
            when you have more requests.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
}
