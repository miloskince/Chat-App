
import { Content } from "./layout/content";


const app = document.querySelector('#content');

let content = new Content();

app.appendChild(content.getNode());
