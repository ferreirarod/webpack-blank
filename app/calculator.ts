import Appstation from "appstation";

export default class Calculator extends Appstation.App{

    constructor() {
        super("calculator", "Calculator App", "Calculator Widget", false, 2, 4);
    }

    protected getInnerHTML():string{
        return `<iframe src="http://www.uize.com/widgets/calculator/web.html" style="width:240px; height:314px;" scrolling="no" frameborder="0" allowtransparency="true"></iframe>`;
    }

}