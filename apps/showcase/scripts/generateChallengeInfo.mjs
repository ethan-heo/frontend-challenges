import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const APPS_PATH = path.resolve(__dirname, "../../../apps");
const contents = fs.readdirSync(APPS_PATH);

const challengeDirPaths = contents
  .filter((content) => content !== "showcase")
  .map((content) => path.join(APPS_PATH, content));
const pkgs = [];
const TARGET = "package.json";

for (const challengeDirPath of challengeDirPaths) {
  const contents = fs.readdirSync(challengeDirPath);
  const pkgFile = contents.find((content) => content === TARGET);

  if (pkgFile) {
    const pkgPath = path.join(challengeDirPath, pkgFile);
    const pkg = fs.readFileSync(pkgPath, "utf-8");

    pkgs.push(JSON.parse(pkg));
  }
}

const challengeInfos = [];

for (const pkg of pkgs) {
  challengeInfos.push(pkg.challenge);
}

const CHALLENGE_INFO_PATH = path.resolve(
  __dirname,
  "../src/assets/challenges.json"
);

fs.writeFileSync(
  CHALLENGE_INFO_PATH,
  JSON.stringify({
    infos: challengeInfos,
  })
);
