import { parseContent } from "../lib/index";
import * as fs from "fs";
import * as vfile from "to-vfile";
import { from, of } from "rxjs";
import { mergeMap, map } from "rxjs/operators";

of(vfile.readSync("./demo/example.md"))
  .pipe(
    mergeMap((text) => from(parseContent(text))),
    map((text) => (text = JSON.parse(text)))
  )
  .subscribe((parsed) => {
    console.log(parsed);
    fs.appendFileSync("./demo/index.html", parsed.body);
  });
