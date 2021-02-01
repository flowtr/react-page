import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import { Markdown, MarkdownJSON } from "@cenguidanos/node-markdown-parser";

export interface MarkdownProps {
    path: string;
    purify: boolean;
    /**
     * Optional rendering properties
     */
    render: {
        subtitle?: boolean;
        title?: boolean;
        date?: boolean;
    };
}

export const MarkdownPage = (
    { path, purify, render }: MarkdownProps = {
        path: "",
        purify: true,
        render: { subtitle: true, date: true, title: true },
    }
) => {
    const markdown: Markdown = new Markdown({});

    const [data, setData] = useState<
        MarkdownJSON<Record<string, unknown>> | undefined
    >(undefined);

    if (render.subtitle === undefined) render.subtitle = true;
    if (render.title === undefined) render.title = true;
    if (render.date === undefined) render.date = true;

    useEffect(() => {
        if (path.trim() === "") return;
        fetch(path)
            .then((file) => file.text())
            .then((file) => {
                setData(markdown.toJSON<"single">(file));
            })
            .catch(console.error);
    }, [path, purify]);

    return (
        <div className={"page"}>
            <h2 className={"page-title"}>
                {data && render.title ? data.title : "Loading..."}
            </h2>
            <h3 className={"page-title"}>
                {data && render.subtitle ? data.subtitle : ""}
            </h3>
            <small className={"page-date"}>
                {data && render.date
                    ? new Date(data.updatedAt).toISOString()
                    : ""}
            </small>
            <div
                className={"content"}
                dangerouslySetInnerHTML={{
                    __html: purify
                        ? DOMPurify.sanitize(
                              data ? data.body : "Loading page..."
                          )
                        : data
                        ? data.body
                        : "Loading page...",
                }}
            />
        </div>
    );
};
