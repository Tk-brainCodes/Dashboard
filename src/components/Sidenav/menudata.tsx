import Admin from "../../assest/Admin.svg";
import HelpCenter from "../../assest/HelpCenter.svg";
import Analytic from "../../assest/Analytic.svg";
import Knowledgebase from "../../assest/Knowledgebase.svg";
import Agentinbox from "../../assest/Agentinbox.svg";

export const MENU_DATA = [
  {
    id: 1,
    name: "Admin",
    icon: Admin,
  },
  {
    id: 2,
    name: "Knowledge Base",
    icon: Agentinbox,
  },
  {
    id: 3,
    name: "Train SAM",
    icon: Agentinbox,
  },
  {
    id: 4,
    name: "Agent Inbox",
    icon: Knowledgebase,
  },
  {
    id: 5,
    name: "Help Center",
    icon: HelpCenter,
  },
  {
    id: 6,
    name: "Analytics",
    icon: Analytic,
    subMenu: [
      {
        item1: "Knowledge Bases",
        id: 10,
      },
      {
        item1: "Training SAM",
        id: 11,
      },
      {
        item1: "Help Center",
        id: 12,
      },
    ],
  },
];