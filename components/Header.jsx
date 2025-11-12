import CardNav from "./ui/card-nav.jsx";

export const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "rgba(255, 255, 255, 0.7)",
      textColor: "#000",
      href: "about",

      links: [
        { label: "About Us", ariaLabel: "About Us", href: "about" },
        {
          label: "FAQ",
          ariaLabel: "Frequently Asked Questions",
          href: "about",
        },
      ],
    },
    {
      label: "Learning Path",
      bgColor: "rgba(255, 255, 255, 0.7)",
      textColor: "#000",
      href: "path",
      links: [
        {
          label: "React",
          ariaLabel: "React Learning Path",
          href: "/react",
        },
        {
          label: "Front-End",
          ariaLabel: "Front End Learning Path",
          href: "/front-end",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "rgba(255, 255, 255, 0.7)",
      textColor: "#000",
      links: [
        {
          label: "Instagram",
          ariaLabel: "Email us",
          href: "https://www.instagram.com/dcn.unival/",
        },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="#fff"
      menuColor="#000"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      ease="power3.out"
      className="fixed "
    />
  );
};
