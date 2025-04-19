type SectionContainerProps = {
  title: string;
  children: React.ReactNode;
};

const SectionContainer = ({ title, children }: SectionContainerProps) => (
  <>
    <h2 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-2">
      {title}
    </h2>
    {children}
  </>
);

export default SectionContainer;
