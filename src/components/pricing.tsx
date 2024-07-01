import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Pricing</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          Simple pricing
        </h2>
      </div>
      <p className="text-lg text-muted-foreground max-w-lg text-center">
        Pricing that fits your needs and helps you scale.
      </p>
      <div className="mt-7 grid w-full grid-cols-1 gap-7 lg:grid-cols-2">
        <Card className="relative shadow-lg border-2 border-primary">
          <CardContent className="divide-y p-0">
            <CardContent className="flex flex-col items-center px-7 py-10">
              <span className="absolute inset-x-0 -top-5 mx-auto w-32 rounded-full bg-primary px-3 py-2 text-center text-sm font-semibold text-primary-foreground shadow-md">
                Most popular
              </span>
              <h4 className="font-heading text-2xl font-semibold text-foreground">Best Value</h4>
              <p className="mt-2 text-muted-foreground">For startups and teams.</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">$999</span>
                <span className="text-sm"> /month</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full">
                <Link href="#">Book A Call To Get started</Link>
              </Button>
            </CardContent>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unlimited Requests.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unlimited Support.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Two Requests at a time.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unlimited users.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Pause or cancel anytime.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
        <Card className="relative shadow-lg">
          <CardContent className="divide-y p-0">
            <CardContent className="flex flex-col items-center px-7 py-10">
              <h4 className="font-heading text-2xl font-semibold text-foreground">Premium</h4>
              <p className="mt-2 text-muted-foreground">For large businesses.</p>
              <div className="mt-5">
                <span className="font-heading text-5xl font-semibold">$XXX</span>
                <span className="text-sm"> /month</span>
              </div>
              <Button size="lg" asChild className="mt-10 w-full">
                <Link href="#">Book A Call To Get Started</Link>
              </Button>
            </CardContent>
            <ul className="space-y-2 px-7 py-10">
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unlimited Requests.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unilmited Support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Two Requests at a time.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Unlimited users.</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-muted-foreground">Pause or cancel anytime.</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
