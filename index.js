document
  .getElementById("menu_section_open_btn")
  .addEventListener("click", () => {
    document.getElementById("menu_section").style.top = "0%";
  });
document
  .getElementById("menu_section_close_btn")
  .addEventListener("click", () => {
    document.getElementById("menu_section").style.top = "100%";
  });

function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  const local_time_spans = document.querySelectorAll("#local_time");
  local_time_spans.forEach((o) => {
    o.innerText = `${hours}:${minutes}:${seconds}`;
  });
}
updateTime();
setInterval(updateTime, 1000);

const menu_links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Blogs",
    path: "/blogs",
  },
  {
    title: "About Me",
    path: "#about",
  },
  {
    title: "What I Bring",
    path: "#skillset",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
const menuLinksUl = document.getElementById("menu_links");
menu_links.forEach(({ title, path }) => {
  const a = document.createElement("a");
  a.href = `${path}`;
  a.innerText = title;
  a.classList =
    "text-white text-5xl lg:text-[120px] font-semibold uppercase leading-[90px] hover:opacity-[0.6]";
  a.addEventListener("click", () => {
    document.getElementById("menu_section").style.top = "100%";
  });
  menuLinksUl.append(a);
});
document.getElementById("rights_text").innerText =
  `@${new Date().getFullYear()} All Rights Reserved `;

const social_links = [
  {
    key: "linkedin",
    title: "Linkedin",
  },
];
document.querySelectorAll(".social_links").forEach((span) => {
  const link = social_links.find((o) => o.key === span.id);
  span.classList = "flex gap-1 items-center";
  span.innerHTML = `<a
    href=${link.href}
                class="block  text-white text-lg font-semibold uppercase after:content-[''] relative after:w-[0%] hover:after:w-full after:transition-all after:duration-300 after:ease-in-out after:h-[3px] after:absolute after:bottom-0 after:left-0 after:bg-white"
              >
                ${link.title}
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>`;
});
document.querySelectorAll("#contact_btn").forEach((span) => {
  span.classList =
    "border border-white py-2 px-3 lg:py-3 lg:px-5 rounded-full font-semibold overflow-hidden relative before:rounded-full before:absolute before-z-[-1] before:top-[100%] hover:before:top-[0%] before:text-black before:transition-all before:duration-150 before:ease-in-out before:left-0 before:content-[Contact Now] before:text-black before:h-full before:w-full before:bg-white text-sm lg:text-lg";
  span.innerText = "Contact Now";
  span.addEventListener("click", () => {
    document.getElementById("contact_form_section").style.top = 0;
  });
});
document
  .getElementById("contact_section_close_btn")
  .addEventListener("click", () => {
    document.getElementById("contact_form_section").style.top = "100%";
  });
document.getElementById("back_to_top_btn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
