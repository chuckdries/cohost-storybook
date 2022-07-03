// story added by @chuck, modified by @chuck
// original post: https://cohost.org/chuck/post/25400-div-style-aspect-r
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    {/* ----EDIT BELOW HERE---- */}
    <div
      style={{
        aspectRatio: "3/2",
        width: "100%",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "column",
        background:
          "url('https://chuckdries.com/static/08924e70edc5d8bf9ebd1a39ebbaf5af/DSC08521.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
    >
      <span
        style={{
          boxShadow: "4px 4px 10px 0px rgba(0,0,0,.6)",
          background: "hsla(0,0%,90%,0.3)",
          marginTop: "1rem",
        }}
      >
        <h1
          style={{
            margin: "0",
            color: "transparent",
            background:
              "url('https://chuckdries.com/static/c3bf09cce3a7ac5c878ab1206c8f29d5/DSC08511.jpg')",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            lineHeight: ".8",
            padding: "6px",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
          }}
        >
          as the fire slowly fades
          <br />
          as the fire slowly fades
          <br />
          as the fire slowly fades
          <br />
          as the fire slowly fades
          <br />
          as the fire slowly fades
          <br />
          as the fire slowly fades
          <br />
        </h1>
      </span>
    </div>
    <p>Sorry, this won't work in mobile safari</p>
    {/* ----EDIT ABOVE HERE---- */}
  </StoryTemplate>
);

export default {
  title: "Posts/Text Masking",
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: true,
    },
    showHTML: {
      name: "Show HTML",
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const FireFades = Template.bind({});
FireFades.args = {};
