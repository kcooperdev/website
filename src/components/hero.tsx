import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10">
      <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60">
        <span className="text-sm text-secondary-foreground">Coming soon </span>
        <ArrowRight size={16} />
      </div>
      <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl sm:leading-tight">
        Get More Done. Understand Your Data. Better.
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        We care about getting stuff done and helping you understand your data so you can focus on
        what you do better, getting customers.
      </p>
      <div className="grid grid-cols-2 gap-3">
        <Button
          size="lg"
          variant="outline"
          asChild
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="#">Learn More</Link>
        </Button>
        <Button
          size="lg"
          asChild
          className="h-12 cursor-pointer border-border text-base sm:h-14 sm:px-10"
        >
          <Link href="#">Get Started</Link>
        </Button>
      </div>
      <div className="relative sm:mt-8">
        <Image
          src="/images/dashboard.png"
          alt="SaaS Dashboard"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
