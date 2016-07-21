import angular from 'angular';
import 'angular-ui-router';
import _ from 'lodash';


//Import Controllers//
import { AppController } from "./controllers/app.controller";
import { serverConstant } from "./server.constant";
angular
    .module("app", [])
    .controller("AppCtrl", AppController)
    .constant("SERVER", serverConstant)
