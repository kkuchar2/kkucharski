export const setDocumentProperty = (property: string, value: string) => {
    document.documentElement.style.setProperty(property, value);
};