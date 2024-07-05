import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Header() {
  return (
    <section id="projects" className="px-12 py-10">
      <h2 className="text-xl mb-6 font-semibold">Projects</h2>
      <Carousel>
        <CarouselContent>
          <CarouselItem className="sm:basis-1/2 md:basis-1/3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">The Bible Project</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem ipsam laboriosam recusandae quidem consectetur ab
                  obcaecati repellat laudantium ut quae ex enim magni numquam
                  sint blanditiis dolore, assumenda natus cum.
                </CardDescription>
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
