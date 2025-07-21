import {
  Documentation,
  Page,
  ScrollToTop,
  DocumentContents,
} from '../../../dist';

export const DocumentationPage = () => (
  <Documentation className="bg-gray-200">
    <ScrollToTop />
    <Page center={true} id="toc">
      <h1 className="text-2xl text-center">Documentation Page</h1>
      <DocumentContents
        contents={[
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
          { id: 'toc', label: 'Documentation Page' },
        ]}
      />
    </Page>
  </Documentation>
);
