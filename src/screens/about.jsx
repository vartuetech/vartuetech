const people = [
  {
    name: "Gourav Rawat",
    role: "Co-Founder / Frontend Developer",
    imageUrl: "./public/avatar.png",
  },
  {
    name: "Vijay",
    role: "Co-Founder / Full Stack Dev",
    imageUrl: "./public/avatar.png",
  },
  {
    name: "Charan Singh",
    role: "Co-Founder / Frontend Dev",
    imageUrl: "./public/avatar.png",
  },
  {
    name: "Jatin",
    role: "Co-Founder / Frontend Dev",
    imageUrl: "./public/avatar.png",
  },
  // More people...
];

export default function About() {
  return (
    <div className="bg-white w-[93%] my-[8rem] overflow-x-hidden m-auto sm:w-[90%]">
      <h2 className="sm:text-3xl text-2xl py-3 font-bold flex justify-center mb-6">
        <span className="text-[#fba524]">Welcome to Vartuetech</span>
      </h2>
      <p className="text-l text-gray-800 py-3">
        At Vartuetech, we are a passionate and dynamic team of technology
        enthusiasts, dedicated to providing innovative solutions to our clients.
        We specialize in delivering high-quality service-based solutions that
        empower businesses to thrive in the digital age.
      </p>

      <h5 className="text-[#fba524] text-2xl font-semibold mt-4">
        Our Mission:
      </h5>
      <p className="text-l text-gray-800 py-3">
        Our mission is to leverage the power of technology to transform
        businesses and enhance their efficiency, productivity, and growth. We
        strive to be the trusted partner for our clients, helping them navigate
        the ever-changing digital landscape with confidence and success.
      </p>
      <h5 className="text-[#fba524] text-2xl font-semibold mt-4">
        What Sets Us Apart:
      </h5>
      <p className="text-l text-gray-800 py-3">
        At Vartuetech, we believe in the power of collaboration and excellence.
        Here are some key factors that set us apart:
      </p>
      <ol className="px-8 flex flex-col gap-4 list-disc text-l text-gray-800">
        <li>
          Expertise and Experience: Our team consists of highly skilled
          professionals with diverse backgrounds and expertise. With years of
          industry experience, we bring a wealth of knowledge to every project
          we undertake.
        </li>
        <li>
          Client-Centric Approach: We value our clients and prioritize their
          success. We take the time to understand their unique challenges,
          goals, and aspirations. By building strong relationships and
          maintaining open communication, we ensure that our solutions align
          perfectly with their vision.
        </li>
        <li>
          Innovative Solutions: Technology is ever-evolving, and we stay at the
          forefront of the latest trends and advancements. We embrace innovation
          and leverage cutting-edge tools and technologies to create customized
          solutions that drive tangible results.
        </li>
        <li>
          Quality and Reliability: We are committed to delivering top-notch
          solutions that exceed expectations. Our rigorous quality assurance
          processes ensure that every project we deliver is reliable, robust,
          and tailored to meet the specific requirements of our clients.
        </li>
        <li>
          Collaborative Partnership: We believe in fostering long-term
          partnerships with our clients. By working closely with them, we become
          an extension of their team, offering continuous support, guidance, and
          technical expertise throughout their digital journey.
        </li>
      </ol>
      <h5 className="text-[#fba524] text-2xl font-semibold mt-4">
        Our Services:
      </h5>
      <p className="text-l text-gray-800 py-3">
        At Vartuetech, we offer a comprehensive range of services to cater to
        the diverse needs of our clients. Whether it&apos;s web development,
        mobile app development, UI/UX design, or digital marketing, our team has
        the skills and expertise to deliver exceptional solutions that drive
        business growth.
      </p>
      <p className="text-l text-gray-800 py-3 font-semibold">
        Join us on this exciting technological journey and experience the
        Vartuetech difference.
      </p>
    </div>
  );
}
