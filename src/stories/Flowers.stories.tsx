// story added by @chuck, modified by @chuck
// original post: https://cohost.org/chuck/post/24893-div-style-width-1
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
    {/* ----EDIT BELOW HERE---- */}
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          color: "transparent",
          background:
            "url('https://chuckdries.com/static/00c9a9a92accc7002da6c30a9c4b58a1/_DSC6219.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundAttachment: "fixed",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          fontSize: "150px",
          textAlign: "center",
          margin: "0",
          lineHeight: ".8",
        }}
      >
        Flowers
        <br />
        Flowers
        <br />
        Flowers
        <br />
        Flowers
        <br />
        Flowers
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

export const Flowers = Template.bind({});
Flowers.args = {};
