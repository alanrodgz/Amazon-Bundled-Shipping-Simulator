const footerSections = [
  {
    title: "Get to Know Us",
    links: ["Careers", "Blog", "About Amazon", "Investor Relations"]
  },
  {
    title: "Make Money with Us",
    links: ["Sell products on Amazon", "Sell on Amazon Business", "Sell apps on Amazon", "Become an Affiliate"]
  },
  {
    title: "Amazon Payment Products",
    links: ["Amazon Business Card", "Shop with Points", "Reload Your Balance", "Amazon Currency Converter"]
  },
  {
    title: "Let Us Help You",
    links: ["Amazon and COVID-19", "Your Account", "Your Orders", "Shipping Rates & Policies"]
  }
];

export default function AmazonFooter() {
  return (
    <footer className="bg-amazon-navy text-white mt-12">
      <div className="px-4 py-8">
        <div className="text-center border-b border-gray-600 pb-6 mb-6">
          <button className="text-sm hover:underline">Back to top</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-bold mb-2">{section.title}</h4>
              <ul className="space-y-1 text-sm">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:underline">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-amazon-navy border-t border-gray-600 py-4">
        <div className="flex items-center justify-center">
          <i className="fab fa-amazon text-2xl mr-2"></i>
          <span className="text-xl">.com</span>
        </div>
      </div>
    </footer>
  );
}
