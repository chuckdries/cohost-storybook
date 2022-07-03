import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate {...props}>
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
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => (
  <Post {...args} />
);

export const Primary = Template.bind({});
Primary.args = {}
