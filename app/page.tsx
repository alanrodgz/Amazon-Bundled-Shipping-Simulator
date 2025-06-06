import NotAmazonHeader from "@/components/NotAmazonHeader";
import ProductGallery from "@/components/ProductGallery";
import ProductDetails from "@/components/ProductDetails";
import PurchaseOptions from "@/components/PurchaseOptions";
import ProductTabs from "@/components/ProductTabs";
import RelatedProducts from "@/components/RelatedProducts";
import NotAmazonFooter from "@/components/NotAmazonFooter";

export default function ProductPage() {
  return (
    <div className="bg-white">
      <NotAmazonHeader />
      
      {/* Breadcrumb */}
      <div className="px-4 py-2 text-sm amazon-blue">
        <a href="#" className="hover:amazon-red hover:underline">Sports & Outdoors</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:amazon-red hover:underline">Sports & Fitness</a>
        <span className="mx-2">›</span>
        <a href="#" className="hover:amazon-red hover:underline">Water Bottles</a>
        <span className="mx-2">›</span>
        <span className="amazon-dark">Hydro Flask</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5">
            <ProductGallery />
          </div>

          <div className="lg:col-span-4">
            <ProductDetails />
          </div>

          <div className="lg:col-span-3">
            <PurchaseOptions />
          </div>
        </div>

        <ProductTabs />
        <RelatedProducts />
      </div>

      <NotAmazonFooter />
    </div>
  );
}