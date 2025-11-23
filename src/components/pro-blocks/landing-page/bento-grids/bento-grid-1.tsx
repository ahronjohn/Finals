import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import Image from "next/image";
import { Tagline } from "~/components/pro-blocks/landing-page/tagline";

export default function BentoGrid1() {
  return (
    <section className="bg-muted section-padding-y">
      <div className="container-padding-x container mx-auto flex flex-col gap-10 md:gap-12">

        {/* Section Title */}
        <div className="section-title-gap-lg mx-auto flex max-w-xl flex-col items-center text-center">
          <Tagline>AETHRA</Tagline>
          <h2 className="heading-lg">
            AETHRA PH
          </h2>
          <p className="text-muted-foreground">
            Aethra means Brotherhood!!
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">

          {/* AE1 — Tall Left Image */}
          <Card className="rounded-xl lg:row-span-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Hoodie </CardTitle>
              <CardDescription>
                INTRODUCING THE AETHER'S ONYX SEASON HOODIE, DESIGNED TO KEEP YOU WARM WHILE ELEVATING YOUR EVERYDAY STYLE. 
                CRAFTED FROM PREMIUM, HEAVYWEIGHT FABRIC AND FINISHED WITH MINIMALIST DETAILING, 
                IT'S BUILT FOR THOSE WHO MOVE THROUGH THE COLD WITH CONFIDENCE. AETHER'S LATEST RELEASE DELIVERS THE PERFECT BALANCE OF FUNCTION, FORM, AND WARMTH.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 1.jpg"
                alt="AE 1"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>

          {/* AE2 — Top Middle */}
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Sando</CardTitle>
              <CardDescription>
                The Aethra Muscle tee is cut to move with you, a fit that speak strength.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 4.jpg"
                alt="AE 4"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>

          {/* AE3 — Bottom Middle */}
          <Card className="rounded-xl lg:col-start-2">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Tshirt</CardTitle>
              <CardDescription>
                New versions.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE3.jpg"
                alt="AE3"
                width={1000}
                height={1000}
                className="h-full w-full object-cover md:aspect-[4/3]"
              />
            </CardContent>
          </Card>

          {/* AE4 — Tall Right */}
          <Card className="rounded-xl lg:col-start-3 lg:row-span-2 lg:row-start-1">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">Aethra Classic</CardTitle>
              <CardDescription>
                The Aethra Classic Tees crafted for every grind, built to carry your story. This isn&apos;t just a tee, it&apos;s your foundation.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex h-full flex-col">
              <Image
                src="/AE 2.jpg"
                alt="AE 2"
                width={1000}
                height={1000}
                className="h-full w-full object-cover"
              />
            </CardContent>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
