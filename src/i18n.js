// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: {
//       translation: {
//         welcome: "Welcome",
//         about: "About Us",
//         services: "Services",
//         // cards_info titles and content
//         cards_info: {
//           Custom: "Designing solutions that perfectly align with your vision and needs. Leveraging the latest technologies to bring your ideas to life. No matter how ambitious they are.",
//           Dedicated: "Experience the power of a dedicated development team. Our experts dive deep into every aspect of your project, delivering exceptional quality",
//           Adaptable: "Choose an engagement model that fits your business. Our flexible approach ensures our partnership aligns with your specific goals, budget, and objectives",
//           Agile: "Receive high-quality, user-centered solutions on time. We ensure your project meets expectations and drives satisfaction for both your clients and end-users",
//         },
//         // cards_info2 titles and content
//         cards_info2: {
//           "Banking Solutions": ["Risk Management", "Remedial Management", "Reconciliation"],
//           "Artificial Intelligence": ["Ai Agents", "Machine Learning", "ChatBots"],
//           "ERP Services": ["Mobile Applications", "Web Applications", "Rapid Prototyping", "Erp Applications"],
//           "Process Automation": ["Automated Workflows", "Human Supervised Workflows", "System Integration"],
//           "Consultation and Training": ["Business Analysis", "Risk Management", "Project Management", "Compliance", "Digital Transformation"],
//           "Outsourcing Services": ["Consultants", "Project Managers", "Expert developers", "Testing and Assurance", "Accounting and Auditing"],
//           "Cloud Solutions": ["Dedicated Servers", "Virtual Servers"]
//         },
//         // slidesData
//         slidesData: [
//           {
//             title: "Venice: The Floating City",
//             description: "Canals, gondolas, and timeless Italian charm",
//             categories: ["Travel", "History"]
//           }
//         ],
//         // reviewsData
//         reviewsData: [
//           {
//             short: "They understood the requirements of the task quickly...",
//             long: "Intellectsoft is complimented for bringing their development insight to the table, understanding the requirements quickly, and delivering an app on time/budget with a design that has satisfied all stakeholders.",
//             rank: "SE Ranking",
//             writer: "Julia Karnaukh, Head of Marketing",
//             location: "Palo Alto, California"
//           }
//         ],
//         // partnersData
//         partnersData: [
//           {
//             comapnies_name: "Harley-Davidson",
//             comapnies_desc: "We developed a mobile app for this iconic motorcycle brand that transforms fan engagement. The app enables exhibition staff to seamlessly capture information from prospective customers, enriching the company's lead database."
//           },
//           {
//             comapnies_name: "Nike",
//             comapnies_desc: "Created a personalized shopping experience app for Nike that allows users to virtually try on shoes and apparel using AR, boosting online sales and engagement."
//           },
//           {
//             comapnies_name: "Coca-Cola",
//             comapnies_desc: "Built an interactive campaign platform for Coca-Cola that integrates with social media, encouraging users to share branded content and earn rewards."
//           }
//         ]
//       },
//     },
//     ar: {
//       translation: {
//         welcome: "أهلاً وسهلاً",
//         about: "معلومات عنا",
//         services: "الخدمات",
//         cards_info: {
//           Custom: "تصميم حلول تتماشى تمامًا مع رؤيتك واحتياجاتك. الاستفادة من أحدث التقنيات لإحياء أفكارك مهما كانت طموحة.",
//           Dedicated: "اختبر قوة فريق تطوير مخصص. يتعمق خبراؤنا في كل جانب من جوانب مشروعك، ويقدمون جودة استثنائية",
//           Adaptable: "اختر نموذج التعاون الذي يناسب عملك. يضمن نهجنا المرن توافق شراكتنا مع أهدافك وميزانيتك وغاياتك الخاصة",
//           Agile: "تلقي حلول عالية الجودة ومركزة على المستخدم في الوقت المحدد. نضمن أن يحقق مشروعك التوقعات ويزيد رضا عملائك والمستخدمين النهائيين",
//         },
//         cards_info2: {
//           "Banking Solutions": ["إدارة المخاطر", "إدارة التعويضات", "المصالحة"],
//           "Artificial Intelligence": ["وكلاء الذكاء الاصطناعي", "التعلم الآلي", "الدردشات الآلية"],
//           "ERP Services": ["تطبيقات الهاتف المحمول", "تطبيقات الويب", "النماذج الأولية السريعة", "تطبيقات ERP"],
//           "Process Automation": ["تدفقات العمل المؤتمتة", "تدفقات العمل تحت إشراف البشر", "تكامل النظام"],
//           "Consultation and Training": ["تحليل الأعمال", "إدارة المخاطر", "إدارة المشاريع", "الامتثال", "التحول الرقمي"],
//           "Outsourcing Services": ["استشاريون", "مديرو المشاريع", "المطورون الخبراء", "اختبار وضمان الجودة", "المحاسبة والتدقيق"],
//           "Cloud Solutions": ["خوادم مخصصة", "خوادم افتراضية"]
//         },
//         slidesData: [
//           {
//             title: "البندقية: المدينة العائمة",
//             description: "قنوات وجندولات وسحر إيطالي خالد",
//             categories: ["السفر", "التاريخ"]
//           }
//         ],
//         reviewsData: [
//           {
//             short: "فهموا متطلبات المهمة بسرعة...",
//             long: "تتم مدح Intellectsoft لتقديم رؤاها التطويرية، وفهم المتطلبات بسرعة، وتسليم التطبيق في الوقت المحدد/الميزانية مع تصميم يُرضي جميع الأطراف المعنية.",
//             rank: "تصنيف SE",
//             writer: "جوليا كارناوخ، رئيسة التسويق",
//             location: "بالو ألتو، كاليفورنيا"
//           }
//         ],
//         partnersData: [
//           {
//             comapnies_name: "هارلي-ديفيدسون",
//             comapnies_desc: "طورنا تطبيقًا للهواتف المحمولة لهذه العلامة التجارية الشهيرة للدراجات النارية، مما يعزز تفاعل المعجبين. يمكّن التطبيق موظفي المعرض من جمع المعلومات بسلاسة من العملاء المحتملين، مما يغني قاعدة بيانات الشركة."
//           },
//           {
//             comapnies_name: "نايكي",
//             comapnies_desc: "تم إنشاء تطبيق تجربة تسوق مخصصة لشركة نايكي يسمح للمستخدمين بتجربة الأحذية والملابس افتراضيًا باستخدام AR، مما يعزز المبيعات والمشاركة عبر الإنترنت."
//           },
//           {
//             comapnies_name: "كوكا كولا",
//             comapnies_desc: "تم بناء منصة حملة تفاعلية لشركة كوكا كولا تتكامل مع وسائل التواصل الاجتماعي، وتشجع المستخدمين على مشاركة المحتوى المميز وكسب المكافآت."
//           }
//         ]
//       },
//     },
//   },
//   lng: "en", // default language
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
