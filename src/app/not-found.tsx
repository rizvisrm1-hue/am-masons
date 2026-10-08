import Button from "@/components/ui/Button";
import PageHero from "@/components/ui/PageHero";

export default function NotFound() {
  return (
    <>
      <PageHero 
        title="Page Not Found" 
        subtitle="The page you are looking for doesn't exist or has been moved."
      />
      <section className="py-20 md:py-28 bg-white text-center">
        <div className="container mx-auto px-4 max-w-xl">
          <h2 className="text-3xl font-bold text-navy-900 mb-6">404</h2>
          <p className="text-lg text-gray-600 mb-10">
            We couldn&apos;t find the page you were looking for. It might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/">Return to Home</Button>
            <Button href="/contact" variant="outline">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
}
