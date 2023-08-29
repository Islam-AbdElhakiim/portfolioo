import { ReactElement } from "react";
// #region icons
import {
  HiChatBubbleBottomCenterText,
  HiEnvelope,
  HiHome,
  HiRectangleGroup,
  HiUser,
  HiViewColumns,
} from "react-icons/hi2";
import {
  BiLogoLinkedin,
  BiLogoGithub,
  BiLogoFacebook,
  BiSolidMouseAlt,
  BiLogoTailwindCss,
  BiSolidCoinStack,
} from "react-icons/bi";

import {
  FaAngular,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDotnet,
  SiExpress,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

import { AiFillMediumSquare } from "react-icons/ai";
import { PiNumberFiveBold } from "react-icons/pi";

import {
  RxCrop,
  RxDesktop,
  RxPencil2,
  RxReader,
  RxRocket,
} from "react-icons/rx";
import { TbBrandFramerMotion, TbSql } from "react-icons/tb";

// #endregion
import { aboutDataType, navDataType, socialLinksType } from "../types";

// nav data
export const navData: navDataType[] = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "/about", icon: <HiUser /> },
  { name: "services", path: "/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/work", icon: <HiViewColumns /> },
  {
    name: "testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: "contact",
    path: "/contact",
    icon: <HiEnvelope />,
  },
];

// Social Link
export const socialLinks: socialLinksType[] = [
  {
    name: "Linkedin",
    path: "https://www.linkedin.com/in/islam-abdelhakiim21/",
    icon: <BiLogoLinkedin />,
  },
  {
    name: "Github",
    path: "https://github.com/Islam-AbdElhakiim",
    icon: <BiLogoGithub />,
  },
  {
    name: "Mostaql",
    path: "https://mostaql.com/u/Mr_Admin/reviews",
    icon: <AiFillMediumSquare />,
  },
  {
    name: "Khamsat",
    path: "https://khamsat.com/user/mr-admin/reviews",
    icon: <PiNumberFiveBold />,
  },
  {
    name: "Facebook",
    path: "https://www.facebook.com/IslamAbdelhakiim/",
    icon: <BiLogoFacebook />,
  },
];

//About Data
export const aboutData: aboutDataType[] = [
  {
    title: "skills",
    info: [
      {
        title: "Front-End",
        _icons: [
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaAngular />,
          <TbBrandFramerMotion />,
          <BiLogoTailwindCss />,
        ],
      },
      // {
      //   title: "Back-End",
      //   _icons: [
      //     <FaNodeJs />,
      //     <SiExpress />,
      //     <SiMongodb />,
      //     <FaAngular />,
      //     <SiDotnet />,
      //     <TbSql />,
      //   ],
      // },
      {
        title: "UI/UX Design",
        _icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Senior Front-end developer",
        company: "Link Development",
        stage: "2022 - 2023",
        url: "https://linkdevelopment.com/",
      },
      {
        //2021 - 2022 iti, 2020 - 2021 mts
        title: "Full-Stack developer",
        company: "ITI",
        stage: "2021 - 2022",
        url: "https://iti.gov.eg/iti/home",
      },
      {
        title: "Front-end developer",
        company: "Nafeza",
        stage: "2020 - 2021",
        url: "https://www.nafeza.gov.eg/en",
      },
    ],
  },
  {
    title: "credentials && awards",
    info: [
      {
        title: "Professional web development & business intelligence diploma",
        company: "ITI",
        url: "https://iti.gov.eg/iti/home",
        stage: "2022",
      },
      {
        title: "Advanced frontend nano-degree",
        stage: "2021",
        company: "EgFWD",
        url: "https://egfwd.com/",
      },
      {
        title: "Web Development MEAN Stack",
        stage: "2018",
        company: "NTI",
        url: "https://www.nti.sci.eg/",
      },
      // {
      //   title: "Microsoft certified dynamics 365 developer (CRM) ",
      //   company: "Microsoft",
      //   stage: "2023",
      //   url: "https://www.nti.sci.eg/",
      // },
    ],
  },
];

// Service data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description:
      "Brand is just a perception, and perception will match reality over time.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description:
      "Design can be art. Design can be aesthetics. Design is so simple, that's why it is so complicated.",
  },
  {
    icon: <RxDesktop />,
    title: "Front-End",
    description:
      "Clean code always looks like it was written by someone who cares.",
  },
  {
    icon: <BiSolidCoinStack />,
    title: "Back-End",
    description:
      "Quality is a product of a conflict between programmers and testers.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description:
      "One of the often-overlooked SEO opportunities has to do with images.",
  },
];

// Work data
export const workSlides = {
  slides: [
    {
      title: "title",
      path: "/car.png",
      url: "google.com",
    },
    {
      title: "title",
      path: "/metaverse.png",
      url: "https://www.google.com",
    },
    {
      title: "title",
      path: "/reads.png",
      url: "google.com",
    },
  ],
};

// testimonial data
export const testimonialData = [
  {
    image: "/t-avt-1.png",
    name: "مصعب الراجحى",
    position: "عـمـيل",
    message:
      "السلام عليكم تعاملت مع الكثيرين وكانوا ممتازين ولكن مقدم هذة الخدمة مختلف فهو انسان عملي بمعنى الكلمة متواجد بشكل دائم صبور لابعد الحدود ضغطت علية في العمل وطالبتة باكثر مما استحق ورغم ذلك تفهم الموقف ولم يتذمر بل انه قدم لي هدية اضافية لذلك اشكرة امام الجميع وانصح الجميع بالتعامل معه اخي العزيز شكرا لك على كل ماقدمته لي ولا شك اني سأتعامل معك مرات ومرات تحياتي",
  },
  {
    image: "/t-avt-2.png",
    name: "فـوزى مُعجم",
    position: "عـمـيل",
    message:
      "في الحقيقة كنت متخوفًا من العمل مع إسلام خاصةً أنه لم يقم بأي مشروع أو خبرة في مستقل، لكني والله وجدته إنسانًا مبدعًا وصبورًا ومحترفًا، ويعرف ماذا يفعل، سيكون لي تعامل معه في القريب الآجل وأنصح به بشدة. خاصةً أنه يستجيب للتعديلات التي تطلبها دون كلل أو ملل شكرًا شكرًا لك يا إسلام وأرجو لك مزيدًا من النجاح. الله يوفقك.",
  },
  {
    image: "/t-avt-3.png",
    name: "عـبد العـليم",
    position: "عـمـيل",
    message:
      "شكرا عزيزي اسلام كانت الحلول المقترحة منكم ذات فائدة كبيرة وانجاز المشروع في زمن قياسي وتتواصل بشكل سريع في جميع مراحل المشروع.شكرا لمجهودك.",
  },
];
