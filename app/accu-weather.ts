import AppStation from "appstation";

export default class AccuWeather extends AppStation.App{
    constructor(){
        super("accu-weather", "Accu Weather", "My Sample Accuweather widget", false, 3, 2);
    }

    protected getInnerHTML():string{
        return `
            <a href="https://www.accuweather.com/en/br/rio-de-janeiro/45449/weather-forecast/45449" class="aw-widget-legal">
            <!--
            By accessing and/or using this code snippet, you agree to AccuWeather’s terms and conditions (in English) which can be found at https://www.accuweather.com/en/free-weather-widgets/terms and AccuWeather’s Privacy Statement (in English) which can be found at https://www.accuweather.com/en/privacy.
            -->
            </a><div id="awcc1497032595084" class="aw-widget-current"  data-locationkey="" data-unit="f" data-language="en-us" data-useip="true" data-uid="awcc1497032595084"></div><script type="text/javascript" src="https://oap.accuweather.com/launch.js"></script>
        `;
    }
}