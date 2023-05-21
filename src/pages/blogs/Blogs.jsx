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
                <div className="single-faq mb-8 w-full rounded-lg bg-edu-bg shadow-xl p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-xl font-semibold text-black">
                        What is an access token and refresh token? How do they
                        work and where should we store them on the client-side?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px] my-2">
                    <p>
                      {" "}
                      <span className="font-bold">Access Token : </span>
                      An access token is a credential used for authentication
                      and authorization in systems and services. It grants
                      access to specific resources or actions. Access tokens are
                      issued after successful authentication and are typically
                      short-lived.{" "}
                    </p>

                    <p>
                      {" "}
                      <span className="font-bold">Refresh Token : </span>A
                      refresh token is a long-lived credential that accompanies
                      the access token. It is used to obtain a new access token
                      when the current one expires. Refresh tokens help maintain
                      continuous access without frequent reauthentication.{" "}
                    </p>

                    <p>
                      {" "}
                      <span className="font-bold">How They Work : </span>
                      Access tokens are obtained during the initial
                      authentication process and are sent with each request to
                      authorize access. When an access token expires, the client
                      uses the refresh token to request a new access token
                      without reauthentication. This process allows for seamless
                      access to resources while maintaining security.{" "}
                    </p>

                    <p>
                      {" "}
                      <span className="font-bold">
                        Where to Store Them on the Client-side :{" "}
                      </span>
                      Access tokens and refresh tokens should be stored securely
                      on the client-side. Recommended options are HTTP-only
                      cookies or browsers local storage. These methods offer
                      built-in security measures, protecting tokens from
                      unauthorized access. Storing tokens in memory variables is
                      discouraged. Its crucial to follow security best
                      practices and choose storage methods that adequately
                      safeguard the tokens.{" "}
                    </p>
                  </div>
                </div>
                <div className="single-faq mb-8 w-full rounded-lg bg-edu-bg shadow-xl p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-xl font-semibold text-black">
                        What is MongoDB aggregate and how does it work?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      <p>
                        <span className="font-bold">MongoDB aggregate : </span>{" "}
                        MongoDB aggregation is a way of processing a large
                        number of documents in a collection by means of passing
                        them through different stages. The stages make up what
                        is known as a pipeline. The stages in a pipeline can
                        filter, sort, group, reshape and modify documents that
                        pass through the pipeline.{" "}
                      </p>
                      <p>
                        <span className="font-bold">How does it work : </span>{" "}
                        <br />{" "}
                        <span className="underline">Pipeline Stages : </span>{" "}
                        The aggregation pipeline consists of one or more stages,
                        each representing an operation to be performed on the
                        data. Common stages include $match (filtering
                        documents), $group (grouping documents), $sort (sorting
                        documents), $project (reshaping documents), and more.{" "}
                        <br />
                        <span className="underline">Document Flow : </span> The
                        input documents flow through the pipeline sequentially,
                        with each stage receiving the output of the previous
                        stage as its input. This allows for a series of data
                        transformations and manipulations. <br />
                        <span className=" underline">
                          Data Transformation :{" "}
                        </span>{" "}
                        At each stage, the specified operation is applied to the
                        input documents, modifying or reshaping them as needed.
                        For example, the $match stage filters documents based on
                        specified conditions, while the $group stage groups
                        documents based on a key and performs aggregations on
                        each group. <br />
                        <span className=" underline">
                          Document Processing :{" "}
                        </span>{" "}
                        As the documents progress through the pipeline, they are
                        processed and transformed based on the operations
                        defined in each stage. The resulting documents at each
                        stage become the input for the next stage, creating a
                        data processing flow.{" "}
                      </p>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="single-faq mb-8 w-full rounded-lg bg-edu-bg shadow-xl p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-xl font-semibold text-black">
                        What is express js? What is Nest JS?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      <p>
                        <span className="font-bold">Express js : </span>
                        Express.js is a lightweight web application framework
                        for Node.js. It simplifies server-side application
                        development with its minimalistic features. Express.js
                        handles HTTP requests, routing, middleware, and
                        responses efficiently. It supports the creation of APIs
                        and web applications. With its simplicity and
                        scalability, Express.js is widely adopted by developers.
                      </p>{" "}
                      <br />
                      <p>
                        <span className="font-bold">Next js : </span>
                        Next.js is a popular React framework for building
                        server-side rendered (SSR) and statically generated
                        (SSG) web applications. It provides a robust set of
                        features and tools that enhance the development
                        experience and optimize performance. <br /> <br />
                        <span className="font-semibold">
                          Next.js offers several key features, including :{" "}
                        </span>{" "}
                        <br />
                        1. Automatic code splitting <br /> 2. Static site
                        generation <br /> 3. API routes <br />
                        4. Hot module replacement <br /> 5. CSS and Sass support{" "}
                        <br /> 6. Image optimization <br /> 7. Dynamic imports:
                      </p>
                    </p>
                  </div>
                </div>
                <div className="single-faq mb-8 w-full rounded-lg bg-edu-bg shadow-xl p-4 sm:p-8 lg:px-6 xl:px-8">
                  <div className="lg:ml-16">
                    <div className="w-full">
                      <h4 className="text-xl font-semibold text-black">
                        Compare SQL and NoSQL databases?
                      </h4>
                    </div>
                  </div>
                  <div className="faq-content lg:pl-[62px]">
                    <p className="py-3 text-base leading-relaxed text-body-color">
                      <span className="font-bold">SQL Databases : </span> <br />
                      <span className=" underline">
                        1. Relational Structure :{" "}
                      </span>{" "}
                      SQL databases organize data into tables with predefined
                      schemas, enforcing a structured and rigid format.
                      <br />{" "}
                      <span className=" underline">
                        2. ACID Compliance:
                      </span>{" "}
                      SQL databases provide strong data consistency and support
                      ACID properties, ensuring reliability and integrity in
                      transactions. <br />
                      <span className=" underline">3. Query Language:</span> SQL
                      databases use structured query language (SQL) for defining
                      and manipulating data in a tabular format. <br />
                      <span className=" underline">
                        4. Suitable for Complex Relationships:
                      </span>{" "}
                      SQL databases are well-suited for applications with
                      complex data relationships, as they allow for efficient
                      joining and querying across multiple tables. <br /> <br />
                     
                      <span className=" font-bold">NoSQL Databases : </span> <br />
                      <span className=" underline">1. Flexible Schema: </span> NoSQL databases have a dynamic schema,
                      allowing for the storage of unstructured, semi-structured,
                      and structured data without predefined schemas. <br />
                     <span className=" underline"> 2. Scalability and Distribution:</span> NoSQL databases focus on
                      horizontal scalability, distributed architectures, and
                      high availability to handle large volumes of data and
                      accommodate growing demands. <br /> <span className=" underline">3. Variety of Data Models:</span> NoSQL
                      databases offer flexible data models, including key-value,
                      document, columnar, and graph, to handle diverse data
                      types and relationships effectively. <br /> <span className=" underline">4. Well-Suited for Big
                      Data:</span> NoSQL databases are commonly used in applications
                      dealing with large volumes of unstructured or rapidly
                      changing data, such as real-time analytics, content
                      management systems, and IoT applications.
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
