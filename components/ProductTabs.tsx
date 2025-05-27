"use client";

import { useState } from "react";

const tabs = [
  { id: "details", name: "Product details" },
  { id: "reviews", name: "Customer reviews" },
  { id: "qa", name: "Questions & Answers" },
];

const productInfo = [
  { label: "Brand", value: "Hydro Flask" },
  { label: "Capacity", value: "32 Fluid Ounces" },
  { label: "Material", value: "Stainless Steel" },
  { label: "Color", value: "Black" },
  { label: "Special Feature", value: "Insulated, Leak Proof" },
  { label: "Product Dimensions", value: '3.58"W x 10.8"H' },
];

const reviews = [
  {
    rating: 5,
    title: "Perfect water bottle!",
    author: "Sarah M.",
    date: "January 8, 2024",
    content: "Keeps my drinks cold all day long. The wide mouth makes it easy to fill and clean. Best purchase I've made!"
  },
  {
    rating: 4,
    title: "Great quality",
    author: "Mike J.",
    date: "January 5, 2024",
    content: "Excellent build quality and the insulation works as advertised. Only wish it came with a carrying strap."
  }
];

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div className="mt-8">
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-1 text-sm font-medium ${
                activeTab === tab.id
                  ? 'border-b-2 border-amazon-orange amazon-blue'
                  : 'amazon-gray hover:amazon-blue'
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>

      <div className="py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Product information</h3>
            <table className="w-full text-sm">
              <tbody>
                {productInfo.map((info, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 font-medium amazon-gray w-1/3">{info.label}</td>
                    <td className="py-2">{info.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Customer Reviews</h3>
            <div className="space-y-4">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="star-rating mr-2">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`text-sm ${
                            i < review.rating ? 'fas fa-star' : 'far fa-star'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="font-bold text-sm">{review.title}</span>
                  </div>
                  <div className="text-xs amazon-gray mb-2">
                    By {review.author} on {review.date}
                  </div>
                  <p className="text-sm">{review.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
