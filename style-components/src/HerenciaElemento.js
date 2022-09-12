import { css } from "lit-element";
import { StyleComponents } from "./StyleComponents";

export class HerenciaElemento extends StyleComponents {

    static get styles() {
        return [
            super.styles,
            css`button { color: red; }`
        ];
    }

}