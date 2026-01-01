import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import OtherInformation from "./sections/OtherInformation";
import TechStack from "./sections/TechStack";
import ExtracurricularActivity from "./sections/ExtracurricularActivity";
import Education from "./sections/Education";
import ProfessionalExperience from "./sections/ProfessionalExperience";

function Resume() {
  const contentRef = useRef<HTMLDivElement>(null);

  const reactToPrintFn = useReactToPrint({
    contentRef: contentRef,
    pageStyle: `
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
  
      @media print {
        @page {
          size: A4;
          margin: 12mm 15mm;
        }

        body {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
  
        .no-print {
          display: none !important;
        }
      }
    `,
    documentTitle: `${"Sakkarin Poolsuk".replace(/\s/g, "-")}-Resume`,
    onPrintError: () => alert("there is an error when printing"),
  });

  return (
    <div>
      <button
        className="no-print fixed top-4 right-4 bg-white p-2 rounded-full opacity-50 hover:opacity-100 transition-opacity"
        onClick={() => reactToPrintFn()}
      >
        <i className="fa fa-print text-xl text-gray-600"></i>
      </button>

      <div
        ref={contentRef}
        className="mx-auto max-w-5xl md:p-8 print:p-0 print:m-0 print:w-full print:max-w-none space-y-5 shadow-md print:shadow-none bg-white"
        role="main"
      >
        {/* Header */}
        <header className="text-center">
          <h3 className="text-2xl font-semibold tracking-tight">
            SAKKARIN POOLSUK
          </h3>
          <div
            className="flex flex-col md:flex-row justify-center md:gap-6 mt-2 text-sm md:text-base text-gray-600"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              gap: "8px",
            }}
          >
            <p>
              Email:{" "}
              <a href="mailto:sakkarin2000@gmail.com" className="underline">
                sakkarin2000@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+66854050743" className="underline">
                +66 854050743
              </a>
            </p>
          </div>
          <p className="mt-2 text-base md:text-lg text-gray-600">
            "Full-Stack Software Developer | Building High-Quality, Scalable Web Applications"
          </p>
        </header>

        {/* Experience Section */}
        <section>
          <ProfessionalExperience />
        </section>

        {/* Education Section */}
        <section>
          <div className="flex justify-between gap-2.5">
            <div className="pr-2.5 border-r border-gray-200 w-2/3">
              <Education />
            </div>
            <div className="w-1/3">
              <ExtracurricularActivity />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between gap-2.5">
            <div className="pr-2.5 border-r border-gray-200 w-2/3">
              <TechStack />
            </div>
            <div className="w-1/3">
              <OtherInformation />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Resume;