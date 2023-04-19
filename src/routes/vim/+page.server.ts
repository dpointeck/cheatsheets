import readYamlFile from "read-yaml-file";
import showdown from "showdown";

export const prerender = true;
export const csr = false;

export async function load () {

    let content: any = await readYamlFile('src/content/vim.yml')
    let converter = new showdown.Converter()
    let introHtml = converter.makeHtml(content.intro)
    content.intro = introHtml;
    
    return {
        content: content
    }
}