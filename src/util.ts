export const setDocumentProperty = (property: string, value: string) => {
    document.documentElement.style.setProperty(property, value);
};

// Get document property
export const getDocumentProperty = (property: string) => {
    return document.documentElement.style.getPropertyValue(property);
};