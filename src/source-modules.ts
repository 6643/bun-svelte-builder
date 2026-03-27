const SUPPORTED_LOCAL_SOURCE_MODULE_EXTENSIONS = [".svelte", ".ts", ".js", ".mjs"] as const;

export const formatSupportedLocalSourceModuleExtensions = (): string =>
    SUPPORTED_LOCAL_SOURCE_MODULE_EXTENSIONS.join(", ");

export const isSupportedJavaScriptSourceModule = (path: string): boolean =>
    path.endsWith(".js") || path.endsWith(".mjs");

export const isSupportedLocalSourceModule = (path: string): boolean =>
    SUPPORTED_LOCAL_SOURCE_MODULE_EXTENSIONS.some((extension) => path.endsWith(extension));

export const isSupportedSvelteSourceModule = (path: string): boolean => path.endsWith(".svelte");

export const isSupportedTypeScriptSourceModule = (path: string): boolean => path.endsWith(".ts");
