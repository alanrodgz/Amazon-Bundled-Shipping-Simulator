"use client";

const footerSections = [
  {
    title: "Get to Know Us",
    links: ["Careers", "Blog", "About Not Amazon", "Investor Relations"]
  },
  {
    title: "Make Money with Us",
    links: ["Sell products on Not Amazon", "Sell on Not Amazon Business", "Sell apps on Not Amazon", "Become an Affiliate"]
  },
  {
    title: "Not Amazon Payment Products",
    links: ["Not Amazon Business Card", "Shop with Points", "Reload Your Balance", "Not Amazon Currency Converter"]
  },
  {
    title: "Let Us Help You",
    links: ["Not Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies"]
  }
];

export default function NotAmazonFooter() {
  return (
    <footer className="bg-amazon-navy text-white mt-12">
      <div className="px-4 py-8">
        <div className="text-center border-b border-gray-600 pb-6 mb-6">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded mb-4 transition-colors">
            Back to top
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-300 hover:text-white text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-600 pt-6">
          <div className="flex items-center justify-center mb-4">
            <span className="text-2xl font-bold text-white">not amazon</span>
            <span className="text-xl font-bold text-amazon-orange">.com</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs text-gray-400">
            <a href="#" className="hover:text-white">Conditions of Use</a>
            <a href="#" className="hover:text-white">Privacy Notice</a>
            <a href="#" className="hover:text-white">Interest-Based Ads</a>
            <span>© 1996-2024, NotAmazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>
    </footer>
  );
}