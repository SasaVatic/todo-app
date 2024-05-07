const users = [
  {
    id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "John",
    email: "john@example.com",
    password: "123456",
  },
  {
    id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Alice",
    email: "alice@example.com",
    password: "123456",
  },
  {
    id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Bob",
    email: "bob@example.com",
    password: "123456",
  },
  {
    id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Eva",
    email: "eva@example.com",
    password: "123456",
  },
  {
    id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Alex",
    email: "alex@example.com",
    password: "123456",
  },
];

const tasks = [
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Prepare presentation slides",
    chore:
      "Create PowerPoint slides for the upcoming meeting with stakeholders.",
    status: "to-do",
    date: "2024-04-11",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Review quarterly financial report",
    chore: "Review and analyze the financial data for the last quarter.",
    status: "completed",
    date: "2024-04-16",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Develop new feature",
    chore: "Implement the new feature requested by the client in the software.",
    status: "in-progress",
    date: "2024-04-25",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Write marketing proposal",
    chore:
      "Draft a proposal outlining the marketing strategy for the upcoming product launch.",
    status: "to-do",
    date: "2024-04-29",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Conduct user testing",
    chore:
      "Organize and conduct user testing sessions to gather feedback on the new website design.",
    status: "completed",
    date: "2024-04-18",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Research market trends",
    chore:
      "Analyze current market trends and identify potential opportunities for business growth.",
    status: "to-do",
    date: "2024-04-11",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Customer feedback analysis",
    chore:
      "Review customer feedback and suggest improvements based on the analysis.",
    status: "completed",
    date: "2024-04-16",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Organize team workshop",
    chore:
      "Plan and coordinate a team workshop to enhance collaboration and creativity.",
    status: "in-progress",
    date: "2024-04-25",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Content creation for social media",
    chore:
      "Create engaging content for social media platforms to increase brand visibility.",
    status: "to-do",
    date: "2024-04-29",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Optimize website performance",
    chore:
      "Identify and fix performance issues on the company website to improve user experience.",
    status: "completed",
    date: "2024-04-18",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Training session for new employees",
    chore:
      "Conduct a training session for new employees to familiarize them with company policies and procedures.",
    status: "in-progress",
    date: "2024-04-22",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Strategic planning meeting",
    chore:
      "Participate in a strategic planning meeting to discuss long-term goals and objectives.",
    status: "to-do",
    date: "2024-04-14",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Budget analysis",
    chore:
      "Review and analyze the company's budget to identify areas for cost-saving and optimization.",
    status: "completed",
    date: "2024-04-20",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Client meeting",
    chore:
      "Attend a meeting with a potential client to discuss project requirements and deliverables.",
    status: "in-progress",
    date: "2024-04-26",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Product demo",
    chore:
      "Prepare and conduct a demo of the company's product for a group of prospective customers.",
    status: "to-do",
    date: "2024-04-30",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Quarterly performance review",
    chore:
      "Conduct performance reviews for team members and provide constructive feedback.",
    status: "completed",
    date: "2024-04-02",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Market research survey",
    chore:
      "Design and distribute a market research survey to gather insights from target customers.",
    status: "completed",
    date: "2024-04-08",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Employee training workshop",
    chore:
      "Organize and facilitate a workshop to enhance employee skills and knowledge.",
    status: "in-progress",
    date: "2024-04-15",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Content marketing strategy",
    chore:
      "Develop a content marketing strategy to increase brand awareness and attract leads.",
    status: "to-do",
    date: "2024-04-23",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Website redesign",
    chore:
      "Collaborate with designers and developers to redesign the company website for improved usability.",
    status: "to-do",
    date: "2024-04-28",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Sales training session",
    chore:
      "Conduct a training session for the sales team to improve selling techniques and product knowledge.",
    status: "completed",
    date: "2024-04-04",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Financial forecasting",
    chore:
      "Prepare financial forecasts and projections for the upcoming quarter.",
    status: "in-progress",
    date: "2024-04-10",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Marketing campaign launch",
    chore:
      "Coordinate the launch of a new marketing campaign across various channels.",
    status: "completed",
    date: "2024-04-18",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Client presentation preparation",
    chore:
      "Prepare slides and materials for an upcoming presentation to a potential client.",
    status: "in-progress",
    date: "2024-04-22",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Product feature brainstorming",
    chore:
      "Brainstorm new features and enhancements for the company's product with the development team.",
    status: "to-do",
    date: "2024-04-27",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Annual budget planning",
    chore:
      "Collaborate with finance team to develop the annual budget plan for the next fiscal year.",
    status: "to-do",
    date: "2024-04-26",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Customer support training",
    chore:
      "Organize training sessions for customer support representatives to enhance customer service skills.",
    status: "completed",
    date: "2024-04-29",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Product roadmap planning",
    chore:
      "Develop a roadmap outlining the future direction of the company's product offerings.",
    status: "in-progress",
    date: "2024-04-30",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Market segmentation analysis",
    chore:
      "Analyze market data to identify key segments and tailor marketing strategies accordingly.",
    status: "to-do",
    date: "2024-05-01",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Performance marketing campaign",
    chore:
      "Launch a performance marketing campaign to drive targeted traffic and conversions.",
    status: "completed",
    date: "2024-05-03",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Team building activity",
    chore:
      "Organize a team building activity to foster collaboration and morale among team members.",
    status: "to-do",
    date: "2024-05-04",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Quality assurance testing",
    chore:
      "Perform thorough testing of software functionalities to ensure quality and reliability.",
    status: "in-progress",
    date: "2024-05-05",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Vendor negotiation",
    chore:
      "Negotiate contracts and terms with vendors to secure favorable deals for the company.",
    status: "completed",
    date: "2024-05-06",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Content calendar planning",
    chore:
      "Create a content calendar outlining topics and publishing schedule for the next month.",
    status: "to-do",
    date: "2024-05-07",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Cross-functional collaboration",
    chore:
      "Collaborate with other departments to streamline processes and improve efficiency.",
    status: "to-do",
    date: "2024-05-07",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Employee performance appraisal",
    chore:
      "Conduct performance appraisals for team members and set goals for the next evaluation period.",
    status: "completed",
    date: "2024-04-05",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Website content update",
    chore:
      "Update website content to reflect new product features and company announcements.",
    status: "completed",
    date: "2024-04-10",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Market expansion strategy",
    chore:
      "Develop a strategy for expanding into new markets and attracting customers.",
    status: "in-progress",
    date: "2024-04-15",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Social media engagement analysis",
    chore:
      "Analyze social media engagement metrics and optimize content for better performance.",
    status: "to-do",
    date: "2024-04-20",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Customer satisfaction survey",
    chore:
      "Design and conduct a survey to measure customer satisfaction and identify areas for improvement.",
    status: "completed",
    date: "2024-04-25",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Employee training needs assessment",
    chore:
      "Assess training needs of employees and develop a training plan to address skill gaps.",
    status: "to-do",
    date: "2024-04-30",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Product demo preparation",
    chore:
      "Prepare materials and demos for showcasing product features to potential clients.",
    status: "in-progress",
    date: "2024-05-01",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Competitor analysis",
    chore:
      "Conduct a thorough analysis of competitors' products, pricing, and marketing strategies.",
    status: "completed",
    date: "2024-05-03",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Email marketing campaign",
    chore:
      "Plan and execute an email marketing campaign to nurture leads and drive conversions.",
    status: "to-do",
    date: "2024-05-05",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Product feedback analysis",
    chore:
      "Analyze customer feedback on the product and prioritize feature requests for the development team.",
    status: "to-do",
    date: "2024-05-07",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Create marketing collateral",
    chore:
      "Design brochures, flyers, and posters for upcoming marketing campaigns.",
    status: "completed",
    date: "2024-04-10",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Customer segmentation analysis",
    chore:
      "Segment customer base based on demographics, behavior, and preferences.",
    status: "completed",
    date: "2024-04-15",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Sales forecast preparation",
    chore:
      "Prepare sales forecasts for the next quarter based on market trends and historical data.",
    status: "in-progress",
    date: "2024-04-20",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "SEO optimization",
    chore:
      "Optimize website content and structure to improve search engine rankings.",
    status: "to-do",
    date: "2024-04-25",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Customer onboarding process review",
    chore:
      "Review and streamline the customer onboarding process for improved efficiency.",
    status: "completed",
    date: "2024-04-30",
  },
  {
    user_id: "e3f7c02a-fa51-4d6b-8160-f4e76b22fc19",
    name: "Employee engagement survey",
    chore:
      "Administer a survey to measure employee engagement and satisfaction levels.",
    status: "to-do",
    date: "2024-05-05",
  },
  {
    user_id: "0a2d32bd-d1ef-4851-a69d-8606bc8c521d",
    name: "Content localization",
    chore:
      "Translate and localize content for international markets to ensure cultural relevance.",
    status: "in-progress",
    date: "2024-05-10",
  },
  {
    user_id: "b014e847-87d4-4d92-b127-6b6d75c5acdc",
    name: "Partnership negotiation",
    chore:
      "Negotiate partnership agreements with other companies to expand market reach.",
    status: "completed",
    date: "2024-05-15",
  },
  {
    user_id: "4b4472dc-9e92-4b39-9b91-6073be190cf6",
    name: "Lead generation campaign",
    chore:
      "Launch a lead generation campaign to attract potential customers and capture contact information.",
    status: "to-do",
    date: "2024-05-20",
  },
  {
    user_id: "cd14cb3f-cd2a-41f7-a005-41c95390ff57",
    name: "Product roadmap presentation",
    chore:
      "Present the product roadmap to stakeholders and gather feedback for further refinement.",
    status: "to-do",
    date: "2024-05-25",
  },
];

module.exports = {
  users,
  tasks,
};
