import readYamlFile from "read-yaml-file"

export const prerender = true;
export const csr = false;

export async function load () {

    return {
        content:  await readYamlFile("./static/content/vim.yml")
    }
}