const DEFAULT_DOCUMENT_TITLE = "di-todo";

export const setDocumentTitle = (pageName?: string) => {
  const title = pageName
    ? `${DEFAULT_DOCUMENT_TITLE} | ${pageName}`
    : DEFAULT_DOCUMENT_TITLE;

  if (document?.title && document.title !== title) {
    document.title = title;
  }
};
