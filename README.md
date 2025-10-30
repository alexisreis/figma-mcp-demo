# mcp-figma-reactnative

This demo shows a mock-up of Carrefour France mobile application using Expo Go.

![Demo](/docs/demo.gif "mcp figma demonstration")

## Prerequisites

- Node > 20
- iOS simulator on Android simulator running
- GitHub Copilot or any extension that is compatible with MCP and agents / tool calling
- Figma Desktop with a Dev mode enabled account
- Configure Figma MCP with your Github Copilot (or other extension). [Tutorial here](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server).

Tested on macOs with an iOS simulator (iOS 18.6).

## Project installation

```sh
bun install
```

## How to start the app

- On an iOS simulator:

```sh
bun start --ios --localhost
```

- On an Android simulator

```sh
bun start --android localhost
```

You should see ExpoGo starting on your simulator and launching the app.

## Demo

In this demonstration, we integrate the last component of the design that is not yet implemented on the homescreen: the GoToShoppingListCard component.

1. You will need to open [this project](https://www.figma.com/design/6DqDcFqb6BDLAi9qpHCmgY/MCP---Carrefour?node-id=0-1&t=woY1wG8rALbuR3Mc-1) on Figma Desktop and enable the MCP in the right tab.

2. On Figma, right click on the GoToShoppingListCard component and select "Copy link to selection". We will use that link to tell our agent what component it should create.

3. Run the expo project on a simulator (or on a real device).

4. In Github copilot, create an new conversation, select Agent mode and an agentic model (like Claude Sonnet 4 or other model compatible with tool calling) type this prompt:

   Create this GoToShoppingList component **<PASTE_FIGMA_SELECTION_LINK>** using existing NewTag and TextButton and display it on Home.

Do not forget to add to the context:

- the Homepage file: `index.tsx`
- the already implemented components it has to use: `NewTag.tsx` and `TextButton.tsx`

4. Run the prompt and watch as the magic happens

Notice that the agent uses 2 MCP:

- `get_design_context` to extract all styles and assets
- `get_screenshot` to get a visual representation of what the component should look like

and the image asset present in the design is directly imported inside our project.

- We are leveraging rule files for this so the model has basic context about the projet we are working on and convention guidelines to use in this project. You can check them out [here for Github Copilot](.github/instructions.md) and [here for Gemini Code assist](.gemini/styleguide.md).
