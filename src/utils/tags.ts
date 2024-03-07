export function tagClass(tag: string) {
    return `tag-${tag.replace(/[ &]+/g, "-")}`;
}
