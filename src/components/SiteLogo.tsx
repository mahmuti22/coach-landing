import Image from "next/image";

export function SiteLogo() {
  return (
    <div className="flex justify-center pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-10">
      <Image
        src="/assets/mw-logo.png"
        alt="Most Wanted Physique Coaching"
        width={600}
        height={415}
        className="h-auto w-[260px] sm:w-[320px] lg:w-[380px]"
        priority
      />
    </div>
  );
}
