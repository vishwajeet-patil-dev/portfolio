const cardsData = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" class="lucide lucide-lightbulb"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12v1a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-1a7 7 0 0 0-4-12z"/></svg>`,
    title: "Problem Solver",
    description:
      "Designs logical, real-world solutions focused on clarity and performance.",
    indicators: [1, 0.3, 0.3],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" class="lucide lucide-trending-up"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
    title: "Growth-Driven",
    description:
      "Continuously upgrading skills and embracing new technologies with curiosity.",
    indicators: [1, 1, 0.3],
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1" class="lucide lucide-rocket"><path d="M4.5 14.5 3 21l6.5-1.5"/><path d="M15 9l-6 6"/><path d="M16 8c1.7 1.7 4.3 1.7 6 0 1.7-1.7 1.7-4.3 0-6-1.7-1.7-4.3-1.7-6 0-1.7 1.7-1.7 4.3 0 6z"/><path d="m9 12-1 4 4-1"/></svg>`,
    title: "Impact-Oriented Builder",
    description:
      "Focused on creating meaningful, value-driven software solutions that scale.",
    indicators: [1, 1, 1],
  },
];

const container = document.getElementById("cards-container");

cardsData.forEach((card) => {
  const cardDiv = document.createElement("div");
  cardDiv.className =
    "flex-1 py-[50px] px-[40px] flex flex-col items-center gap-[36px] border border-border";

  const indicatorsHTML = card.indicators
    .map(
      (opacity) =>
        `<span class="aspect-square w-[10px] rounded-full bg-white block opacity-[${opacity}]"></span>`,
    )
    .join("");

  cardDiv.innerHTML = `
      <div class="flex gap-1">
        ${indicatorsHTML}
      </div>
      <div class="flex flex-col items-center gap-[16px]">
        <div class="flex flex-col gap-[24px] items-center">
          ${card.icon}
          <p class="block text-center text-2xl font-semibold">${card.title}</p>
        </div>
        <p class="block text-center text-lg normal-case text-gray leading-none">
          ${card.description}
        </p>
      </div>
    `;

  container?.appendChild(cardDiv);
});
const skills = [
  { title: "DSA" },
  { title: "Javascript" },
  { title: "Python" },
  { title: "Java" },
  { title: "Full Stack Development" },
  { title: "System Design" },
  { title: "DevOps" },
  { title: "Embedded Programing" },
];

const skills_section = document.getElementById("skills_section");
skills.forEach(({ title }) => {
  const div = document.createElement("div");
  div.classList =
    "h-[180px] min-w-[240px] border border-border rounded-[10px] flex items-center justify-center";
  const p = document.createElement("p");
  p.classList = "text-xl font-semibold";
  p.innerText = title;
  div.appendChild(p);
  skills_section?.appendChild(div);
});
const skillsData = [
  {
    title: "Data Structures & Algorithms",
    description:
      "Optimizing problem-solving skills and mastering core programming concepts.",
    image: "./assets/images/dsa.jpg", // Replace with actual image path
    subSkills: [
      "Arrays / Linked Lists",
      "Stacks / Queues",
      "Trees / Graphs",
      "Recursion / Backtracking",
      "Dynamic Programming",
    ],
  },
  {
    title: "Full Stack Development",
    description: "Creating scalable web applications from front to back.",
    image: "./assets/images/fullstack.jpg", // Replace with actual image path
    subSkills: [
      "React.js / Next.js",
      "Node.js / Express.js",
      "MongoDB / Mongoose",
      "REST APIs / Authentication",
      "Tailwind CSS / UI Design",
    ],
  },
  {
    title: "System Design",
    description: "Designing scalable and maintainable system architectures.",
    image: "./assets/images/systemdesign.jpg", // Replace with actual image path
    subSkills: [
      "High-Level Design (HLD)",
      "Low-Level Design (LLD)",
      "Database Design",
      "Scalability & Caching",
      "Load Balancing / Queues",
    ],
  },
  {
    title: "DevOps",
    description:
      "Automating, deploying, and maintaining cloud-native applications.",
    image: "./assets/images/devops.png",
    subSkills: [
      "Linux / Shell Scripting",
      "Docker / GitHub Actions",
      "CI/CD Pipelines",
      "Nginx / PM2",
      "Cloud Hosting (Render, Vercel)",
    ],
  },
  {
    title: "Computer Fundamentals",
    description: "Understanding the foundational concepts of computer science.",
    image: "./assets/images/computerfundamental.jpg", // Replace with actual image path
    subSkills: [
      "Operating System",
      "DBMS",
      "Networking",
      "OOPs Concepts",
      "Process & Memory Management",
    ],
  },
];

const skillsList = document.getElementById("skills_list");

skillsData.forEach((skill, index) => {
  const li = document.createElement("li");
  li.className =
    "flex flex-col gap-[28px] py-[28px] border-t border-border h-[101px] overflow-hidden transition-all duration-300 ease-in-out";

  li.innerHTML = `
    <div class="flex gap-[90px] flex-1 " data-index="${index}">
      <div class="flex gap-1 items-start">
        ${Array.from({ length: 5 })
          .map(
            (_, i) =>
              `<span class="aspect-square w-[10px] rounded-full bg-white block opacity-[${
                i <= index ? "1" : "0.3"
              }]"></span>`,
          )
          .join("")}
      </div>
      <div class="flex-1 flex items-center justify-between">
        <div class="flex-1">
          <p class="text-lg font-semibold normal-case tracking-[1px]">
            ${skill.title}
          </p>
          <p class="text-xs text-gray tracking-[1px]">
            ${skill.description}
          </p>
        </div>
        <div id="dropdown_Icon" class="transition-transform duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
    </div>

    <div class="ml-[164px] py-[24px] border-t border-border flex gap-[24px] items-center">
      <div class="h-[160px] w-[272px]">
        <img class="h-full w-full object-cover rounded-[10px]" src="${
          skill.image
        }" alt="" />
      </div>
      <ul class="flex flex-col gap-3">
        ${skill.subSkills
          .map(
            (sub) => `
          <li class="text-xs text-gray font-medium flex items-center gap-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
              viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-check">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <p>${sub}</p>
          </li>`,
          )
          .join("")}
      </ul>
    </div>
  `;

  skillsList.appendChild(li);
});

document.querySelectorAll("#skills_list > li").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("h-[312px]!");
    item.querySelector("#dropdown_Icon > svg").classList.toggle("rotate-180");
  });
});
const stats = [
  { title: "3", subTitle: "Years of Engineering", running: true },
  { title: "100000", subTitle: "+ Lines Of Code", running: true },
  { title: "∞", subTitle: "Passion for Building", running: false },
  // { title: 00, subTitle: "DSA Questions Solved" },
];

const stats_sections = document.getElementById("stats_sections");
stats.forEach(({ title, subTitle, running }) => {
  const span = document.createElement("span");
  span.classList = "w-[235px] block text-center flex flex-col gap-2";
  span.innerHTML = `
    <p class="stat-number text-[88px] font-semibold leading-none" data-target="${title}" data-running="${running}">0</p>
    <p class="text-xs text-gray">${subTitle}</p>
  `;
  stats_sections.appendChild(span);
});
const experiences = [
  {
    company: "Nutran ESSPods India Pvt. Ltd. ",
    role: "Software Engineer",
    duration: "July 2025 - Current",
    description:
      "As A Software Engineer responsible for implementing new features, and maintaining critical system functionality. In addition to software development, I have contributed to system engineering initiatives by enhancing deployment architectures, automating installation and configuration processes, improving infrastructure reliability, optimizing operational workflows, and supporting large-scale distributed systems. Through continuous process improvements and automation, I have helped reduce manual effort, increase system stability, and improve overall deployment efficiency.",
  },
  {
    company: "Dreams International",
    role: "MERN Stack Developer",
    duration: "Jan 2024 - Jun 2025",
    description:
      "Led both frontend and backend development, integrated payment gateways and real-time systems, mentored junior developers, and played a key role in delivering scalable SaaS products for global clients.",
  },
];

const exp_section = document.getElementById("experience-section");

const experienceCards = experiences
  .map(
    (exp) => `
      <hr class="border border-border" />

      <div class="flex flex-col gap-5">
        <h5 class="text-2xl font-semibold">${exp.company}</h5>

        <div class="flex items-center justify-between">
          <p class="text-xs tracking-[1px]">${exp.role}</p>

          <p class="text-xs text-gray tracking-[1px]">
            ${exp.duration}
          </p>
        </div>

        <p class="tracking-none text-lg text-gray normal-case">
          ${exp.description}
        </p>
      </div>
    `,
  )
  .join("");

exp_section.innerHTML = `
  <div class="flex items-center justify-between text-xs">
    <p>02</p>
    <p>//Experience</p>
    <p class="text-gray">Since 2024</p>
  </div>

  <div class="flex flex-col lg:flex-row gap-5 justify-between">
    <div>
      <h3 class="text-[34px] font-semibold">Experience</h3>
    </div>

    <div class="w-full lg:w-[61%] flex flex-col gap-5 lg:gap-[60px]">
      ${experienceCards}
      <hr class="border border-border" />
    </div>
  </div>

  <p class="text-center text-gray">
    "Just one experience so far, <br />
    but limitless drive to learn, build, and grow into the developer I aim
    to be."
  </p>
`;

const testimonials = [
  {
    name: "Manasi Naik",
    position: "UX Designer, Dreams International",
    userImage: "./assets/images/manasi.jpeg",
    quoteImage:
      "https://framerusercontent.com/images/N2H1r9tJg4F3PScC9UjipDKeY.svg",
    message:
      "Vishwajeet is a reliable and supportive team leader. He’s detail-oriented, communicates well, and brings designs to life with care.",
  },
  {
    name: "ChatGPT",
    position: "AI Agent",
    userImage: "./assets/images/chatgpt.jpg",
    quoteImage: "./assets/images/chatgptquote.png",
    message:
      "A visionary developer with strong skills, thinking, and leadership—building impactful digital solutions with precision and passion.",
  },
  {
    name: "Om Javheri",
    position: "MERN Stack Developer, Dreams International",
    userImage: "./assets/images/omjavheri.jpeg",
    quoteImage:
      "https://framerusercontent.com/images/N2H1r9tJg4F3PScC9UjipDKeY.svg",
    message:
      "Lorem ipsum dolor, lsje ushat sit amet consectetur adipisicing elit. Molestiae accusantium recusandae tenetur cupiditate dolor",
  },
];
const testimonialsContainer = document.getElementById("testimonialsContainer");

testimonials.forEach((testimonial) => {
  const card = document.createElement("div");
  card.className =
    "h-[330px] w-full min-w-[410px] border border-border rounded-[10px] py-[24px]!  overflow-hidden border-box px-[26px] flex flex-col gap-5";

  card.innerHTML = `
    <div class="flex items-center gap-[22px] ">
      <div class="h-[60px] w-[60px]">
        <img class="h-full w-full object-cover rounded-[10px]" src="${testimonial.userImage}" alt="${testimonial.name}" />
      </div>
      <div class="flex-1">
        <h6 class="text-lg font-semibold">${testimonial.name}</h6>
        <p class="text-xs font-medium text-gray">${testimonial.position}</p>
      </div>
      <div class="h-[60px] w-[60px]">
        <img class="h-full w-full object-cover rounded-[10px]" src="${testimonial.quoteImage}" alt="quote" />
      </div>
    </div>
    <div class="border border-border rounded-[10px] flex-1 flex items-center overflow-hidden px-7  border-box">
      <h5 class="text-xl font-semibold ">"${testimonial.message}"</h5>
    </div>
  `;

  testimonialsContainer.appendChild(card);
});
