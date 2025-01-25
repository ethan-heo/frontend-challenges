interface Options {
    distPath: string;
    targetPath: string;
}
declare function moveDistFiles({ distPath, targetPath }: Options): {
    name: string;
    closeBundle: () => void;
};
export default moveDistFiles;
