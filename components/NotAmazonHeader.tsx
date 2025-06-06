"use client";

import { useCart } from "@/lib/cart";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotAmazonHeader() {
  const [mounted, setMounted] = useState(false);
  const totalItems = useCart((state) => state.getTotalItems());

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <header className="bg-amazon-navy text-white">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">not amazon</span>
            <span className="text-xl font-bold text-amazon-orange">.com</span>
          </div>
          <div className="flex items-center text-sm">
            <i className="fas fa-map-marker-alt mr-1"></i>
            <div>
              <div className="text-xs text-gray-300">Deliver to</div>
              <div className="font-bold">Seattle 98101</div>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl mx-4">
          <div className="flex">
            <select className="bg-gray-200 border border-gray-300 rounded-l px-3 py-2 text-black">
              <option>All</option>
            </select>
            <input 
              type="text" 
              placeholder="Search Not Amazon"
              className="flex-1 px-4 py-2 text-black"
            />
            <button className="bg-amazon-orange hover:bg-orange-500 px-4 py-2 rounded-r">
              <i className="fas fa-search text-black"></i>
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
          <Link href="/cart" className="flex items-center hover:border border-white px-1 py-1">
            <i className="fas fa-shopping-cart text-xl mr-1"></i>
            <span className="font-bold">Cart</span>
            <span className="bg-amazon-orange amazon-navy rounded-full px-1 text-xs ml-1">
              {mounted ? totalItems : 0}
            </span>
          </Link>
        </div>
      </div>
      
      <nav className="bg-amazon-navy border-t border-gray-600 px-4 py-1">
        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center">
            <i className="fas fa-bars mr-2"></i>
            <span className="font-bold">All</span>
          </div>
          <a href="#" className="hover:text-amazon-orange">Today's Deals</a>
          <a href="#" className="hover:text-amazon-orange">Customer Service</a>
          <a href="#" className="hover:text-amazon-orange">Registry</a>
          <a href="#" className="hover:text-amazon-orange">Gift Cards</a>
          <a href="#" className="hover:text-amazon-orange">Sell</a>
        </div>
      </nav>
    </header>
  );
}