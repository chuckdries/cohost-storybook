// story added by @chuck, modified by @chuck
// original post: https://cohost.org/chuck/post/25057-div-style-height
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    {/* ----EDIT BELOW HERE---- */}
    <div
      style={{
        height: "400px",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "url('https://chuckdries.com/static/de3b1f9e6784f1f09be58b04d5d252a2/f89cb/DSC05851.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <h1
        style={{
          color: "transparent",
          background:
            "url('https://chuckdries.com/static/c46e9023f32627779a5b7a3c2dd07c6c/DSC04905.jpg')",
          backgroundColor: "black",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          textAlign: "center",
          margin: "0",
          lineHeight: ".8",
        }}
      >
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
        <br />
        <br />
        <br />
        <br />
        ON THE ROAD
        <br />
        ON THE ROAD
        <br />
      </h1>
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

export const OnTheRoad = Template.bind({});
OnTheRoad.args = {};
