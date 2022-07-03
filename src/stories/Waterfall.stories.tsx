import { ComponentMeta } from "@storybook/react";
import StoryTemplate from "../StoryTemplate";

const Waterfall = () => (
  <StoryTemplate>
    <div
      id="post" // set an ID to make it easy to find in the devtools
      style={{
        margin: "auto",
        height: "500px",
        width: "100%",
        background: `url("https://staging.cohostcdn.org/attachment/12c1ef42-f9a1-4e65-ad42-640d18af7e26/_DSC6400.jpg") center center / contain no-repeat fixed`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "white",
        }}
      >
        Waterfall
      </h1>
    </div>
  </StoryTemplate>
);

export default {
  title: "Posts/Waterfall",
  component: Waterfall,
} as ComponentMeta<typeof Waterfall>;

export const Primary = () => <Waterfall />;
