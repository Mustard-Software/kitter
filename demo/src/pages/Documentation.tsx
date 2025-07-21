import { Documentation, Page, ScrollToTop } from '../../../dist';

export const DocumentationPage = () => (
  <Documentation>
    <ScrollToTop />
    <Page center={true} id="toc">
      <h1>Test</h1>
      <div className="w-64 h-64 bg-pink-500" />
    </Page>
  </Documentation>
);
