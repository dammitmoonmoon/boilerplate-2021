export = DevServerConfigNamespace;

declare namespace DevServerConfigNamespace {
    interface Config {
        production: boolean;
    }

    const serverConfig: Config;
}
