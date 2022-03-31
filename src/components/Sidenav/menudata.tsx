import Admin from "../../assests/navicons/Admin.svg";
import HelpCenter from "../../assests/navicons/HelpCenter.svg";
import Analytic from "../../assests/navicons/Analytic.svg";
import Knowledgebase from "../../assests/navicons/Knowledgebase.svg";
import Agentinbox from "../../assests/navicons/Agentinbox.svg";

export const MENU_DATA = [
  {
    id: 1,
    name: "Admin",
    icon: Admin,
    url: "admin",
    items: [
      {
        id: 1,
        name: "Review",
        url: "review",
      },
      {
        id: 2,
        name: "Progress",
        url: "progress",
      },
      {
        id: 3,
        name: "Manage account",
        url: "manage",
      },
    ],
  },
  {
    id: 2,
    name: "Knowledge Base",
    url: "knowledge",
    icon: Agentinbox,
    items: [
      {
        id: 1,
        name: "Knowledge progress",
        url: "knowledgeprogress",
      },
      {
        id: 2,
        name: "Team progress",
        url: "teamprogress",
      },
      {
        id: 3,
        name: "Extended",
        url: "extended",
      },
    ],
  },
  {
    id: 3,
    name: "Train SAM",
    url: "train",
    icon: Agentinbox,
    items: [
      {
        id: 1,
        name: "Train progress",
        url: "trainprogress",
      },
      {
        id: 2,
        name: "Team progress",
        url: "teamprogress",
      },
      {
        id: 3,
        name: "Extended",
        url: "extended",
      },
    ],
  },
  {
    id: 4,
    name: "Agent Inbox",
    icon: Knowledgebase,
    url: "agent",
    items: [
      {
        id: 1,
        name: "Agent type",
        url: "agenttype",
      },
      {
        id: 2,
        name: "Agent active",
        url: "agentactive",
      },
      {
        id: 3,
        name: "Team agent",
        url: "teamagent",
      },
    ],
  },
  {
    id: 5,
    name: "Help Center",
    icon: HelpCenter,
    url: "help",
    items: [
      {
        id: 1,
        name: "Help center1",
        url: "helpcenter1",
      },
      {
        id: 2,
        name: "Help center2",
        url: "helpcenter2",
      },
      {
        id: 3,
        name: "Help center3",
        url: "helpcenter3",
      },
    ],
  },
  {
    id: 6,
    name: "Analytics",
    icon: Analytic,
    items: [
      {
        name: "Knowledge Bases",
        id: 1,
        url: "bases",
      },
      {
        name: "Training SAM",
        id: 2,
        url: "training",
      },
      {
        name: "Help Center",
        id: 3,
        url: "helpcenter",
      },
    ],
  },
];
