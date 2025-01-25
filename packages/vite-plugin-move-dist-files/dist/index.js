import path from "node:path";
import fs from "node:fs";
function moveDistFiles({ distPath, targetPath }) {
    return {
        name: "move-dist-files",
        closeBundle: () => {
            // 디렉토리 생성
            fs.mkdirSync(targetPath, { recursive: true });
            // dist 내 모든 파일/폴더 이동
            const files = fs.readdirSync(distPath);
            for (const file of files) {
                fs.renameSync(path.join(distPath, file), path.join(targetPath, file)); // 파일 이동
            }
        },
    };
}
export default moveDistFiles;
