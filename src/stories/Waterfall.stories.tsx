// story added by @chuck, modified by @chuck
// original post: https://cohost.org/chuck/post/23133-div-style-margin
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate
    // required props
    {...props}
    // Optional metadata props - if omitted, post appears as from chuck
    creatorHandle="chuck"
    creatorDisplayName="chuck"
    creatorProfilePicUrl="https://staging.cohostcdn.org/avatar/808-468d977b-f33c-472b-966d-52f2c2ce2c49-profile.jpg"
    creatorProfilePicMask="mask-squircle" // also valid: 'mask-roundrect' and 'mask-circle'
    originalPostHref="https://cohost.org/chuck/post/23133-div-style-margin"
  >
    {/* ----EDIT BELOW HERE---- */}
    <div
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
    {/* ----EDIT ABOVE HERE---- */}
  </StoryTemplate>
);

export default {
  title: "Posts/Fixed Background", // <--- EDIT THIS
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: true, // <-- maybe edit this, depending on if your post needs scrolling. Can also be toggled in the controls panel by the user
    },
    showHTML: {
      name: "Show HTML",
      type: "boolean",
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const Story = Template.bind({});
Story.args = {}
Story.storyName = "Waterfall"  // <--- EDIT THIS
