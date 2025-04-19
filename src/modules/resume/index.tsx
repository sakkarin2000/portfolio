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
        className="max-w-4xl mx-auto p-6 md:p-10 space-y-8"
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
            "Passionate about software craftsmanship, with a focus on writing
            clean, maintainable code and building scalable solutions."
          </p>
        </header>

        {/* Experience Section */}
        <section>
          <ProfessionalExperience />
        </section>

        {/* Education Section */}
        <section>
          <div className="flex justify-between gap-[10px]">
            <div className="pr-[10px] border-r border-gray-200 w-2/3">
              <Education />
            </div>
            <div className="w-1/3">
              <ExtracurricularActivity />
            </div>
          </div>
        </section>

        <section>
          <div className="flex justify-between gap-[10px]">
            <div className="pr-[10px] border-r border-gray-200 w-2/3">
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
