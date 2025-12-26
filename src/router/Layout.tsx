import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "@ui/Header";
import { Suspense, useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "@/shared/ui/PageLoader";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "@ui/Fallback";

function Layout() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  //Scroll to top logic
  useEffect(() => {
    const scrollHandler = () => setShowScrollTop(window.scrollY > 1000);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Toaster
        toastOptions={{ style: { background: "#1b0b43", color: "white" } }}
      />
      <div className="background-gradiant min-h-dvh text-white md:px-12 md:py-8 lg:px-40">
        <div className="background-gradiant-reverse min-h-dvh md:min-h-1/2 md:rounded-2xl md:py-8">
          <ErrorBoundary
            FallbackComponent={Fallback}
            onReset={() => window.location.reload()}
          >
            <Header />

            <main>
              <section className="pt-28 pb-16 md:py-8">
                <div className="mx-auto w-full max-w-7xl px-4 md:px-12">
                  <Suspense fallback={<PageLoader />}>
                    <Outlet />
                  </Suspense>
                </div>
              </section>
            </main>

            <AnimatePresence>
              {showScrollTop && (
                <motion.div
                  initial={{ opacity: 0, y: +20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={scrollToTop}
                  className="fixed right-5 bottom-20 z-10 flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/40 bg-white/7 font-semibold text-white shadow-[0px_0px_5px_0px_rgba(255,255,255,0.7)] backdrop-blur-xl transition-colors hover:border-white/45 hover:bg-white/10 active:bg-white/20 md:right-7/100"
                >
                  <FaChevronUp />
                </motion.div>
              )}
            </AnimatePresence>
          </ErrorBoundary>
        </div>
      </div>
    </>
  );
}

export default Layout;
