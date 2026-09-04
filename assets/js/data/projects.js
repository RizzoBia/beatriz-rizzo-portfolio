export const PROJECTS_DATA = {
    p1: {
        id: "p1",
        title: "Sistema Dedo Duro – Gestão de Estoque e Sell-out",
        category: "Engenharia de Dados / Full Stack",
        filterCategories: ["data", "backend"],
        image: "assets/img/project1.png",
        fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        resume: "Sistema inteligente de monitoramento e conciliação de estoque automático integrado com planilhas de vendas na nuvem, Supabase e painel React.",
        overview: "O Sistema Dedo Duro é uma solução completa para conciliação e gestão de estoque de e-commerce, integrando dados de diversos marketplaces para fornecer uma visão unificada e precisa do sell-out corporativo.",
        context: "Consolidação de vendas e estoque provenientes de múltiplos marketplaces, planilhas e fontes distintas.",
        problem: "Dados distribuídos em formatos diferentes dificultavam a conciliação de estoque, análise de sell-out, identificação de divergências e acompanhamento de cobertura.",
        solution: "Construção de um fluxo de ingestão, tratamento, padronização e disponibilização de dados, integrando pipelines, banco de dados, APIs e visualização analítica.",
        role: "Ingestão de dados, tratamento e padronização, deduplicação, modelagem, integração de APIs, desenvolvimento de rotinas em Python, endpoints e apoio na visualização.",
        architecture: [
            "Marketplaces e planilhas",
            "Ingestão",
            "Staging",
            "Tratamento",
            "Silver",
            "Modelagem analítica",
            "API",
            "Dashboard ou aplicação"
        ],
        dataFlow: [],
        tech: ["Python", "Pandas", "FastAPI", "SQL Server", "React", "Power BI", "Supabase"],
        challenges: "Lidar com a inconsistência de dados provenientes de planilhas manuais e o rate-limit das APIs de terceiros. A normalização exigiu a construção de esquemas rigorosos de validação.",
        decisions: [
            "Utilização de Pandas para processamento eficiente em memória antes da persistência no banco relacional.",
            "Adoção de uma arquitetura baseada em camadas (Medallion) para garantir a governança e qualidade dos dados em cada etapa."
        ],
        results: [], // [PENDENTE: Aguardando métricas reais da Beatriz]
        learnings: "Aprofundamento na construção de pipelines de dados eficientes e na orquestração de APIs assíncronas para aplicações Full Stack focadas em Analytics.",
        screenshots: [], // [PENDENTE: Inserir telas reais ou anonimizadas]
        demoUrl: "https://dedo-duro-portfolio.vercel.app",
        repoUrl: "", // [PENDENTE: Não há repositório público informado]
        isPrivate: false,
        confidentialityNotice: ""
    },
    p2: {
        id: "p2",
        title: "Simpliss Analytics API & Painel",
        category: "Back-end / Business Intelligence",
        filterCategories: ["backend", "bi"],
        image: "assets/img/project2.png",
        fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        resume: "Painéis integrados com C# .NET Core e Power BI para visualização inteligente de indicadores financeiros de projetos e automação de permissões.",
        overview: "Integração robusta focada em organizar os indicadores financeiros de projetos, garantindo que o C-Level tivesse acesso seguro e restrito às informações vitais da empresa. Destaque para o desenvolvimento de um painel interativo no Power BI com o mapa do Brasil, onde o usuário poderia filtrar por estado e município, com tratamento inteligente de visualização condicional para municípios sem dados correspondentes.",
        context: "Integração entre APIs corporativas, bancos de dados e relatórios analíticos dinâmicos.",
        problem: "Necessidade de organizar indicadores financeiros e operacionais, automatizar permissões e disponibilizar dados geográficos de forma segura e interativa.",
        solution: "Desenvolvimento e refatoração de APIs em C#/.NET, integração com SQL Server e PostgreSQL, e construção de relatórios em Power BI (incluindo navegação geoespacial inteligente).",
        role: "Desenvolvimento back-end, refatoração de APIs, modelagem de banco, integração de dados, automação de datasets, implementação de regras de negócio e dashboards avançados no Power BI.",
        architecture: [
            "Sistemas Corporativos Legados",
            "Microserviços em .NET Core",
            "Bancos Transacionais (PostgreSQL/SQL Server)",
            "Dataflow e Datasets no Power BI",
            "Painéis Executivos (Visualização Geoespacial)"
        ],
        dataFlow: [],
        tech: ["C#", ".NET Core", "ASP.NET Core", "SQL Server", "PostgreSQL", "Power BI", "DAX"],
        challenges: "Refatorar sistemas de relatórios legados sem causar indisponibilidade, enquanto as novas rotinas e integrações eram homologadas.",
        decisions: [
            "Uso extensivo do Entity Framework e LINQ para otimização de consultas pesadas e complexas no SQL Server."
        ],
        results: [],
        learnings: "",
        screenshots: [], // [PENDENTE: Painel ou diagrama anonimizado]
        demoUrl: "https://beatriz-rizzo.vercel.app/simpliss",
        repoUrl: "",
        isPrivate: true,
        confidentialityNotice: "Projeto corporativo privado. As informações apresentadas foram adaptadas para preservar dados, processos e informações confidenciais da empresa."
    },
    p3: {
        id: "p3",
        title: "MedAnalytics Clínico & BI",
        category: "Web Full Stack / Health Analytics",
        filterCategories: ["frontend", "backend", "bi"],
        image: "assets/img/project3.png",
        fallbackImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
        resume: "Plataforma de gestão com acompanhamento em tempo real de fluxos de pronto-socorro e finanças em hospitais e clínicas.",
        overview: "Um painel demonstrativo desenvolvido para provar a aplicação prática de conceitos de Health Analytics e a viabilidade de dashboards web com alta interatividade e performance.",
        context: "Aplicação para visualização de fluxos clínicos, classificação de risco e indicadores financeiros.",
        problem: "Necessidade de organizar e apresentar dados de pronto-socorro de forma clara e interativa.",
        solution: "Desenvolvimento de uma interface analítica com dashboards e componentes de visualização.",
        role: "Construção do front-end e estruturação da visualização de dados via gráficos.",
        architecture: [
            "Mock de Dados Clínicos",
            "Serviço REST (Node.js)",
            "Front-End (React + Tailwind)",
            "Visualização (Recharts)"
        ],
        dataFlow: [],
        tech: ["React", "Tailwind CSS", "Recharts", "Node.js"],
        challenges: "",
        decisions: [],
        results: [],
        learnings: "",
        screenshots: [],
        demoUrl: "https://beatriz-rizzo.vercel.app/health",
        repoUrl: "",
        isPrivate: false,
        confidentialityNotice: "Projeto demonstrativo desenvolvido para aplicação prática de conceitos de Health Analytics."
    }
};
