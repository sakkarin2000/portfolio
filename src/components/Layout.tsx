import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans">
      <main className="flex-grow px-4 py-8 md:px-10">{children}</main>
      <footer className="no-print text-center border-t border-gray-300 py-4 text-sm text-gray-500">
        © {currentYear} Sakkarin Poolsuk. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
