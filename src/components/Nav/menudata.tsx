import Admin from "../../assests/navicons/Admin.svg";
import HelpCenter from "../../assests/navicons/HelpCenter.svg";
import Analytic from "../../assests/navicons/Analytic.svg";
import Knowledgebase from "../../assests/navicons/Knowledgebase.svg";
import Agentinbox from "../../assests/navicons/Agentinbox.svg";

import AdminFilled from "../../assests/navfilled/Admin-filled.svg";
import HelpCenterFilled from "../../assests/navfilled/HelpCenter-filled.svg";
import AnalyticFilled from "../../assests/navfilled/Analytic-filled.svg";
import KnowledgebaseFilled from "../../assests/navfilled/Knowledgebase-filled.svg";
import AgentinboxFilled from "../../assests/navfilled/Agentinbox-filled.svg";

export const MENU_DATA = [
  {
    name: "Admin",
    icon: Admin,
    iconFilled: AdminFilled,
    url: "Admin",

    subNav: [
      {
        name: "Review",
        url: "review",
      },
      {
        name: "Progress",
        url: "Progress",
      },
      {
        name: "Manage account",
        url: "manage",
      },
    ],
  },
  {
    name: "Knowledge Base",
    url: "knowledge",
    icon: Agentinbox,
    iconFilled: AgentinboxFilled,

    subNav: [
      {
        name: "Knowledge progress",
        url: "knowledgeprogress",
      },
      {
        name: "Team progress",
        url: "teamprogress",
      },
      {
        name: "Extended",
        url: "extended",
      },
    ],
  },
  {
    name: "Train SAM",
    url: "train",
    icon: Agentinbox,
    iconFilled: AgentinboxFilled,

    subNav: [
      {
        name: "Train progress",
        url: "trainprogress",
      },
      {
        name: "Team progress",
        url: "teamprogress",
      },
      {
        name: "Extended",
        url: "extended",
      },
    ],
  },
  {
    name: "Agent Inbox",
    icon: Knowledgebase,
    iconFilled: KnowledgebaseFilled,
    url: "agent",

    subNav: [
      {
        name: "Agent type",
        url: "agenttype",
      },
      {
        name: "Agent active",
        url: "agentactive",
      },
      {
        name: "Team agent",
        url: "teamagent",
      },
    ],
  },
  {
    name: "Help Center",
    icon: HelpCenter,
    iconFilled: HelpCenterFilled,
    url: "help",

    subNav: [
      {
        name: "Help center1",
        url: "helpcenter1",
      },
      {
        name: "Help center2",
        url: "helpcenter2",
      },
      {
        name: "Help center3",
        url: "helpcenter3",
      },
    ],
  },
  {
    name: "Analytics",
    icon: Analytic,
    iconFilled: AnalyticFilled,

    subNav: [
      {
        name: "Team",
        url: "bases",
      },
      {
        name: "Knowledge Base",
        url: "knowledgebase",
      },
      {
        name: "Training SAM",
        url: "training",
      },
      {
        name: "Help Center",
        url: "helpcenter",
      },
    ],
  },
];
