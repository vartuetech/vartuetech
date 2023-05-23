import {
  ComputerDesktopIcon,
  CloudIcon,
  DevicePhoneMobileIcon,
  RectangleStackIcon,
  ShoppingCartIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Services() {
  const features = [
    {
      icon: <ComputerDesktopIcon className="h-8 w-8" aria-hidden="true" />,
      title: "Web Development",
      desc: "Our talented team of web developers crafts visually appealing and highly functional websites tailored to your specific requirements. Whether you need a simple business website, an e-commerce platform, or a complex web application, we leverage the latest technologies and industry best practices to deliver outstanding results.",
    },
    {
      icon: <RectangleStackIcon className="h-8 w-8" aria-hidden="true" />,
      title: "UI/UX Design",
      desc: "Deliver exceptional user experiences with our UI/UX design services. Our skilled designers blend creativity and usability to create visually stunning interfaces that captivate users and enhance their interaction with your digital products. We focus on user-centric design principles to make your applications intuitive, engaging, and conversion-oriented.",
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8" aria-hidden="true" />,
      title: "Mobile App Development",
      desc: "Stay ahead in the mobile-first era with our top-notch mobile app development services. We specialize in creating user-friendly, feature-rich applications for iOS and Android platforms. From concept to deployment, we ensure a seamless development process to bring your app ideas to life and engage your target audience.",
    },
    {
      icon: <CloudIcon className="h-8 w-8" aria-hidden="true" />,
      title: "Cloud Solutions",
      desc: "Unlock the power of the cloud with our cloud solutions tailored to your business needs. We provide cloud migration, infrastructure setup, and ongoing management services to help you leverage the scalability, flexibility, and security of cloud computing. From optimizing workflows to enhancing data storage and accessibility, our experts ensure seamless cloud integration.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8" aria-hidden="true" />,
      title: "Software Consulting",
      desc: "Our experienced software consultants are ready to guide you through the intricacies of technology and help you make informed decisions. We offer strategic advice, feasibility assessments, technology audits, and roadmapping to align your software initiatives with your business goals. With our insights, you can optimize your software development processes and maximize your ROI.",
    },
    {
      icon: <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />,
      title: "E-commerce Solutions",
      desc: "Enable seamless online selling experiences with our e-commerce solutions. We build secure, scalable, and user-friendly e-commerce platforms that empower businesses to sell products and services globally. From customizing your online store to integrating payment gateways and optimizing conversions, we ensure a robust and streamlined e-commerce presence.",
    },
  ];

  return (
    <section className="py-14 my-[6rem]">
      <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-[#FBB040] text-2xl font-semibold sm:text-3xl">
            Empowering Your Business with Our Exceptional Services
          </h3>
          <p className="mt-3">
            At Vartuetech, we offer a wide range of services designed to meet
            the unique needs of our clients. With our expertise in technology
            and deep understanding of various industries, we strive to deliver
            innovative solutions that drive growth and success. Explore our
            comprehensive services below:
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li key={idx} className="space-y-3">
                <div className="w-16 h-16 mx-auto bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <h4 className="text-lg text-gray-800 font-semibold">
                  {item.title}
                </h4>
                <p>{item.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
