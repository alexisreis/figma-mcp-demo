# Carrefour React Native retail application

The application aims to clone current Carrefour France mobile app.
This app will have multiple page in a tab bar (Accueil, Rechercher, Mes produits, Promotions, Panier).

**OUTPUT ONLY TYPESCRIPT CODE**

## Code Output Rules

- ONLY output code, never explanations
- No markdown code blocks unless requested
- No descriptive text or comments about functionality
- Generate complete, working implementations

All the produced components files should be in this specific format:

```typescript
import { Theme, useTheme } from "@/hooks/useTheme";

interface ComponentNameProps {
  // Props here
}

export const ComponentName = ({/* props here */}: ComponentNameProps) => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    // JSX here
  );
};

const getStyles = (theme: Theme) =>
  StyleSheet.create({
    // Styles using theme properties
  });
```

Colors in StyleSheet should all come from the theme.
Theme follows this format:

```typescript
export type Theme = {
  primaryColor: string;
  text: string;
  background: string;
  icon: string;
};
```

You will need to edit these colors to follow styles from Figma assets.
