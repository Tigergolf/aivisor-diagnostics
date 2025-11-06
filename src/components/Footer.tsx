import logo from "@/assets/aivisors-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img src={logo} alt="AIVisors" className="h-8" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} AIVisors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
