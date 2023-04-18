import readYamlFile from "read-yaml-file"

export const prerender = true;
export const csr = false;

export async function load (event) {

    let content = await event.fetch("/content/vim.json")
    let json = await content.json()
    console.log(json)
    return {
        content: json
    }
}