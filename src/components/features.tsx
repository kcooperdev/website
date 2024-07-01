import { Frame, Download, Globe } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function Features() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl text-center">
          What We Do Best
        </h2>
      </div>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Frame size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Tag Managemnt</h4>
              <p className="text-muted-foreground">
                Tealium, Adobe Launch, Adobe Experience Platform, Google Tag Manager, Facebook CAPI,
                Server Side Tracking
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Download size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">Web Analytics</h4>
              <p className="text-muted-foreground">
                Observepoint, Adobe Analytics, Google Analytics, Omnibug, Criteo, Charles Debugger
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="shadow-lg">
          <CardContent className="flex flex-col items-start gap-5 p-7">
            <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
              <Globe size={28} className="text-primary" />
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Paid Media
                <br />
              </h4>
              <p className="text-muted-foreground">
                Conversion &amp; Goal Tracking, Google Ads, SEO{" "}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
