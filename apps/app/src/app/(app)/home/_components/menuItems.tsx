import { AvatarIcon, Link1Icon, StackIcon } from "@radix-ui/react-icons";

import { ChatIcon } from "~/components/icons/chat-icon";
import { DbIcon } from "~/components/icons/db-icon";
import { InstrtuctionIcon } from "~/components/icons/instruction-icon";
import { MemberIcon } from "~/components/icons/member-icon";
import { PlanIcon } from "~/components/icons/plan-icon";
import { RolesIcon } from "~/components/icons/roles-icon";
import { SettingsIcon } from "~/components/icons/settings-icon";
import { TaskIcon } from "~/components/icons/task-icon";

const iconProps = {
  width: 31,
  height: 31,
  color: "#D4D4D4",
  className: "flex-shrink-0",
};

export const settings = [
  {
    icon: <AvatarIcon {...iconProps} />,
    title: "Profile",
    path: "/profile",
    subtitle:
      "Set up your personal preferences and custom instructions within your current workspace.",
  },
  {
    icon: <StackIcon {...iconProps} />,
    title: "My Jobs",
    subtitle:
      "Set up trigger-based requests such as reports, alerts, and statements that are tailored specifically for you.",
  },
];

export const options = [
  {
    icon: <SettingsIcon {...iconProps} />,
    title: "Workspace Settings",
    path: "/settings",
    subtitle:
      "Customize your workspace by adjusting the name, icon, country, language, and other preferences to enhance usability and personalization.",
  },
  {
    icon: <ChatIcon {...iconProps} />,
    title: "Chat & Communications",
    subtitle:
      "Set up and manage sources of data integration, ensuring seamless connectivity and efficient data flow within your workspace.",
  },
  {
    icon: <Link1Icon {...iconProps} />,
    title: "Connections",
    subtitle:
      "Allows you to set up and manage sources of data integration, ensuring seamless connectivity and efficient data flow within your workspace.",
  },
  {
    icon: <DbIcon {...iconProps} />,
    title: "Data Instructions",
    subtitle:
      "Enables you to refine and optimize the understanding of your data structure.",
  },
  {
    icon: <InstrtuctionIcon {...iconProps} />,
    title: "Custom Instructions",
    subtitle:
      "Define how your workspace behaves for specific needs, tailored exclusively for your project.",
  },
  {
    icon: <StackIcon {...iconProps} />,
    title: "Workspace Jobs",
    subtitle:
      "Setting up trigger-based requests such as reports, alerts, and statements.",
  },

  {
    icon: <TaskIcon {...iconProps} />,
    title: "Tasks",
    subtitle:
      "Initiate and manage tasks like retrieval, research, checks, reports, and more.",
  },

  {
    icon: <RolesIcon {...iconProps} />,
    title: "Roles & Permissions",
    subtitle: "Define roles and permissions within the team.",
  },

  {
    icon: <MemberIcon {...iconProps} />,
    title: "Members",
    subtitle: "Invite your team members to join.",
  },

  {
    icon: <PlanIcon {...iconProps} />,
    title: "Plan & Billing",
    subtitle:
      "Your work space is on the Pro plan. 17 days left in your free trial.",
  },
];
