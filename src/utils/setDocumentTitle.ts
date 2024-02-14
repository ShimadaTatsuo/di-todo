import { APP_NAME } from "../config/config";

export const setDocumentTitle = (pageName?: string): void => {
  const title = pageName ? `${APP_NAME} | ${pageName}` : APP_NAME;

  if (document?.title && document.title !== title) {
    document.title = title;
  }
};
