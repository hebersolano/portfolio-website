"use client";

import { motion } from "framer-motion";
import services from "@/entities/services";

function ServicesPage() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
        >
          {services.map((service, i) => (
            <div key={i}>
              <div>
                <div>{service.num}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default ServicesPage;
