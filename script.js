document.addEventListener("DOMContentLoaded", () => {
    const encodeSvg = (svg) => `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg.trim())}`;

    const buildDataVisual = (type) => {
        const visuals = {
            workflow: `
                <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#10253a" />
                            <stop offset="1" stop-color="#1e5d75" />
                        </linearGradient>
                    </defs>
                    <rect width="480" height="320" rx="32" fill="url(#bg)" />
                    <rect x="24" y="24" width="432" height="272" rx="26" fill="#ffffff" fill-opacity=".08" />
                    <text x="44" y="58" fill="#cfe8ff" font-size="16" letter-spacing="3" font-family="Arial, sans-serif">TAX WORKFLOW</text>
                    <text x="44" y="95" fill="#ffffff" font-size="28" font-weight="700" font-family="Arial, sans-serif">1065 / 1120 pipeline</text>
                    <rect x="44" y="126" width="70" height="48" rx="14" fill="#8be3b6" fill-opacity=".18" stroke="#8be3b6" stroke-opacity=".45" />
                    <rect x="132" y="126" width="70" height="48" rx="14" fill="#ffffff" fill-opacity=".08" />
                    <rect x="220" y="126" width="70" height="48" rx="14" fill="#f8ae49" fill-opacity=".2" stroke="#f8ae49" stroke-opacity=".35" />
                    <rect x="308" y="126" width="70" height="48" rx="14" fill="#ffffff" fill-opacity=".08" />
                    <rect x="396" y="126" width="40" height="48" rx="14" fill="#ffffff" fill-opacity=".08" />
                    <text x="60" y="155" fill="#d7ffeb" font-size="13" font-weight="700" font-family="Arial, sans-serif">Intake</text>
                    <text x="152" y="155" fill="#ffffff" font-size="13" font-weight="700" font-family="Arial, sans-serif">Parse</text>
                    <text x="240" y="155" fill="#fff1d3" font-size="13" font-weight="700" font-family="Arial, sans-serif">Review</text>
                    <text x="323" y="155" fill="#ffffff" font-size="13" font-weight="700" font-family="Arial, sans-serif">Workpapers</text>
                    <text x="403" y="155" fill="#ffffff" font-size="13" font-weight="700" font-family="Arial, sans-serif">File</text>
                    <rect x="44" y="210" width="120" height="62" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="178" y="210" width="120" height="62" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="312" y="210" width="124" height="62" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <text x="60" y="236" fill="#b9d6f7" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">OPEN ITEMS</text>
                    <text x="194" y="236" fill="#b9d6f7" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">TARGET DUE</text>
                    <text x="328" y="236" fill="#b9d6f7" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">READY FOR REVIEW</text>
                    <text x="60" y="262" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">14</text>
                    <text x="194" y="262" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">03/15</text>
                    <text x="328" y="262" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">89%</text>
                </svg>
            `,
            ledger: `
                <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#18263f" />
                            <stop offset="1" stop-color="#395d92" />
                        </linearGradient>
                    </defs>
                    <rect width="480" height="320" rx="32" fill="url(#bg)" />
                    <rect x="24" y="24" width="432" height="272" rx="26" fill="#ffffff" fill-opacity=".08" />
                    <text x="44" y="58" fill="#d7e7ff" font-size="16" letter-spacing="3" font-family="Arial, sans-serif">STRUCTURED DATA</text>
                    <text x="44" y="92" fill="#ffffff" font-size="28" font-weight="700" font-family="Arial, sans-serif">Parsed transaction ledger</text>
                    <rect x="44" y="120" width="392" height="34" rx="12" fill="#ffffff" fill-opacity=".06" />
                    <text x="60" y="142" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">DATE</text>
                    <text x="122" y="142" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">DESCRIPTION</text>
                    <text x="290" y="142" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">TYPE</text>
                    <text x="360" y="142" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">AMOUNT</text>
                    <rect x="44" y="164" width="392" height="34" rx="12" fill="#ffffff" fill-opacity=".08" />
                    <rect x="44" y="206" width="392" height="34" rx="12" fill="#ffffff" fill-opacity=".08" />
                    <rect x="44" y="248" width="392" height="34" rx="12" fill="#ffffff" fill-opacity=".08" />
                    <text x="60" y="186" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">03/01</text>
                    <text x="122" y="186" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">Payroll settlement</text>
                    <text x="296" y="186" fill="#8be3b6" font-size="14" font-weight="700" font-family="Arial, sans-serif">Debit</text>
                    <text x="360" y="186" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">$12.4K</text>
                    <text x="60" y="228" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">03/04</text>
                    <text x="122" y="228" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">Client deposit</text>
                    <text x="296" y="228" fill="#7bd9ff" font-size="14" font-weight="700" font-family="Arial, sans-serif">Credit</text>
                    <text x="360" y="228" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">$18.9K</text>
                    <text x="60" y="270" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">03/06</text>
                    <text x="122" y="270" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">Tax payment</text>
                    <text x="296" y="270" fill="#f8ae49" font-size="14" font-weight="700" font-family="Arial, sans-serif">Classified</text>
                    <text x="360" y="270" fill="#ffffff" font-size="14" font-family="Arial, sans-serif">$6.2K</text>
                </svg>
            `,
            reconciliation: `
                <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#173234" />
                            <stop offset="1" stop-color="#2e6f68" />
                        </linearGradient>
                    </defs>
                    <rect width="480" height="320" rx="32" fill="url(#bg)" />
                    <rect x="24" y="24" width="432" height="272" rx="26" fill="#ffffff" fill-opacity=".08" />
                    <text x="44" y="58" fill="#d4f7eb" font-size="16" letter-spacing="3" font-family="Arial, sans-serif">EXCEL MODEL</text>
                    <text x="44" y="92" fill="#ffffff" font-size="28" font-weight="700" font-family="Arial, sans-serif">Reconciliation summary</text>
                    <rect x="44" y="120" width="118" height="70" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="180" y="120" width="118" height="70" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="316" y="120" width="120" height="70" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <text x="60" y="146" fill="#bcebd8" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">MATCH RATE</text>
                    <text x="196" y="146" fill="#bcebd8" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">UNMATCHED</text>
                    <text x="332" y="146" fill="#bcebd8" font-size="13" letter-spacing="2" font-family="Arial, sans-serif">NET VARIANCE</text>
                    <text x="60" y="176" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">98.2%</text>
                    <text x="196" y="176" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">11</text>
                    <text x="332" y="176" fill="#ffffff" font-size="26" font-weight="700" font-family="Arial, sans-serif">$3.1K</text>
                    <rect x="44" y="216" width="392" height="18" rx="9" fill="#ffffff" fill-opacity=".08" />
                    <rect x="44" y="216" width="335" height="18" rx="9" fill="#8be3b6" fill-opacity=".65" />
                    <rect x="44" y="248" width="280" height="14" rx="7" fill="#ffffff" fill-opacity=".08" />
                    <rect x="44" y="248" width="198" height="14" rx="7" fill="#7bd9ff" fill-opacity=".68" />
                    <text x="44" y="286" fill="#d4f7eb" font-size="14" font-family="Arial, sans-serif">Pivot summary | Account tie-out | Review notes</text>
                </svg>
            `,
            dashboard: `
                <svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#14263f" />
                            <stop offset="1" stop-color="#1e4976" />
                        </linearGradient>
                    </defs>
                    <rect width="480" height="320" rx="32" fill="url(#bg)" />
                    <rect x="24" y="24" width="432" height="272" rx="26" fill="#ffffff" fill-opacity=".08" />
                    <text x="44" y="58" fill="#d7e7ff" font-size="16" letter-spacing="3" font-family="Arial, sans-serif">POWER BI</text>
                    <text x="44" y="92" fill="#ffffff" font-size="28" font-weight="700" font-family="Arial, sans-serif">Financial metrics</text>
                    <rect x="44" y="118" width="92" height="64" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="150" y="118" width="92" height="64" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="256" y="118" width="92" height="64" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <rect x="362" y="118" width="74" height="64" rx="18" fill="#ffffff" fill-opacity=".08" />
                    <text x="58" y="144" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">INFLOW</text>
                    <text x="164" y="144" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">OUTFLOW</text>
                    <text x="270" y="144" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">LIABILITY</text>
                    <text x="376" y="144" fill="#aac8ef" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">YTD</text>
                    <text x="58" y="170" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial, sans-serif">$118K</text>
                    <text x="164" y="170" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial, sans-serif">$92K</text>
                    <text x="270" y="170" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial, sans-serif">$27K</text>
                    <text x="376" y="170" fill="#ffffff" font-size="24" font-weight="700" font-family="Arial, sans-serif">+8%</text>
                    <rect x="44" y="214" width="36" height="50" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="94" y="196" width="36" height="68" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="144" y="232" width="36" height="32" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="194" y="184" width="36" height="80" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="244" y="206" width="36" height="58" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="294" y="172" width="36" height="92" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="344" y="224" width="36" height="40" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                    <rect x="394" y="188" width="36" height="76" rx="10" fill="#7bd9ff" fill-opacity=".78" />
                </svg>
            `,
            "mini-workflow": `
                <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0" stop-color="#1b2842" />
                            <stop offset="1" stop-color="#365f8f" />
                        </linearGradient>
                    </defs>
                    <rect width="340" height="240" rx="28" fill="url(#bg)" />
                    <rect x="18" y="18" width="304" height="204" rx="22" fill="#ffffff" fill-opacity=".08" />
                    <text x="34" y="48" fill="#d7e7ff" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">TAX FLOW</text>
                    <rect x="34" y="70" width="76" height="34" rx="12" fill="#8be3b6" fill-opacity=".18" />
                    <rect x="122" y="70" width="76" height="34" rx="12" fill="#ffffff" fill-opacity=".08" />
                    <rect x="210" y="70" width="96" height="34" rx="12" fill="#f8ae49" fill-opacity=".2" />
                    <text x="50" y="92" fill="#d7ffeb" font-size="12" font-weight="700" font-family="Arial, sans-serif">Ingest</text>
                    <text x="146" y="92" fill="#ffffff" font-size="12" font-weight="700" font-family="Arial, sans-serif">Classify</text>
                    <text x="227" y="92" fill="#fff1d3" font-size="12" font-weight="700" font-family="Arial, sans-serif">Workpapers</text>
                    <rect x="34" y="126" width="272" height="14" rx="7" fill="#ffffff" fill-opacity=".08" />
                    <rect x="34" y="126" width="208" height="14" rx="7" fill="#7bd9ff" fill-opacity=".78" />
                    <text x="34" y="168" fill="#d7e7ff" font-size="12" letter-spacing="2" font-family="Arial, sans-serif">READY</text>
                    <text x="34" y="198" fill="#ffffff" font-size="28" font-weight="700" font-family="Arial, sans-serif">1065 / 1120</text>
                </svg>
            `
        };

        return encodeSvg(visuals[type] || visuals.dashboard);
    };

    const heroMeta = [
        {
            label: "Current role",
            value: "Tax Analyst, H&R Block"
        },
        {
            label: "Target roles",
            value: "Tax Data Analyst / Tax Technology / Automation"
        },
        {
            label: "Education",
            value: "Master of Accountancy with Data Analytics"
        }
    ];

    const introPills = [
        "Tax compliance workflows",
        "Structured transaction data",
        "Bookkeeping support",
        "Reconciliations",
        "Excel and Power BI",
        "SQL and Python",
        "Workflow systems",
        "AI bank statement parser"
    ];

    const focusAreas = [
        {
            title: "Tax compliance",
            copy: "Support individual, business, and trust tax workflows from intake through preparation and follow-up.",
            image: buildDataVisual("workflow")
        },
        {
            title: "Data structuring",
            copy: "Convert statements, workpapers, and filing inputs into cleaner formats for review, analysis, and reporting.",
            image: buildDataVisual("ledger")
        },
        {
            title: "Accounting operations",
            copy: "Support bookkeeping, reconciliations, journal entries, and close-related review across recurring accounting processes.",
            image: buildDataVisual("reconciliation")
        },
        {
            title: "Automation and analytics",
            copy: "Use Excel, Power BI, SQL, Python, and Alteryx to improve reporting visibility and workflow efficiency.",
            image: buildDataVisual("dashboard")
        }
    ];

    const projectItems = [
        {
            status: "Built",
            title: "AI Bank Statement Parser",
            summary: "An AI-assisted workflow that converts bank statements into a structured Excel workbook for review, analysis, and downstream reporting.",
            bullets: [
                "Captures date, description, debit, credit, balance, and notes in a standardized transaction table.",
                "Creates separate sheets for all transactions, bank-wise detail, and consolidated summary totals.",
                "Improves review readiness by turning unstructured statements into analysis-friendly output."
            ],
            highlight: "Built project",
            stack: [
                "AI extraction",
                "Excel automation",
                "Data structuring"
            ]
        },
        {
            status: "Planned",
            title: "Power BI Banking Dashboard",
            summary: "A reporting layer built on parser output to visualize balances, cash movement, and transaction trends across multiple bank accounts.",
            bullets: [
                "Show debit and credit trends by month and by bank.",
                "Surface total balances, inflows, outflows, and consolidated summary metrics.",
                "Present transaction output in a dashboard designed for finance and review teams."
            ],
            highlight: "Planned reporting layer",
            stack: [
                "Power BI",
                "Excel",
                "Data modeling"
            ]
        },
        {
            status: "Planned",
            title: "Tax Compliance Workflow Dashboard",
            summary: "A dashboard for monitoring return status, filing type, due dates, blockers, and handoff visibility across recurring compliance work.",
            bullets: [
                "Track individual, business, and trust return workflows in one place.",
                "Surface forms, extensions, deadlines, and review bottlenecks.",
                "Connect tax operations data with workflow reporting for better visibility."
            ],
            highlight: "Planned tax operations dashboard",
            stack: [
                "Power BI",
                "Workflow systems",
                "Tax operations"
            ]
        }
    ];

    const experienceItems = [
        {
            company: "H&R Block",
            role: "Tax Analyst",
            location: "Rockford, IL",
            period: "Dec 2025 - Present",
            image: "assets/logos/provided/hr-block-logo.png",
            summary: "Support client-facing tax preparation across interviews, return preparation, notice support, and related accounting work.",
            bullets: [
                "Lead client intake through in-person and virtual interviews to collect complete tax data.",
                "Prepare individual, business, and trust returns with accurate supporting detail.",
                "Support IRS notices and related client service requests.",
                "Contribute to bookkeeping, finance, and tax support work that requires accuracy under deadline."
            ]
        },
        {
            company: "Price Waterhouse Coopers",
            role: "US Tax Associate",
            location: "India",
            period: "June 2023 - Oct 2024",
            image: "assets/logos/provided/pwc-logo.png",
            summary: "Worked on U.S. federal tax compliance for asset and wealth management clients across workpapers, returns, estimates, and review support.",
            bullets: [
                "Prepared federal income tax workpapers and returns for U.S. compliance engagements.",
                "Worked across Forms 1065 and 1120, extensions, foreign filing forms, and tax estimates.",
                "Supported hedge fund, fund of funds, private equity, and other asset and wealth management clients.",
                "Prepared partner K-1 related work and supported estimate calculations.",
                "Performed asset diversification and REIT testing within compliance workflows."
            ]
        },
        {
            company: "MY CPE ONE",
            role: "US Accounting Associate",
            location: "India",
            period: "June 2022 - March 2023",
            image: "assets/logos/provided/my-cpe-one-logo.jpeg",
            summary: "Supported U.S. accounting processes across bookkeeping, reconciliations, close entries, and recurring financial review.",
            bullets: [
                "Managed transaction categorization and routine bookkeeping across bank and credit card activity.",
                "Completed bank, credit card, payroll, and inter-company reconciliations.",
                "Recorded month-end and year-end journal entries and reviewed recurring financials.",
                "Supported investment, trust, real estate, and automotive accounting work.",
                "Handled payroll processing and accounts receivable and payable reconciliation."
            ]
        }
    ];

    const toolboxGroups = [
        {
            label: "Data and analytics",
            title: "Analytics and automation",
            copy: "Tools used to structure data, test issues, and build reporting outputs.",
            items: [
                "Excel (advanced)",
                "Power BI",
                "SQL",
                "Python",
                "Alteryx"
            ]
        },
        {
            label: "Tax and accounting software",
            title: "Tax and accounting systems",
            copy: "Core applications used across tax preparation, bookkeeping, and accounting support.",
            items: [
                "GoSystem",
                "ADP Payroll",
                "QuickBooks Desktop",
                "QuickBooks Online",
                "Bill.com"
            ]
        },
        {
            label: "Workflow and document management",
            title: "Workflow platforms",
            copy: "Platforms used to manage handoffs, routing, documentation, and review activity.",
            items: [
                "CCH Axcess Workflow",
                "Time Capture",
                "Onvio",
                "ShareFile"
            ]
        },
        {
            label: "Communication and productivity",
            title: "Collaboration tools",
            copy: "Tools used for client support, internal coordination, and deliverable review.",
            items: [
                "Outlook",
                "Teams",
                "Mattermost",
                "Slack",
                "PowerPoint",
                "MS Word",
                "Adobe Acrobat"
            ]
        }
    ];

    const softwareCloud = [
        "Excel",
        "Power BI",
        "SQL",
        "Python",
        "Alteryx",
        "GoSystem",
        "ADP Payroll",
        "QuickBooks Desktop",
        "QuickBooks Online",
        "Bill.com",
        "CCH Axcess Workflow",
        "Time Capture",
        "Onvio",
        "ShareFile",
        "Outlook",
        "Teams",
        "Mattermost",
        "Slack",
        "PowerPoint",
        "MS Word",
        "Adobe Acrobat"
    ];

    const educationItems = [
        {
            type: "Education",
            award: "Master of Accountancy with Data Analytics",
            school: "Arkansas State University",
            meta: "Jonesboro, AR",
            dates: "Jan 2025 - Present",
            details: [
                "Graduate accounting program with a data analytics concentration.",
                "Focus aligned with reporting, structured data, and technology-enabled accounting work."
            ]
        },
        {
            type: "Education",
            award: "Bachelor of Commerce (Honors) - Financial Management",
            school: "Kumaun University",
            meta: "India",
            dates: "Jan 2017 - Dec 2020",
            details: [
                "Undergraduate training in commerce and financial management.",
                "Built the finance and accounting foundation behind later tax and analytics work."
            ]
        }
    ];

    const certifications = [
        {
            title: "Certified Public Accountant (CPA) Exam Candidate",
            date: "Dec 2026",
            copy: "Passed TCP and continuing progress toward the CPA credential."
        },
        {
            title: "Alteryx Foundation Micro-Credential Certificate",
            date: "Jan 2025",
            copy: "Credential supporting analytics and workflow-oriented problem solving."
        },
        {
            title: "PGCM - Post Graduate Certificate in International Accounting and Analytics",
            date: "Dec 2024",
            copy: "Training in international accounting and analytics."
        },
        {
            title: "Diploma in Professional Accounting & Finance (US CPA)",
            date: "Mar 2022",
            copy: "Foundation in U.S.-focused accounting and finance coursework."
        }
    ];

    const contactItems = [
        {
            icon: "📧",
            label: "Email",
            value: "nikdaswani1799@gmail.com",
            href: "mailto:nikdaswani1799@gmail.com"
        },
        {
            icon: "📞",
            label: "Phone",
            value: "870-919-4747",
            href: "tel:+18709194747"
        },
        {
            icon: "🔗",
            label: "LinkedIn",
            value: "linkedin.com/in/nikdaswani1799",
            href: "https://linkedin.com/in/nikdaswani1799"
        },
        {
            icon: "📍",
            label: "Location",
            value: "Davenport, IA"
        }
    ];

    const sceneSlides = [
        {
            type: "dashboard",
            label: "Power BI banking dashboard",
            kicker: "Power BI dashboard",
            title: "Tax liability and financial metrics",
            metrics: [
                { label: "Inflow", value: "$118K" },
                { label: "Outflow", value: "$92K" },
                { label: "Liability", value: "$27K" }
            ],
            bars: [54, 72, 46, 82, 61, 94, 58, 76],
            axis: ["Jan", "Mar", "May", "Jul"],
            tags: ["Revenue vs expense", "Bank wise", "Liability"]
        },
        {
            type: "excel",
            label: "Excel reconciliation model",
            kicker: "Excel model",
            title: "Pivot tables and reconciliation summary",
            metrics: [
                { label: "Match rate", value: "98.2%" },
                { label: "Exceptions", value: "11" },
                { label: "Variance", value: "$3.1K" }
            ],
            rows: [
                ["Cash", "Matched", "98.2%"],
                ["Payroll", "Review", "2 items"],
                ["Expenses", "Tied out", "$0.0K"]
            ],
            tags: ["Pivot tables", "Financial summary", "Review ready"]
        },
        {
            type: "dataset",
            label: "SQL and Python transaction dataset",
            kicker: "SQL / Python dataset",
            title: "Transaction classification output",
            columns: ["Date", "Description", "Type", "Amount"],
            rows: [
                ["03/01", "Payroll", "Debit", "$12.4K"],
                ["03/04", "Client deposit", "Credit", "$18.9K"],
                ["03/06", "Tax payment", "Classified", "$6.2K"]
            ],
            tags: ["Parsed statements", "Ledger output", "Categories"]
        },
        {
            type: "workflow",
            label: "Tax compliance workflow",
            kicker: "Tax workflow",
            title: "Financial data ingestion to tax workpapers",
            steps: [
                { label: "Ingest", state: "Done" },
                { label: "Parse", state: "Live" },
                { label: "Review", state: "Queue" },
                { label: "Workpapers", state: "Build" },
                { label: "Filing", state: "Ready" }
            ],
            summary: [
                { label: "Returns", value: "29" },
                { label: "Blocked", value: "3" }
            ],
            tags: ["1065", "1120", "Compliance"]
        }
    ];

    const renderMetricStrip = (metrics) => `
        <div class="monitor-metric-strip">
            ${metrics.map((item) => `
                <div class="monitor-metric">
                    <span>${item.label}</span>
                    <strong>${item.value}</strong>
                </div>
            `).join("")}
        </div>
    `;

    const renderSceneSlide = (slide, index) => {
        const activeClass = index === 0 ? "is-active" : "";

        if (slide.type === "dashboard") {
            return `
                <div class="monitor-slide monitor-slide--dashboard ${activeClass}" aria-label="${slide.label}">
                    <div class="monitor-slide-content">
                        <div>
                            <p class="monitor-kicker">${slide.kicker}</p>
                            <h3 class="monitor-title">${slide.title}</h3>
                        </div>
                        ${renderMetricStrip(slide.metrics)}
                        <div class="monitor-chart">
                            <div class="monitor-bars">
                                ${slide.bars.map((value) => `<span style="height: ${value}%;"></span>`).join("")}
                            </div>
                            <div class="monitor-axis">
                                ${slide.axis.map((item) => `<span>${item}</span>`).join("")}
                            </div>
                        </div>
                        <div class="monitor-tags">
                            ${slide.tags.map((item) => `<span>${item}</span>`).join("")}
                        </div>
                    </div>
                </div>
            `;
        }

        if (slide.type === "excel") {
            return `
                <div class="monitor-slide monitor-slide--excel ${activeClass}" aria-label="${slide.label}">
                    <div class="monitor-slide-content">
                        <div>
                            <p class="monitor-kicker">${slide.kicker}</p>
                            <h3 class="monitor-title">${slide.title}</h3>
                        </div>
                        ${renderMetricStrip(slide.metrics)}
                        <div class="monitor-sheet">
                            ${slide.rows.map((row) => `
                                <div class="monitor-sheet-row">
                                    <span>${row[0]}</span>
                                    <span>${row[1]}</span>
                                    <span>${row[2]}</span>
                                </div>
                            `).join("")}
                        </div>
                        <div class="monitor-tags">
                            ${slide.tags.map((item) => `<span>${item}</span>`).join("")}
                        </div>
                    </div>
                </div>
            `;
        }

        if (slide.type === "dataset") {
            return `
                <div class="monitor-slide monitor-slide--dataset ${activeClass}" aria-label="${slide.label}">
                    <div class="monitor-slide-content">
                        <div>
                            <p class="monitor-kicker">${slide.kicker}</p>
                            <h3 class="monitor-title">${slide.title}</h3>
                        </div>
                        <div class="monitor-table">
                            <div class="monitor-table-row is-head">
                                ${slide.columns.map((item) => `<span>${item}</span>`).join("")}
                            </div>
                            ${slide.rows.map((row) => `
                                <div class="monitor-table-row">
                                    ${row.map((item, itemIndex) => `<span class="${itemIndex === 2 ? "monitor-cell-status" : ""}">${item}</span>`).join("")}
                                </div>
                            `).join("")}
                        </div>
                        <div class="monitor-tags">
                            ${slide.tags.map((item) => `<span>${item}</span>`).join("")}
                        </div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="monitor-slide monitor-slide--workflow ${activeClass}" aria-label="${slide.label}">
                <div class="monitor-slide-content">
                    <div>
                        <p class="monitor-kicker">${slide.kicker}</p>
                        <h3 class="monitor-title">${slide.title}</h3>
                    </div>
                    <div class="workflow-rail">
                        ${slide.steps.map((step) => `
                            <div class="workflow-step ${step.state === "Done" ? "is-done" : ""} ${step.state === "Live" ? "is-live" : ""}">
                                <span>${step.state}</span>
                                <strong>${step.label}</strong>
                            </div>
                        `).join("")}
                    </div>
                    <div class="workflow-summary">
                        ${slide.summary.map((item) => `
                            <div class="workflow-summary-card">
                                <span>${item.label}</span>
                                <strong>${item.value}</strong>
                            </div>
                        `).join("")}
                    </div>
                    <div class="monitor-tags">
                        ${slide.tags.map((item) => `<span>${item}</span>`).join("")}
                    </div>
                </div>
            </div>
        `;
    };

    const heroMetaRoot = document.querySelector("#hero-meta");
    const introBandRoot = document.querySelector("#intro-band-strip");
    const focusGridRoot = document.querySelector("#focus-grid");
    const experienceListRoot = document.querySelector("#experience-list");
    const experienceFeatureRoot = document.querySelector("#experience-feature");
    const toolboxGridRoot = document.querySelector("#toolbox-grid");
    const softwareCloudRoot = document.querySelector("#software-cloud");
    const educationRoot = document.querySelector("#education-list");
    const certificationRoot = document.querySelector("#certification-list");
    const contactRoot = document.querySelector("#contact-grid");
    const projectsRoot = document.querySelector("#projects-grid");
    const sceneRotatorRoot = document.querySelector("#scene-rotator");
    const menuToggle = document.querySelector("#menu-toggle");
    const siteNav = document.querySelector("#site-nav");
    const navLinks = [...document.querySelectorAll(".site-nav a")];
    const sections = [...document.querySelectorAll("main section[id]")];
    const scene = document.querySelector(".scene");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    heroMetaRoot.innerHTML = heroMeta.map((item) => `
        <article class="meta-card">
            <span class="meta-card-label">${item.label}</span>
            <strong>${item.value}</strong>
        </article>
    `).join("");

    if (introBandRoot) {
        introBandRoot.innerHTML = introPills.map((item) => `
            <span class="intro-pill">${item}</span>
        `).join("");
    }

    focusGridRoot.innerHTML = focusAreas.map((item) => `
        <article class="focus-card reveal">
            <div class="focus-card-media">
                <img src="${item.image}" alt="">
            </div>
            <h3>${item.title}</h3>
            <p>${item.copy}</p>
        </article>
    `).join("");

    projectsRoot.innerHTML = projectItems.map((item) => `
        <article class="project-card reveal ${item.status === "Built" ? "is-built" : ""}">
            <span class="project-status">${item.status}</span>
            <h3>${item.title}</h3>
            <p class="project-summary">${item.summary}</p>
            <ul class="project-bullets">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
            <div class="project-footer">
                <span class="project-highlight">${item.highlight}</span>
                <div class="project-stack">
                    ${item.stack.map((tool) => `<span>${tool}</span>`).join("")}
                </div>
            </div>
        </article>
    `).join("");

    const renderExperienceFeature = (item) => {
        experienceFeatureRoot.innerHTML = `
            <div class="experience-feature-head">
                <div>
                    <p class="experience-meta">${item.period} / ${item.location}</p>
                    <h3>${item.company}</h3>
                    <p class="experience-card-copy">${item.role}</p>
                </div>
                <div class="experience-feature-badge">${item.role}</div>
            </div>
            <p class="experience-summary">${item.summary}</p>
            <ul class="experience-bullets">
                ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
            </ul>
        `;
    };

    experienceListRoot.innerHTML = experienceItems.map((item, index) => `
        <button class="experience-picker ${index === 0 ? "is-active" : ""}" type="button" data-company="${item.company}">
            <div class="experience-picker-thumb">
                <img src="${item.image}" alt="">
            </div>
            <div>
                <p class="experience-meta">${item.period}</p>
                <h3>${item.company}</h3>
                <p class="experience-card-copy">${item.role}</p>
            </div>
        </button>
    `).join("");

    renderExperienceFeature(experienceItems[0]);

    [...experienceListRoot.querySelectorAll(".experience-picker")].forEach((button) => {
        button.addEventListener("click", () => {
            const company = button.dataset.company;
            const selected = experienceItems.find((item) => item.company === company);

            if (!selected) {
                return;
            }

            [...experienceListRoot.querySelectorAll(".experience-picker")].forEach((picker) => {
                picker.classList.toggle("is-active", picker === button);
            });

            renderExperienceFeature(selected);
        });
    });

    toolboxGridRoot.innerHTML = toolboxGroups.map((group) => `
        <article class="tool-card reveal">
            <p class="tool-label">${group.label}</p>
            <h3>${group.title}</h3>
            <p class="tool-copy">${group.copy}</p>
            <ul class="tool-list">
                ${group.items.map((item) => `<li>${item}</li>`).join("")}
            </ul>
        </article>
    `).join("");

    softwareCloudRoot.innerHTML = softwareCloud.map((item) => `
        <span>${item}</span>
    `).join("");

    educationRoot.innerHTML = educationItems.map((item) => `
        <article class="education-card reveal">
            <p class="education-meta">${item.type} / ${item.dates}</p>
            <div class="education-title-row">
                <h3>${item.school}</h3>
                <span class="education-location">${item.meta}</span>
            </div>
            <p class="education-copy">${item.award}</p>
            <ul class="education-list">
                ${item.details.map((detail) => `<li>${detail}</li>`).join("")}
            </ul>
        </article>
    `).join("");

    certificationRoot.innerHTML = certifications.map((item) => `
        <article class="certification-card reveal">
            <p class="certification-date">${item.date}</p>
            <h3>${item.title}</h3>
            <p class="certification-copy">${item.copy}</p>
        </article>
    `).join("");

    contactRoot.innerHTML = contactItems.map((item) => {
        const wrapperStart = item.href
            ? `<a class="contact-card reveal" href="${item.href}" ${item.href.startsWith("http") ? 'target="_blank" rel="noreferrer"' : ""}>`
            : `<article class="contact-card reveal">`;
        const wrapperEnd = item.href ? "</a>" : "</article>";

        return `
            ${wrapperStart}
                <div class="contact-card-head">
                    <span class="contact-icon" aria-hidden="true">${item.icon}</span>
                    <span class="contact-label">${item.label}</span>
                </div>
                <strong>${item.value}</strong>
            ${wrapperEnd}
        `;
    }).join("");

    sceneRotatorRoot.innerHTML = sceneSlides.map((slide, index) => renderSceneSlide(slide, index)).join("");

    const sceneSlideNodes = [...sceneRotatorRoot.querySelectorAll(".monitor-slide")];
    let activeSlide = 0;

    if (!reduceMotion && sceneSlideNodes.length > 1) {
        window.setInterval(() => {
            sceneSlideNodes[activeSlide].classList.remove("is-active");
            activeSlide = (activeSlide + 1) % sceneSlideNodes.length;
            sceneSlideNodes[activeSlide].classList.add("is-active");
        }, 3200);
    }

    if (menuToggle && siteNav) {
        menuToggle.addEventListener("click", () => {
            const nextState = !siteNav.classList.contains("is-open");
            siteNav.classList.toggle("is-open", nextState);
            menuToggle.setAttribute("aria-expanded", String(nextState));
        });

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                siteNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
            });
        });
    }

    if (!reduceMotion && scene) {
        scene.addEventListener("pointermove", (event) => {
            const bounds = scene.getBoundingClientRect();
            const offsetX = ((event.clientX - bounds.left) / bounds.width) - 0.5;
            const offsetY = ((event.clientY - bounds.top) / bounds.height) - 0.5;
            const rotateY = offsetX * 6;
            const rotateX = offsetY * -5;

            scene.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        scene.addEventListener("pointerleave", () => {
            scene.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
        });
    }

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, {
        threshold: 0.04,
        rootMargin: "0px 0px -4% 0px"
    });

    [...document.querySelectorAll(".reveal")].forEach((item) => revealObserver.observe(item));

    const setActiveNav = (id) => {
        navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveNav(entry.target.id);
            }
        });
    }, {
        threshold: 0.52,
        rootMargin: "-15% 0px -40% 0px"
    });

    sections.forEach((section) => sectionObserver.observe(section));
    setActiveNav("about");
});
