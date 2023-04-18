import readYamlFile from "read-yaml-file"

export async function load () {

    return {
        content:  await readYamlFile("./content/vim.yml")
    }
}