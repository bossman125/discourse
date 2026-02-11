import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { FileText } from 'lucide-react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PdfViewerProps {
  file: string;
  title?: string;
}

export function PdfViewer({ file, title }: PdfViewerProps) {
  const [numPages, setNumPages] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(false);
  }

  function onDocumentLoadError() {
    setError(true);
  }

  if (isMobile) {
    return (
      <div className="flex flex-col items-center my-6 p-6 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
        {title && (
          <h3 className="text-lg font-semibold text-center mb-4 text-slate-900">{title}</h3>
        )}
        <FileText size={48} className="text-gray-400 mb-4" />
        <p className="text-gray-600 text-center mb-4">
          PDF viewing is optimized for larger screens
        </p>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FileText size={20} />
          View PDF (opens in new tab)
        </a>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center my-6 p-6 border-2 border-red-200 rounded-lg bg-red-50">
        {title && (
          <h3 className="text-lg font-semibold text-center mb-4 text-slate-900">{title}</h3>
        )}
        <p className="text-red-600 text-center mb-4">
          Failed to load PDF document
        </p>
        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FileText size={20} />
          View PDF (opens in new tab)
        </a>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center my-6">
      {title && (
        <h3 className="text-lg font-semibold text-center mb-4 text-slate-900">{title}</h3>
      )}
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onDocumentLoadError}
        className="flex flex-col items-center"
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            className="border shadow-md rounded-md mb-6 max-w-[800px]"
            width={Math.min(800, window.innerWidth - 48)}
          />
        ))}
      </Document>
      {numPages > 0 && (
        <p className="text-sm text-gray-500 mt-4">
          Total pages: {numPages}
        </p>
      )}
    </div>
  );
}
