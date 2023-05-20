import useTitle from "../../hooks/useTitle";
import PageDetails from "../shared/pageDetails/PageDetails";

const Blogs = () => {
  // dynamic title
  useTitle("| Blogs");
  return (
    <div>
      <PageDetails title={"See Our Blogs"}></PageDetails>
      <>
        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h1 className=" text-4xl font-black uppercase text-edu-primary font-edu-baloo text-center">
                Questions and Answer
              </h1>
              <div className="h-1 lg:h-2 w-48 bg-edu-secondary mx-auto my-4"></div>
              <p>Here is some Questions and Answer</p>
            </div>
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-1/2">
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        What is an access token and refresh token? How do they
                        work and where should we store them on the client-side?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      It takes 2-3 weeks to get your first blog post ready. That
                      includes the in-depth research &amp; creation of your
                      monthly content marketing strategy that we do before
                      writing your first blog post, Ipsum available .
                    </p>
                  </div>
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        What is MongoDB aggregate and how does it work?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      It takes 2-3 weeks to get your first blog post ready. That
                      includes the in-depth research &amp; creation of your
                      monthly content marketing strategy that we do before
                      writing your first blog post, Ipsum available .
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        What is express js? What is Nest JS?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      It takes 2-3 weeks to get your first blog post ready. That
                      includes the in-depth research &amp; creation of your
                      monthly content marketing strategy that we do before
                      writing your first blog post, Ipsum available .
                    </p>
                  </div>
                </div>
                <div className="single-faq mb-8 w-full rounded-lg border border-[#F3F4FE] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-lg font-semibold text-black">
                        Compare SQL and NoSQL databases?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      It takes 2-3 weeks to get your first blog post ready. That
                      includes the in-depth research &amp; creation of your
                      monthly content marketing strategy that we do before
                      writing your first blog post, Ipsum available .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 z-[-1]">
            <svg
              width={1440}
              height={886}
              viewBox="0 0 1440 886"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="1308.65"
                  y1="1142.58"
                  x2="602.827"
                  y2="-418.681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.36" />
                  <stop offset={1} stopColor="#F5F2FD" stopOpacity={0} />
                  <stop offset={1} stopColor="#F5F2FD" stopOpacity="0.096144" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </>
    </div>
  );
};

export default Blogs;
