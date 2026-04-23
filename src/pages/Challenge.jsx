import PageHero from '../components/PageHero';
import challengeMindMapVideo from '../Mind map (Presentation).mp4';
import toolkitImage from '../../TOOL KIT PIC.jpeg';

function Challenge() {
  return (
    <>
      <PageHero
        title="Understanding the Challenge"
        subtitle="A visual overview of the challenge and the coordinated response we designed for student progression."
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/60 bg-white/45 p-3 shadow-soft backdrop-blur-xl sm:p-4">
          <video
            className="block w-full rounded-2xl object-contain"
            controls
            preload="metadata"
            aria-label="Mind map video explaining the student progression challenge"
          >
            <source src={challengeMindMapVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="mt-12 text-center">
          <h2 className="font-display text-3xl text-royal sm:text-4xl">How Our Three Tools Respond</h2>
          <p className="mx-auto mt-3 max-w-3xl text-base text-body/90 sm:text-lg">
            Peer Mentoring, Early Alert, and Self-Regulated Learning work together as one coordinated support system.
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-white/60 bg-gradient-to-br from-main/80 via-section/80 to-lavender/70 p-4 shadow-soft backdrop-blur-xl sm:p-5">
          <img
            src={toolkitImage}
            alt="Integrated Solutions: Peer Mentoring Toolkit, Early Alert Protocol, and Self-Regulated Learning working together"
            className="mx-auto block h-auto w-full max-w-5xl rounded-2xl border border-white/70 bg-white/70 object-contain p-2 shadow-[0_18px_45px_rgba(68,82,60,0.14)] sm:p-3"
          />
        </div>
      </section>
    </>
  );
}

export default Challenge;
