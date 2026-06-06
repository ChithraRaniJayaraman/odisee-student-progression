import PageHero from '../components/PageHero';
import Card from '../components/Card';

function PeerMentoring() {
  const guidePath = '/Peer_Mentoring_Complete_Guide (1).html';
  const pdfPath = '/NEW PEERMENTORING TOOLKIT.pdf';
  const guideSrc = typeof window !== 'undefined' ? encodeURI(guidePath) : guidePath;
  const pdfSrc = typeof window !== 'undefined' ? encodeURI(pdfPath) : pdfPath;

  return (
    <>
      <PageHero
        title="Peer Mentoring Toolkit"
        subtitle="Read the complete guide or download the toolkit PDF"
      />

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Card title="Toolkit">
          <p className="mb-4">The full Peer Mentoring toolkit is embedded below. You can also open the standalone guide in a new tab or download the PDF.</p>
          <div className="flex gap-3">
            <a href={guideSrc} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md bg-royal px-4 py-2 text-white">
              Open Standalone Guide
            </a>
            <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-md border border-royal px-4 py-2 text-royal bg-white">
              Download Toolkit (PDF)
            </a>
          </div>
        </Card>

        <div className="mt-6 h-[80vh] rounded-lg overflow-hidden border border-white/20">
          <iframe
            title="Peer Mentoring Toolkit"
            src={guideSrc}
            className="w-full h-full"
          />
        </div>
      </section>
    </>
  );
}

export default PeerMentoring;
