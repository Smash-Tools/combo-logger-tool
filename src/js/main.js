//Import Libraries//
import angular from 'angular';
import 'angular-ui-router';
import _ from 'lodash';


//Import Controllers//
import { HomeController } from "./controllers/home.controller";
import { AddComboController } from "./controllers/add_combo.controller";

//Import Constants//
import { serverConstant } from "./constants/server.constant";
import { charactersConstant } from "./constants/characters.constant";
import { stagesConstant } from "./constants/stages.constant";

//Import Config//
import { config } from "./config";
angular
    .module("app", ["ui.router"])
    .config(config)
    .controller("HomeCtrl", HomeController)
    .controller("AddCtrl", AddComboController)
    .constant("SERVER", serverConstant)
    .constant("CHARACTERS", charactersConstant)
    .constant("STAGES", stagesConstant)
