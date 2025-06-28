import { defineConfig } from "vitepress";

export default defineConfig({
    title: "DevScout",
    description:
        "DevScout - Conecte-se com oportunidades ideais para sua carreira e acelere seu processo seletivo com candidaturas estratégicas. Para desenvolvedores, arquitetos, designers, product managers e todos os profissionais.",
    themeConfig: {
        nav: [
            { text: "Início", link: "/" },
            { text: "Tutoriais", link: "/tutorials/main" },
            { text: "Changelog e Roadmap", link: "/changelog-and-roadmap" },
            { text: "Planos", link: "/plans" },
            {
                text: "Informações técnicas",
                link: "/technical-informations/main",
            },
        ],

        sidebar: [
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
