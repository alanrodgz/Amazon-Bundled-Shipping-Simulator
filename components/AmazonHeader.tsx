export default function AmazonHeader() {
  return (
    <header className="bg-amazon-navy text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <i className="fab fa-amazon text-2xl mr-2"></i>
            <span className="text-xl font-bold">.com</span>
          </div>
          <div className="flex items-center text-sm">
            <i className="fas fa-map-marker-alt mr-1"></i>
            <div>
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-bold">New York 10001</div>
            </div>
          </div>
        </div>
        
        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <select className="bg-gray-200 text-black px-2 py-2 rounded-l text-sm border-r">
              <option>All Departments</option>
            </select>
            <input type="text" placeholder="Search Amazon" className="flex-1 px-3 py-2 text-black" />
            <button className="bg-amazon-orange px-4 py-2 rounded-r">
              <i className="fas fa-search amazon-navy"></i>
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <i className="fas fa-flag-usa mr-1"></i>
            <span>EN</span>
          </div>
          <div>
            <div className="text-xs">Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>
          <div>
            <div className="text-xs">Returns</div>
            <div className="font-bold">& Orders</div>
          </div>
          <div className="flex items-center">
            <i className="fas fa-shopping-cart text-xl mr-1"></i>
            <span className="font-bold">Cart</span>
            <span className="bg-amazon-orange amazon-navy rounded-full px-1 text-xs ml-1">0</span>
          </div>
        </div>
      </div>
      
      <nav className="bg-amazon-navy border-t border-gray-600 px-4 py-1">
        <div className="flex items-center space-x-6 text-sm">
          <button className="flex items-center hover:border border-white px-1 py-1">
            <i className="fas fa-bars mr-2"></i>
            All
          </button>
          <a href="#" className="hover:border border-white px-1 py-1">Today's Deals</a>
          <a href="#" className="hover:border border-white px-1 py-1">Customer Service</a>
          <a href="#" className="hover:border border-white px-1 py-1">Registry</a>
          <a href="#" className="hover:border border-white px-1 py-1">Gift Cards</a>
          <a href="#" className="hover:border border-white px-1 py-1">Sell</a>
        </div>
      </nav>
    </header>
  );
}
