import homeImg from "public/home.jpg";

import Hero from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Hero
        imgAlt="car factory"
        imgData={homeImg}
        title="Professional Cloud Hosting"
      />
    </div>
  );
}
