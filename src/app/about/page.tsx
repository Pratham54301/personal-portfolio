import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="font-headline text-4xl md:text-5xl font-bold text-center mb-12">
        About Me
      </h1>
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1 flex justify-center">
          <Avatar className="w-48 h-48 md:w-64 md:h-64 border-4 border-primary shadow-lg">
            <AvatarImage src="https://placehold.co/400x400.png" alt="Pratham S" data-ai-hint="professional portrait" />
            <AvatarFallback>PS</AvatarFallback>
          </Avatar>
        </div>
        <div className="md:col-span-2 space-y-6 text-lg text-foreground/80">
          <p>
            Hello! I&apos;m Pratham, a dedicated and results-oriented developer with a passion for building beautiful, functional, and user-centric digital experiences. My journey into web development started from a deep curiosity about how things work on the internet, and it has since evolved into a fulfilling career where I get to solve complex problems and bring ideas to life.
          </p>
          <p>
            With a strong foundation in both front-end and back-end technologies, I enjoy the entire process of application development, from the initial concept and design in Figma to the final deployment. I specialize in the React ecosystem, particularly with Next.js, and I am proficient in creating robust APIs and managing databases.
          </p>
          <p>
            I am a firm believer in continuous learning and am always looking for opportunities to explore new technologies and improve my skill set. When I&apos;m not coding, you might find me exploring new hiking trails, reading a good book, or experimenting with new recipes in the kitchen.
          </p>
        </div>
      </div>
    </div>
  );
}
