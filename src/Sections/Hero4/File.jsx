import {
  GlowingStarsBackgroundCard,
  GlowingStarsTitle,
  GlowingStarsDescription,
} from "../../Components/Glowcard/Glowcard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black gap-5">
      <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Welcome Starseeker</GlowingStarsTitle>
        <GlowingStarsDescription>
          Hover to awaken the stars ✨
        </GlowingStarsDescription>
      </GlowingStarsBackgroundCard>


       <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Welcome Starseeker</GlowingStarsTitle>
        <GlowingStarsDescription>
          Hover to awaken the stars ✨
        </GlowingStarsDescription>
      </GlowingStarsBackgroundCard>

       <GlowingStarsBackgroundCard>
        <GlowingStarsTitle>Welcome Starseeker</GlowingStarsTitle>
        <GlowingStarsDescription>
          Hover to awaken the stars ✨
        </GlowingStarsDescription>
      </GlowingStarsBackgroundCard>
    </div>
  );
}
