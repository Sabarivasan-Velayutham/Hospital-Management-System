
import human6 from "../assets/human6.jpg";
import doct2 from "../assets/doct2.jpg";
import doct4 from "../assets/doct4.jpg";
import doct5 from "../assets/doct5.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "../components/Shared/Navbar";

function Hospital2() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="bg-[#FEFAE0] ">
              <Navbar />
      <motion.section
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="h-full max-w-7xl flex flex-col m-auto justify-center items-center overflow-auto">
          <p className="font-semibold text-3xl pt-16">Meet Our Specialist</p>

          <div className="flex flex-col gap-2">
              <div className="flex gap-3">
                <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={doct2}
                      alt=""
                    />
                    <h5 className="mb-1 text-xl font-medium text-black">
                      Dr.Victor Suresh
                    </h5>
                    <span className="text-sm text-black">Surgeon</span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="/appointment"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={human6}
                      alt=""
                    />
                    <h5 className="mb-1 text-xl font-medium text-black">
                      Dr.Mahesh Dalla
                    </h5>
                    <span className="text-sm text-black">Surgeon</span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="/appointment"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={doct4}
                      alt=""
                    />
                    <h5 className="mb-1 text-xl font-medium text-black">
                      Dr.Sasuke Uchiha
                    </h5>
                    <span className="text-sm text-black">Surgeon</span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="/appointment"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-[270px] h-[300px] bg-[#D4A373] border border-gray-200 rounded-lg shadow flex justify-center">
                  <div className="flex flex-col items-center justify-center ">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={doct5}
                      alt=""
                    />
                    <h5 className="mb-1 text-xl font-medium text-black">
                      Dr.Miku Uzumaki
                    </h5>
                    <span className="text-sm text-black">Surgeon</span>
                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="/appointment"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700 ms-3"
                      >
                        Book Appointment
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default Hospital2;
