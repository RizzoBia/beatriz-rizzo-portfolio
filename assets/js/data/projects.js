export const PROJECTS_DATA = {
    p1: {
        id: "p1",
        title: "Sistema Dedo Duro – Plataforma Full Stack de Marketplaces & Estoque",
        category: "Desenvolvimento Full Stack / SaaS & Dados",
        filterCategories: ["fullstack", "backend", "frontend", "data"],
        image: "assets/img/project1.png",
        fallbackImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
        resume: "Plataforma web Full Stack para gestão de marketplaces, conciliação automática de estoque, pedidos e sell-out com React, APIs REST, pipelines de dados, PostgreSQL e Supabase.",
        overview: "O Sistema Dedo Duro é uma aplicação Full Stack completa voltada à gestão de operações em marketplaces (Mercado Livre, Amazon, Shopee, Magalu), integrando front-end reativo em React, APIs de sincronização, pipelines de tratamento de dados (ETL/Pandas), banco de dados PostgreSQL/Supabase e conciliação automatizada de estoque, pedidos e faturamento.",
        context: "Operações de e-commerce multicanal com alto volume de pedidos, necessidade de controle de estoque em tempo real, precificação e conciliação operacional e financeira.",
        problem: "Informações descentralizadas em formatos distintos entre múltiplos marketplaces, planilhas e ERPs dificultavam a gestão de pedidos, conciliação financeira/estoque e análise de sell-out.",
        solution: "Desenvolvimento de uma aplicação Full Stack com interface em React, APIs REST e pipelines de ingestão/tratamento em camadas (Staging, Silver e Gold), persistência em PostgreSQL/Supabase e rotinas automatizadas de conciliação.",
        role: "Desenvolvimento Full Stack ponta a ponta: construção da interface em React, criação de endpoints e serviços back-end, integração com APIs de marketplaces, pipelines de tratamento/deduplicação em Python (Pandas) e modelagem no PostgreSQL/Supabase.",
        architecture: [
            "Integrações de Marketplaces & Planilhas",
            "Serviços Back-end, APIs REST & Ingestão (ETL)",
            "Tratamento, Regras de Negócio & Conciliação (Staging / Silver / Gold)",
            "Banco de Dados (PostgreSQL / Supabase)",
            "Aplicação Web Front-end (React) & Dashboards"
        ],
        dataFlow: [],
        tech: ["React", "TypeScript", "Python", "FastAPI", "Pandas", "PostgreSQL", "Supabase", "Power BI"],
        challenges: "Garantir alta performance, segurança e confiabilidade na sincronização de mais de 15.000 SKUs e 100.000 registros históricos respeitando os limites de requisição das APIs externas.",
        decisions: [
            "Arquitetura desacoplada entre o Front-end em React e as APIs de processamento e integração.",
            "Uso de PostgreSQL e Supabase para garantir integridade transacional, segurança e consultas rápidas em tempo real."
        ],
        results: [
            "Consolidação e sincronização de mais de 100.000 registros operacionais e históricos.",
            "Padronização e gestão automatizada de mais de 15.000 SKUs integrados.",
            "Automação do controle de estoque, sell-out e reposição multicanal."
        ],
        learnings: "Evolução na arquitetura de sistemas Full Stack voltados a marketplaces, tratando concorrência, integração de APIs complexas e experiência de usuário fluida.",
        screenshots: [],
        demoUrl: "https://dedo-duro-portfolio.vercel.app",
        repoUrl: "",
        isPrivate: false,
        confidentialityNotice: ""
    },
    p2: {
        id: "p2",
        title: "Simpliss – Sistemas Web, NFSe & Ecossistema Analítico",
        category: "Full Stack (.NET / C#) & Governança BI",
        filterCategories: ["fullstack", "backend"],
        image: "assets/img/project2.png",
        fallbackImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        resume: "Desenvolvimento e evolução de sistemas web em C#, .NET Core, ASP.NET Core (MVC/Web Forms), SQL Server e PostgreSQL para gestão tributária (NFSe), integrado à infraestrutura corporativa de Power BI.",
        overview: "Atuação Full Stack no desenvolvimento, manutenção e refatoração de sistemas web corporativos e de gestão tributária municipal (padrão SIMPLISS de NFSe), aliada à administração completa da infraestrutura de Power BI e automação de indicadores estratégicos.",
        context: "Sistemas críticos de gestão tributária municipal (NFSe) e plataformas internas que exigem alta disponibilidade, segurança e performance.",
        problem: "Necessidade de evoluir sistemas legados e modernos em .NET, resolver incidentes complexos sem indisponibilidade e estruturar uma governança centralizada de indicadores gerenciais e operacionais.",
        solution: "Manutenção evolutiva e refatoração de aplicações em C#, .NET Core, ASP.NET Core (MVC/Web Forms), JavaScript e Bootstrap conectadas a SQL Server e PostgreSQL, além da estruturação completa de workspaces, automação de datasets e relatórios interativos no Power BI.",
        role: "Desenvolvimento Full Stack (C#/.NET, JS, Bootstrap, SQL Server, PostgreSQL), suporte técnico N2/N3, refatoração de código legado, gestão de backlog Kanban e administração integral do ambiente Power BI (Power Query, DAX e governança).",
        architecture: [
            "Aplicações Web ASP.NET Core (MVC / Web Forms) & Bootstrap",
            "Serviços e Regras de Negócio em C# / .NET Core (NFSe)",
            "Bancos de Dados Relacionais (SQL Server & PostgreSQL)",
            "Infraestrutura Power BI (Datasets Automatizados, DAX & Governança)"
        ],
        dataFlow: [],
        tech: ["C#", ".NET Core", "ASP.NET Core", "MVC / Web Forms", "SQL Server", "PostgreSQL", "JavaScript", "Bootstrap", "Power BI", "DAX"],
        challenges: "Evoluir e refatorar módulos legados de sistemas fiscais/tributários mantendo 100% de compatibilidade e performance nas operações municipais.",
        decisions: [
            "Refatoração progressiva de consultas críticas no SQL Server e PostgreSQL para reduzir o tempo de resposta das aplicações web.",
            "Implementação de governança de permissões e agendamentos automatizados nos workspaces corporativos."
        ],
        results: [],
        learnings: "",
        screenshots: [],
        demoUrl: "https://beatriz-rizzo.vercel.app/simpliss",
        repoUrl: "",
        isPrivate: true,
        confidentialityNotice: "Projeto corporativo privado. As informações apresentadas foram adaptadas para preservar dados, processos e informações confidenciais da empresa."
    },
    p3: {
        id: "p3",
        title: "MedAnalytics – Aplicação Web Full Stack de Gestão Clínica",
        category: "Full Stack Web (React & Node.js)",
        filterCategories: ["fullstack", "frontend", "backend"],
        image: "assets/img/project3.png",
        fallbackImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
        resume: "Aplicação web Full Stack com acompanhamento em tempo real de fluxos operacionais de pronto-socorro (Protocolo de Manchester), atendimento e gestão financeira.",
        overview: "Aplicação web interativa desenvolvida com React, Tailwind CSS e Node.js para gestão hospitalar, unindo interface moderna de alta performance, gerenciamento de filas por classificação de risco e painel financeiro integrado.",
        context: "Sistemas de gestão clínica que demandam interfaces ágeis, responsivas e atualização dinâmica para tomada de decisão operacional.",
        problem: "Necessidade de centralizar o acompanhamento de atendimento (Protocolo de Manchester), ocupação e indicadores financeiros em uma aplicação web intuitiva.",
        solution: "Desenvolvimento de uma aplicação Full Stack com front-end componentizado em React + Tailwind CSS, visualização interativa com Recharts e API REST em Node.js.",
        role: "Arquitetura e desenvolvimento do Front-end em React, estilização responsiva com Tailwind CSS e integração com serviços REST em Node.js.",
        architecture: [
            "Interface Reativa (React + Tailwind CSS)",
            "Gerenciamento de Estado & Gráficos (Recharts)",
            "API RESTful (Node.js)",
            "Camada de Dados Clínicos e Financeiros"
        ],
        dataFlow: [],
        tech: ["React", "JavaScript", "Tailwind CSS", "Node.js", "Recharts", "REST API"],
        challenges: "",
        decisions: [],
        results: [],
        learnings: "",
        screenshots: [],
        demoUrl: "https://beatriz-rizzo.vercel.app/health",
        repoUrl: "",
        isPrivate: false,
        confidentialityNotice: "Aplicação demonstrativa desenvolvida para evidenciar arquitetura Front-end e Full Stack em sistemas de gestão."
    }
};
