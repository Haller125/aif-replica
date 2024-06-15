export type forumTopic = {
    category: string;
    image: string;
    discussions: string[];
}

export type forumTopicsData = {
    [key:string]: forumTopic[]
}

export const forumTopicsData = {
    "en":[
            {
                category: "Foreign policy & International security",
                image: "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/kM3x1CgIavWwY9cHzyBZLNH2WBE73pXmOi7gc9qF.webp",
                discussions: [
                    "Rebuilding Tomorrow: Diplomacy in the Aftermath of Conflict",
                    "Economic Chess: Navigating Geoeconomics, Supply Chains, and Trade Barriers",
                    "Beyond Boundaries: Toward Global Nuclear Disarmament and Arms Control",
                    "Mind the Gap: AI, Disinformation, and the Battle Against Polarization",
                    "Middle Powers: Charting a Third Way in International Affairs",
                    "Parliamentary Diplomacy Unleashed: A Discussion on its Merits",
                    "Summit 2024: Decoding Critical Choices Shaping Our Future"
                ]

            },
            {
                category: "International development and sustainability",
                image: "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/j9zXkbZOgw5hDT0N0UQDyGw6n5hAY1nidKGFRiAV.webp",
                discussions: [
                    "Global Mobility: The Complex Challenges of Migration",
                    "Grain Drain: Tacking Food Insecurity Amid Global Shocks",
                    "Converging with OECD standards for a more Inclusive, Innovative and Dynamic Economy",
                    "Advancing Towards 2030: Accelerating Sustainable Development Goals",
                    "Central Asia United: Regional Cooperation for a Shared Future",
                    "Learning Reloaded: The Future of Education",
                    "The OECD's Global Role: Working with Members and Partners for Sustainable, Shared Prosperity"
                ]
            },
            {
                category: "Energy & Climate change",
                image: "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/JWYlu7Wv2g3UHAvewtkfOagSVb05XPvD6o5t4sxx.webp",
                discussions: [
                    "Renewables Rising: Towards a Net Zero Energy Landscape",
                    "Energy Shifts: Navigating Insecurity and the Just Transition",
                    "Critical Resources: Navigating Raw Materials in Demand",
                    "Nuclear Dynamics: Energy, Safety, and Civil Applications",
                    "ESG Imperative: Shaping the Future of Responsible Mining",
                    "Hydrogen Power: Green Energy Systems for a Sustainable Future",
                    "Liquid Assets: Addressing the Global Challenge of Water Insecurity"
                ]
            },
            {
                category: "Economy & Finance",
                image: "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/Vp4ZJHQDMFAiTVLsHjAJZqW2H3sFDMkCYOqHWBvC.webp",
                discussions: [
                    "Preparing for the Future: Industrialization in the Age of AI",
                    "Tomorrow’s Workplace: Navigating the Future of Work & the Creative Economy",
                    "Connecting Horizons: New Supply Chains and Global Connectivity",
                    "Investment Frontiers: Capital Flows in Emerging Markets",
                    "Promoting Growth: Innovation & Intellectual Property",
                    "Urban Development: Smart Cities & Sustainability",
                    "Empowering Change: Women and Global Economic Growth"
                ]
            }
    ],
    "ru": [
        {
            "category": "Внешняя политика и международная безопасность",
            "image": "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/kM3x1CgIavWwY9cHzyBZLNH2WBE73pXmOi7gc9qF.webp",
            "discussions": [
                "Строительство завтрашнего дня: дипломатия после конфликта",
                "Экономические шахматы: маневрирование в геоэкономике, цепочках поставок и торговых барьерах",
                "За пределами границ: к глобальному ядерному разоружению и контролю за вооружениями",
                "Внимание на разрыв: ИИ, дезинформация и борьба с поляризацией",
                "Средние державы: выбор третьего пути в международных делах",
                "Разговор о парламентской дипломатии: обсуждение её достоинств",
                "Саммит 2024: расшифровка критических выборов, формирующих наше будущее"
            ]
        },
        {
            "category": "Международная разработка и устойчивость",
            "image": "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/j9zXkbZOgw5hDT0N0UQDyGw6n5hAY1nidKGFRiAV.webp",
            "discussions": [
                "Глобальная мобильность: сложные вызовы миграции",
                "Утечка зерна: борьба с продовольственной неустойчивостью на фоне глобальных шоков",
                "Сближение с стандартами ОЭСР для более инклюзивной, инновационной и динамичной экономики",
                "Движение к 2030 году: ускорение достижения целей устойчивого развития",
                "Центральная Азия объединяется: региональное сотрудничество для общего будущего",
                "Обучение Reloaded: будущее образования",
                "Глобальная роль ОЭСР: сотрудничество с членами и партнерами в интересах устойчивого, общего процветания"
            ]
        },
        {
            "category": "Энергия и изменение климата",
            "image": "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/JWYlu7Wv2g3UHAvewtkfOagSVb05XPvD6o5t4sxx.webp",
            "discussions": [
                "Восход возобновляемых источников: к энергетическому ландшафту с нулевым выбросом",
                "Перемены в энергетике: навигация по нестабильности и справедливый переход",
                "Критические ресурсы: навигация по востребованным сырьевым материалам",
                "Ядерная динамика: энергия, безопасность и гражданские приложения",
                "Императив ESG: формирование будущего ответственной добычи",
                "Энергия водорода: зеленые энергетические системы для устойчивого будущего",
                "Жидкие активы: решение глобальной проблемы водной неустойчивости"
            ]
        },
        {
            "category": "Экономика и финансы",
            "image": "https://aif-24-bucket.s3.eu-north-1.amazonaws.com/forum-topic/Vp4ZJHQDMFAiTVLsHjAJZqW2H3sFDMkCYOqHWBvC.webp",
            "discussions": [
                "Подготовка к будущему: индустриализация в эпоху ИИ",
                "Рабочее место завтрашнего дня: навигация по будущему труда и творческой экономики",
                "Соединение горизонтов: новые цепочки поставок и глобальная связность",
                "Инвестиционные границы: потоки капитала в развивающихся рынках",
                "Способствование росту: инновации и интеллектуальная собственность",
                "Городское развитие: умные города и устойчивость",
                "Содействие изменениям: женщины и глобальный экономический рост"
            ]
        }
    ]
}

