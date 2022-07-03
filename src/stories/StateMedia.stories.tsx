// story added by @jkap
// original post: https://cohost.org/jkap/post/31645-div-style-displa
import { ComponentMeta, ComponentStory } from "@storybook/react";
import StoryTemplate, { StoryTemplateProps } from "../StoryTemplate";

const Post = (props: StoryTemplateProps) => (
  <StoryTemplate
    // required props
    {...props}
    // Optional metadata props - if omitted, post appears as from chuck
    creatorHandle="jkap"
    creatorDisplayName="jae"
    creatorProfilePicUrl="https://staging.cohostcdn.org/avatar/1-profile.jpg"
    creatorProfilePicMask="mask-egg" // also valid: 'mask-roundrect' and 'mask-circle'
    originalPostHref="https://cohost.org/jkap/post/31645-div-style-displa"
  >
    {/* ----EDIT BELOW HERE---- */}
    <div
      style={{
          display: "flex",
          borderRadius: "0.75em",
          borderWidth: "1px",
          borderColor: "rgb(var(--color-cherry))",
          padding: "0.75em",
          flexDirection: "column",
          backgroundColor: "rgb(var(--color-notWhite))",
          color: "#191919"
      }}
    >
        <span style={{
            color: "rgb(var(--color-cherry))",
            fontWeight: "bold"
        }}>&#9888; Stay informed</span>
        <span>This Chost links to a China state-affiliated media website.</span>
        <span style={{
            color: "rgb(var(--color-strawberry))",
        }}>Find out more</span>
    </div>
    {/* ----EDIT ABOVE HERE---- */}
  </StoryTemplate>
);

export default {
  title: "Posts/Misinformation Disclaimer", // <--- EDIT THIS
  component: Post,
  argTypes: {
    wrapWithPosts: {
      name: "Wrap with posts",
      type: "boolean",
      defaultValue: false, // <-- maybe edit this, depending on if your post needs scrolling. Can also be toggled in the controls panel by the user
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
Story.storyName = "State Media"  // <--- EDIT THIS
