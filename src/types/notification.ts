import { Ionicons } from "@expo/vector-icons";

export interface IconProps {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}

export type NotificationItem = {
  id: number;
  type: string;
  sender: string;
  content: string;
  targetId: number | string;
  createdAt: string;
  isRead: boolean;
};
