import CardNav from "./ui/card-nav.jsx";

export const Header = () => {
  const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "About Us", ariaLabel: "About Us" },
        { label: "FAQ", ariaLabel: "Frequently Asked Questions" },
      ],
    },
    {
      label: "Learning Path",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "React", ariaLabel: "React Learning Path" },
        { label: "Front-End", ariaLabel: "Front End Learning Path" },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        { label: "Instagram", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" },
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
