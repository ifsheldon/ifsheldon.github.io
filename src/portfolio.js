/* Change this file to get your personal Porfolio */

//SEO Related settings
const seo = {
  title: "Feng Liang's Metaverse",
  description:
    "A CGer, a CVer, a dreamer who wants to re-invent Doraemon in MR",
  og: {
    title: "Feng Liang's Metaverse",
    type: "website",
    url: "http://fengliang.io/",
  },
};

//Home Page
const greeting = {
  title: "Feng Liang",
  logo_name: "Feng Liang",
  nickname: "Maple",
  subTitle: "A CGer, a CVer, a dreamer who wants to re-invent Doraemon in MR",
  githubProfile: "https://github.com/ifsheldon",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ifsheldon",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/macguffinfengliang",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:feng.liang@kaust.edu.sa",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Computer Vision",
      fileName: "cv",
      skills: [
        "⚡ Working on the instersetion of Computer Vision and Computer Graphics",
        "⚡ Integrating neural networks into computer graphics systems",
        "⚡ Experience of managing CV projects",
      ],
      softwareSkills: [
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Computer Graphics and Scientific Visualization",
      fileName: "cg_scivis",
      skills: [
        "⚡ Working on neural rendering",
        "⚡ Working on WebGPU-based renderers and visualization",
        "⚡ Working on applications of differentiable rendering",
      ],
      softwareSkills: [
        {
          skillName: "Rust",
          fontAwesomeClassname: "logos:rust",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "OpenGL",
          fontAwesomeClassname: "logos-opengl",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "CUDA",
          fontAwesomeClassname: "vscode-icons:file-type-cuda",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "King Abdullah University of Science and Technology",
      subtitle: "MS in Computer Science (Computer Graphics and Visualization)",
      logo_path: "kaust-logo.png",
      alt_name: "KAUST",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Focus: Computer Graphics, Computer Vision and Simulation.",
        "⚡ I worked on a differentiable TEM simulator, intending to create new ways to reconstruction and explore new applications.",
        "⚡ I also look forward to develop MR applications for visualization.",
      ],
      website_link: "https://www.kaust.edu.sa/en",
    },
    {
      title: "Southern University of Science and Technology, China",
      subtitle: "BS in Computer Science and Technology",
      logo_path: "sustech.png",
      alt_name: "SUSTech",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Distributed Systems and Computer Graphics.",
      ],
      website_link: "https://www.sustech.edu.cn",
    },
    {
      title: "National University of Singapore",
      subtitle: "CS Summer Workshop 2019 - Real-time Rendering",
      logo_path: "nus_logo.png",
      alt_name: "NUS",
      duration: "2019.6 - 2019.8",
      descriptions: [
        "⚡ I have studied basics of photorealistic rendering of Computer Graphics like OpenGL and raytracing.",
      ],
      website_link: "https://nus.edu.sg",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://coursera.org/share/1d79e7af7734b87a08c8474ac5f36d1f",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Career",
  subtitle: "Work and Internship",
  description:
    "I am always excited about the advancements on AR/MR. I am co-founding a secrete AR company. Look forward to collaborations with YOU",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Engineer Lead",
          company: "Shanghai Gempoll Ltd.",
          company_url: "https://www.gempoll.com/",
          logo_path: "gempoll_logo.svg",
          duration: "Feb 2023 - Now",
          location: "Shanghai, China",
          description:
            "Build AI R&D team from 0 to 1. Plan and build products, platforms and solutions with LLM and AIGC along with existing bussiness and enterprise future outlook.",
          color: "#6dd2fe",
        },
        {
          title: "Cofounder",
          company: "secrete...for now",
          company_url: "https://fengliang.io/",
          logo_path: "confidential.jpg",
          duration: "March 2022 - ?",
          location: "Shanghai, China",
          description:
            "Build AI R&D team from 0 to 1. Plan and build products, platforms and solutions with LLM and AIGC along with existing bussiness and enterprise future outlook.",
          color: "#6dd2fe",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "System Design and Planning Intern",
          company: "Huawei",
          company_url: "https://www.huawei.com/",
          logo_path: "huawei.png",
          duration: "Jul 2019 - Aug 2019",
          location: "Shanghai, China",
          description:
            "Due to my confidentiality agreement with Huawei, I cannot say more about this except that the internship is AR-related and it relates to Cyberverse.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have got many TODOs and WIPs, many of which are interesting! Looking forward to collaborating with YOU!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "feng_photo.png",
    hello_image_path: "feng1.png",
    description:
      "Feel free to contact me. Looking forward to seeing your brilliant ideas on AR/MR, CG and CV!",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "Logs for my ideas and nonsense",
    link: "https://fengliang.io/EpisodeMacguffin",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Visual Computing Center, KAUST, Thuwal, Saudi Arabia",
    locality: "Thuwal",
    country: "SA",
    region: "Jeddah",
    postalCode: "23955-6900",
    streetAddress: "KAUST",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/kF6yeWzv9KZBfEnr5",
  },
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
