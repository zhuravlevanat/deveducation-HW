import React from 'react';
import PureComponent from '../../base/PureComponent';
import EditModule from "./EditModule";
import axios from 'axios';

export default class OverEditModules extends PureComponent {

    savePersonChanges = async () => {
      // вызов метода записи в БД изменений

    };
    mergePersonChanges = () => {
      // вызов метода мерджа в БД изменений
    };
    cancelPersonChanges = () => {
      // вызов метода отмены
    };

    render() {
        return (
            <EditModule
                savePersonChanges={this.savePersonChanges}
                mergePersonChanges={this.mergePersonChanges}
                cancelPersonChanges={this.cancelPersonChanges}
            />
        );
    }
}
