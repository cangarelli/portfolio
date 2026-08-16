export type Language = "eng" | "esp";
export type Theme = "light" | "dark" | "system";
export type NotificationState = boolean;
export type UserPreference = {
  theme: Theme;
  language: Language;
  notification: NotificationState;
};
