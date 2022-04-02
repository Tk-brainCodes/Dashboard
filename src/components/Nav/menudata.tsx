import Admin from "../../assests/navicons/Admin.svg";
import HelpCenter from "../../assests/navicons/HelpCenter.svg";
import Analytic from "../../assests/navicons/Analytic.svg";
import Knowledgebase from "../../assests/navicons/Knowledgebase.svg";
import Agentinbox from "../../assests/navicons/Agentinbox.svg";

export const MENU_DATA = [
  {
    name: "Admin",
    icon: Admin,
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

    subNav: [
      {
        name: "Team",
        url: "bases",
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
