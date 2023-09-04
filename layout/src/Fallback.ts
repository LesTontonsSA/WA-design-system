export default function Fallback(componentName: string) {
  return () => {
    console.warn(
      `No component found for: ${componentName}. Did you forget to add __typename to the graphql query?`,
    );
    return null;
  };
}
