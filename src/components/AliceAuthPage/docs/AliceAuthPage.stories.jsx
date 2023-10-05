import AliceAuthPage from "../Index";
export default {
  title: "components/AliceAuthPage",
  component: AliceAuthPage,
  parameters: {
    docs: {
      description: {
        component: `
This auth page as been designed to be used in any microsoft office add-in or chromium based extension development.
        `,
      },
    },
  },
};
export const AliceAuthPages = AliceAuthPage;

AliceAuthPages.args = {
  children: "Click Here",
};
