import Image from "next/image";
import performanceImage from "public/performance.jpg";
export default function PerformancePage() {
  return (
    <div>
      Performance Page
      <Image
        alt="machining"
        fill
        src={performanceImage}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
