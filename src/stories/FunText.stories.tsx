import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CSSProperties } from "react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const h1Style: CSSProperties = {
  fontSize: "min(15vw, 6rem)",
  margin: 0,
  position: "relative",
};

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h1
        style={{ ...h1Style, transform: "rotate(-30deg)", alignSelf: "center" }}
      >
        the
      </h1>
      <h1 style={{ ...h1Style, transform: "rotate(-15deg)" }}>ULTIMATE</h1>
      <h1
        style={{
          ...h1Style,
          transform: "rotate(15deg)",
          alignSelf: "end",
          top: "3rem",
          color: "cadetblue",
        }}
      >
        POSTING
      </h1>
      <h1
        style={{
          ...h1Style,
          transform: "rotate(-5deg)",
          left: "min(4rem, 5vw)",
        }}
      >
        TOOL
      </h1>
      <a
        style={{ alignSelf: "center" }}
        href="https://cohost-storybook.netlify.app/"
      >
        <h2
          style={{
            border: "3px solid cadetblue",
            padding: "1em",
            fontStyle: "italic",
            display: "inline-block",
            textDecoration: "underline",
            textDecorationColor: "cadetblue",
          }}
        >
          Discover the IDE for chosts
        </h2>
      </a>
    </div>
  </StoryTemplate>
);

export default {
  title: "Posts/Fun Text", // <--- EDIT THIS
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: false,
    },
    showHTML: {
      name: "Show HTML",
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
