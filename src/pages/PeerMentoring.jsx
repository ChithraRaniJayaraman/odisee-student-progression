import { useMemo } from 'react';
import Card from '../components/Card';
import PageHero from '../components/PageHero';

function PeerMentoring() {
  const guideUrl = useMemo(() => `/${encodeURIComponent('Peer_Mentoring_Complete_Guide (1).html')}`, []);

  return (
    <>
      <PageHero
        title="Peer Mentoring Complete Guide"
        subtitle="The full guide is embedded below and also available as a standalone page in this site."
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Card title="Open the Complete Guide">
          <p>
            The full peer mentoring guide is now visible in the website. You can read it here in the embedded viewer or open the
            standalone page in a new tab.
          </p>
          <p>
            <a href={guideUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-full bg-gold px-4 py-2 font-semibold text-royal transition hover:bg-gold/90">
              Open in new tab
            </a>
          </p>
        </Card>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/55 bg-white/70 shadow-soft backdrop-blur-xl">
          <iframe
            title="Peer Mentoring Complete Guide"
            src={guideUrl}
            className="min-h-[90vh] w-full border-0 bg-white"
          />
        </div>
      </section>
    </>
  );
}

export default PeerMentoring;
