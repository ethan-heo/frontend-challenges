import fs from "node:fs";
import prettier from "prettier";

const addPackages = async (path: string) => {
  const PKG_PATH = `${path}/package.json`;
  const content = fs.readFileSync(PKG_PATH, {
    encoding: "utf-8",
  });
  const pkg = JSON.parse(content);

  pkg.devDependencies["vite-plugin-move-dist-files"] = "workspace:*";
  pkg["challenge"] = {
    name: pkg.name,
    description: "",
    source: "",
    sourceLink: "",
    skills: [],
  };

  fs.writeFileSync(
    PKG_PATH,
    await prettier.format(JSON.stringify(pkg), { parser: "json" }),
    { encoding: "utf-8" },
  );
};

export default addPackages;
