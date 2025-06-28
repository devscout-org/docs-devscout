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
                text: "Tutoriais",
                items: [
                    {
                        text: "Se cadastrando na plataforma",
                        link: "/tutorials/registering",
                    },
                    {
                        text: "Configurando a busca automática",
                        link: "/tutorials/automatic-search",
                    },
                    {
                        text: "Entrando em contato com o suporte",
                        link: "/tutorials/contact-support",
                    },
                    {
                        text: "Dicas e métodos para candidaturas",
                        link: "/tutorials/tips-and-methods-for-applications",
                    },
                ],
            },
            {
                text: "Changelog e Roadmap",
                link: "/changelog-and-roadmap",
            },
            {
                text: "Planos",
                link: "/changelog-and-roadmap",
            },
            {
                text: "Informações técnicas",
                items: [
                    {
                        text: "Detalhes técnicos da DevScout",
                        link: "/technical-informations/main",
                    },
                    {
                        text: "Limites aplicáveis na plataforma",
                        link: "/technical-informations/limits",
                    },
                    {
                        text: "Manutenções programadas e disponibilidade",
                        link: "/technical-informations/availability",
                    },
                ],
            },
        ],

        socialLinks: [
            { icon: "linkedin", link: "https://github.com/vuejs/vitepress" },
        ],
    },
});
