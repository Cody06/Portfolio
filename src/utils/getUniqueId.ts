export default function getUniqueId(str: string) {
    return Date.now().toString() + str.trim().slice(0, 3);
}
