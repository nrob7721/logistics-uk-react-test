"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const header_1 = __importDefault(require("./components/header"));
const menu_js_1 = __importDefault(require("./components/menu.js"));
const home_js_1 = __importDefault(require("./components/home.js"));
const drivers_tsx_1 = __importDefault(require("./components/drivers/drivers.tsx"));
const vehicles_js_1 = __importDefault(require("./components/vehicles.js"));
const about_js_1 = __importDefault(require("./components/about.js"));
const react_router_dom_1 = require("react-router-dom");
const json_driver_service_tsx_1 = require("./services/json-driver-service.tsx");
function App() {
    const driverService = new json_driver_service_tsx_1.JsonDriverService();
    return (<div className="App">
      <header_1.default />
      <react_router_dom_1.BrowserRouter>
        <div className="content">
          <menu_js_1.default />
          <div className="main">
            <react_router_dom_1.Routes>
              <react_router_dom_1.Route path="/" element={<home_js_1.default />}/>
              <react_router_dom_1.Route path="/drivers" element={<drivers_tsx_1.default driverService={driverService}/>}/>
              <react_router_dom_1.Route path="/vehicles" element={<vehicles_js_1.default />}/>
              <react_router_dom_1.Route path="/about" element={<about_js_1.default />}/>
            </react_router_dom_1.Routes>|
          </div>
        </div>
      </react_router_dom_1.BrowserRouter>
    </div>);
}
exports.default = App;
