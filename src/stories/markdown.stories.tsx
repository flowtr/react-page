import React from "react";
import { MarkdownPage, MarkdownProps } from "../markdown-page";
import { templateForComponent } from "./helper";
import { Meta } from "@storybook/react";

const template = templateForComponent(MarkdownPage);

export default {
    title: "MarkdownPage",
    component: MarkdownPage,
    argTypes: {
        path: { control: "text" },
        purify: { control: "boolean" },
        render: { control: "object" },
    },
} as Meta<MarkdownProps>;

export const MdPage = template({
    path: "",
    purify: false,
    render: { subtitle: true, date: true, title: true },
});
