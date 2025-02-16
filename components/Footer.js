const Footer = () => {
  return (
    <footer className="dark:bg-white mx-4 rounded-3xl bg-gradient-to-b from-[#3b5269]">
    <div className="flex flex-col sm:flex-row justify-between items-center py-16 sm:px-32 px-10 pb-6 sm:pb-16">
        <span className="text-4xl text-white sm:text-left text-center">
        Join us on our mission to make people fitter!
        </span>
        <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-[#BBC8CF] bg-white/20 p-4 rounded-full hover:text-white dark:hover:text-white"
            >
              <img src="facebook.svg" alt="Facebook"/>
            </a>
            <a
              href="#"
              className="text-[#BBC8CF] bg-white/20 p-4 rounded-full hover:text-white dark:hover:text-white ms-5"
            >
                <img src="X.svg" alt="X"/>
            </a>
            <a
              href="#"
              className="text-[#BBC8CF] bg-white/20 p-4 rounded-full hover:text-white dark:hover:text-white ms-5"
            >
              <img src="instagram.svg" alt="Instagram"/>
            </a>
          </div>
    </div>
      <div className="mx-auto w-full max-w-screen-xl sm:px-32 px-10 py-6 lg:py-8">
        <div className="md:flex md:justify-between gap-10">
          <div className="mb-10 md:mb-0 flex flex-col gap-5 sm:w-1/4 items-center">
            <a href="/" className="flex items-center">
            <img src="/HART.svg" alt="Hart Logo" className="h-6"/>
            </a>
            <span className="text-white">India | Singapore | USA</span>
            <img src="hippa.png" className="w-24" alt="Hippa"/>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Company
              </h2>
              <ul className="text-[#BBC8CF] dark:text-gray-400 ">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    About us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Become a Coach
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Help & Support
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Services
              </h2>
              <ul className="text-[#BBC8CF] dark:text-gray-400 ">
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Online Coaching
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                    Corporate Wellness
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                  Fitness & Nutrition Courses
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/" className="hover:underline">
                  Weight Loss Diet Plan
                  </a>
                </li>
                <li>
                  <a href="/" className="hover:underline">
                  Diabetes Lifestyle Management
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Tools
              </h2>
              <ul className="text-[#BBC8CF] dark:text-gray-400 ">
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline "
                  >
                    BMR Calculator
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Macro Calculator
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    Body Fat Calculator
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="hover:underline"
                  >
                    1RM Calculator
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-[#BBC8CF] dark:text-gray-400 ">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                  Warranty Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                  Return & Refund
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between mt-10 sm:mt-0">
          <span className="text-sm text-[#BBC8CF] sm:text-center dark:text-gray-400">
            ©  FITTR 2024. All rights reserved
          </span>
          
        </div>
        <hr className="my-6 border-[#FFFFFF1A] sm:mx-auto dark:border-gray-700 lg:my-8" />

      </div>
    </footer>
  );
};

export default Footer;
