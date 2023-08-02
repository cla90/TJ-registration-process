import { Navbar } from ".";

export default {
  title: "Components/Navbar",
  component: Navbar,
  argTypes: {
    type: {
      options: [
        "back-title",
        "logo-centered-with-back",
        "default-header",
        "close",
        "centered-logo-with-search-back",
        "back-right-icons",
        "logo-ceneterd-with-search",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "back-title",
    className: {},
    icClose1Color: "black",
    logoLogoClassName: {},
    icChevronLeft4Color: "black",
    logoLogoClassNameOverride: {},
    icChevronLeft: "/img/ic-chevron-left-1.png",
  },
};
