import readYamlFile from "read-yaml-file"

export const prerender = true;
export const csr = false;

export async function load (event) {

    let content = await readYamlFile('src/content/vim.yml')
    
    console.log(content)
    return {
        content: content
    }
}