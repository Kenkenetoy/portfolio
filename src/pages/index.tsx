import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { GlareCard } from "@/components/glare-card";
import { DraggableMockupPhone } from "@/components/DraggableMockupPhone";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="m-auto h-[70vh] overflow-hidden rounded-xl">
        <BackgroundGradientAnimation>
          <div className="absolute inset-0 z-10 flex items-center justify-center px-4 space-x-24 text-3xl font-bold text-center text-white pointer-events-none md:text-4xl lg:text-7xl">
            <GlareCard className="flex flex-col items-center justify-center pointer-events-auto">
              <DraggableMockupPhone />
            </GlareCard>
            <section className="flex flex-col items-center justify-center gap-4 py-8 space-y-12 md:py-10">
              <div className="justify-center inline-block max-w-xl text-center">
                <span className="capitalize pointer-events-auto">
                  a crafty Web Artisan and Tech Artist
                </span>
              </div>
            </section>
          </div>
        </BackgroundGradientAnimation>
      </div>
    </DefaultLayout>
  );
}
